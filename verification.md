# verification.md — verify-portfolio スキルの使い方

`verify-portfolio` は本番ビルドを headless Chrome で実際に開いて証明するためのスキル。
単体テストの代わり。`src/` や `dist/assets/*.js` の文字列検索は証明にならない。

スキル本体: `.opencode/skills/verify-portfolio/SKILL.md`

## いつ使うか

- 見た目・ナビ・セクション・404 など変更後の実ブラウザ確認が必要なとき
- 1機能 = 1回 drive が原則。`features/` に載っている機能はショートカットで済ませない

## 前提

- `bun run build` 済み（`dist/index.html` が必要）
- `python3` が PATH にある（`drive.sh` + `launch-chrome.py` が使う）
- Chrome 本体（macOS は `/Applications/Google Chrome.app`、他は `google-chrome` / `chromium`、`$CHROME_BIN` で上書き可）

## 定型フロー

```sh
bun run build
PORT=4311 .opencode/skills/verify-portfolio/launch.sh "$PORT"
# READY http://127.0.0.1:4311/ が出たら成功

.opencode/skills/verify-portfolio/doctor.sh 4311
# OK なら駆動してよい

.opencode/skills/verify-portfolio/drive.sh 4311 /tmp/verify-portfolio/4311/evidence

# rendered DOM に対する grep で assertion（例）
grep -q 'id="about"' /tmp/verify-portfolio/4311/evidence/root.dom.html
grep -q 'Oops! Page not found' /tmp/verify-portfolio/4311/evidence/404.dom.html

.opencode/skills/verify-portfolio/cleanup.sh 4311
# 失敗時も必ず実行。evidence は消えない
```

## ポート分離

- デフォルト `4311`。空きポートなら何でも可、`--strictPort` のため他と奪い合わない
- PID は `/tmp/verify-portfolio/<PORT>/server.pid`、証拠は `/tmp/verify-portfolio/<PORT>/evidence/`
- 8080（dev）や 4173 を自分のものと決めつけない

## ヘルパー一覧（第1引数は PORT）

| script | 用途 |
|---|---|
| `launch.sh [PORT]` | `vite preview` で `dist/` を配信、readiness を待って pid 記録 |
| `doctor.sh [PORT]` | 読取専用ヘルスチェック。`OK` / `NOT_BUILT` / `NOT_LISTENING` / `STALE_PIDFILE` |
| `drive.sh [PORT] [OUTDIR]` | 全ターゲットを headless Chrome で取得（DOM + PNG） |
| `cleanup.sh [PORT]` | pidfile のプロセスだけ kill。pidfile と log を削除、evidence は保持 |

`launch-chrome.py` は Chrome を detached（独自セッション）で起動し、セッションリーダー PID を返す。`drive.sh` が成果物安定後に pgid ごと SIGKILL するため、Chrome が残らない。

## drive の取得物

ターゲット（`/`、`/#about`、`/#work`、`/#personal`、`/#contact`、`/nonexistent-xyz`）：

- `<target>.dom.html` — JS 実行後の rendered DOM
- `<target>.png` — ビューポートスクリーンショット（1280x900）
- `checks.log` — 実行した grep / assertion と結果

DOM と PNG はセットで残す。片方だけは不完全。

## 機能マップ（`features/`）

- `navigation.md` — 固定トップナビ、アンカースクロール、Projects ドロップダウン、モバイルメニュー
- `hero.md` — ファーストビュー、見出し、`View My Work` / `Get In Touch`
- `work-projects.md` — Work Experience カード、実績、`Let's Connect`
- `personal-projects.md` — プロジェクトグリッド、ステータスバッジ、GitHub / Live Demo
- `contact.md` — connect バナー、メール + ブログ、フッター、404 フォールバック

詳細な grep 例と注意点は各機能ファイルが正本。`features/README.md` のカバレッジルールに従い、載っている機能は対応ファイルを見て駆動する。

## 安定ハンドル（優先順）

1. セクション id（`home`、`about`、`work`、`personal`、`contact`）
2. 可視テキスト（`View My Work`、`Get In Touch`、`Read My Blog`、`Return to Home`）
3. `aria-label`（`Go to top`）
4. `mailto:` href

座標・タブ順は使わない。

## 証明ルールと限界

- HTTP 経由で配信中のページを実レンダラで開く。モックなし、テスト用エンドポイントなし（静的サイトのため）
- 副作用の書き込みはない（フォーム POST・storage・API なし）。証明文にその旨を書く。外部リンクと `mailto:` は href 存在のみ確認し、開かない
- `--dump-dom` はクリックしない。`scrollIntoView` の滑らかスクロールは観測できないため、対象セクションとナビ文言の DOM 存在をもって証明とする。スクロールを観測したとは書かない
- Radix のドロップダウン項目は開くまで DOM に出ない。トリガー（`Projects`）を assert する

## トラブル時

まず `doctor.sh <PORT>` を読む。`NOT_BUILT` → `bun run build`、`STALE_PIDFILE` → `cleanup.sh` 後に `launch.sh`、`NOT_LISTENING` → `launch.sh`。
