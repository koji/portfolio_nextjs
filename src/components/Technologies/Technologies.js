import React from "react";
import { DiCode, DiReact, DiVisualstudio } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in web dev, creative coding, and
      hardware.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br />
            reactjs, typescript, redux, webpack, and rollupjs
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            python and nodejs
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiVisualstudio size="3rem" />
        <ListContainer>
          <ListTitle>Creative coding</ListTitle>
          <ListParagraph>
            Experience with <br />
            Processing(P5js), openFrameworks, touchDesigner, a little bit
            Shaders
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
