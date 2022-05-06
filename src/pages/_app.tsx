import Theme from '../styles/theme';

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 