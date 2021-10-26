import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineBold,
  AiOutlineMedium,
} from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "#ffffff",
            marginBottom: "20px",
          }}
        >
          {/* ToDo change icon */}
          <FaRegSmile size="3rem" style={{ paddingRight: "5px" }} />
          <Span>Koji Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#oss">
          <NavLink>open source</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>tech stack</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>about</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href="https://github.com/koji/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://twitter.com/kojikanao_nyc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/kojikanao/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.instagram.com/k20code/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://dev.to/kojikanao"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineBold size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://koji-kanao.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineMedium size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
