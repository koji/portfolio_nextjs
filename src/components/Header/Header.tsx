import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineBold,
  AiOutlineMedium,
} from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from "three";

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

export const Header = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          // color1: "#0000ff",
          // color2: "#ffffff"
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Container ref={vantaRef}>
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
          href="https://twitter.com/0xkoji"
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
          href="https://www.instagram.com/0xsleepyforest.888/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://dev.to/0xkoji"
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
};

// export default Header;
