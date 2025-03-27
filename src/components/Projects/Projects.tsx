import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

export const Projects = () => {
  const sortedProjects = projects.sort((a, b) => b.id - a.id);
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <br />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {sortedProjects.map(({ id, image, title, description, tags, link, code }) => (
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
                {/* <ExternalLinks href={""}>Code</ExternalLinks> visit */}
                {/* <ExternalLinks href={""}>Source</ExternalLinks> source */}
              </UtilityList>
            </TitleContent>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>)
};
