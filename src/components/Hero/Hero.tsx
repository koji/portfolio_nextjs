import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, ColorSpan } from "./HeroStyles";

const introText = `This is Koji Kanao's portfolio site.
          He is an software eng in Brooklyn. Currently, he is working on a robotics startup company.`;

export const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <ColorSpan>Thank you for visiting</ColorSpan> <br /> My Portfolio
        </SectionTitle>
        <SectionText>{introText}</SectionText>
        {/* <Button
          onClick={() => (window.location.href = "https://github.com/koji")}
        >
          Learn More
        </Button> */}
      </LeftSection>
    </Section>
  </>
);
