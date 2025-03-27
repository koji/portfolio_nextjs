import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineBold,
  AiOutlineMedium,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/koji/">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/0xkoji">
            <AiFillTwitterSquare size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/kojikanao/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://baxin.pages.dev/">
            <AiOutlineBold size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://dev.to/kojikanao">
            <AiOutlineBold size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://koji-kanao.medium.com/">
            <AiOutlineMedium size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};
