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
      {/* <LinkList>
        <LinkColumn>
          <LinkTitle>call</LinkTitle>
          <LinkItem href=""></LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>email</LinkTitle>
          <LinkItem href="">kojikanao503＠gmail.com</LinkItem>
        </LinkColumn>
      </LinkList> */}
      <SocialIconsContainer>
        {/* <CompanyContainer>
          <Slogan>test</Slogan>
        </CompanyContainer> */}
        <SocialContainer>
          <SocialIcons href="https://github.com/koji/">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/kojikanao_nyc">
            <AiFillTwitterSquare size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/kojikanao/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/k20code/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://dev.to/kojikanao">
            <AiOutlineBold size="3rem" />
          </SocialIcons> */}
          <SocialIcons href="https://koji-kanao.medium.com/">
            <AiOutlineMedium size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};
