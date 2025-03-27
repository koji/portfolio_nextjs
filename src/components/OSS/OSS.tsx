import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./OSSStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { OSSProjects } from "../../constants/constants";

export const OSS = () => (
  <Section nopadding id="oss">
    <SectionDivider />
    <br />
    <SectionTitle>OSS</SectionTitle>
    <GridContainer>
      {OSSProjects.sort((a, b) => b.id - a.id).map(
        ({ id, image, title, description, tags, link, code }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Hr />
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>stack</TitleContent>
                <TagList>
                  {tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                {link && <ExternalLinks href={link}>link</ExternalLinks>}
                {code && <ExternalLinks href={code}>code</ExternalLinks>}
              </UtilityList>
            </TitleContent>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);
