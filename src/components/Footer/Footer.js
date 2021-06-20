import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

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
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>call</LinkTitle>
          <LinkItem href=""></LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>email</LinkTitle>
          <LinkItem href="">kojikanao503＠gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>test</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};
