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
        <SectionText style={{ color: "#ffffff" }}>
          This is <b>Koji Kanao</b>'s portfolio site.
          <br /> He is a software eng in <i>Brooklyn</i>.
          {/* <br />
          He develops a passion for learning and he will never cease to grow. */}
        </SectionText>
        <Button onClick={() => (window.location = "https://github.com/koji")}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);
