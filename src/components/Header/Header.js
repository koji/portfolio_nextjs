import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

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
          <DiCssdeck size="3rem" />
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
      <SocialIcons href="">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
