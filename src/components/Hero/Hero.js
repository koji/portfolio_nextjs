import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, ColorSpan } from "./HeroStyles";

export const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <ColorSpan>Thank you for visiting</ColorSpan> <br /> My Portfolio
        </SectionTitle>
        <SectionText>
          This is Koji Kanao's portfolio site which is built by nextjs.
          <br /> He is a software engineer in NYC currently.
        </SectionText>
        <Button onClick={() => (window.location = "https://github.com/koji")}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);
