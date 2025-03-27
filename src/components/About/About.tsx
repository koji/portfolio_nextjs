import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

export const About = () => {
  return (
    <Section>
      <SectionDivider />
      <br />
      <SectionTitle main>About Koji</SectionTitle>
      <SectionText>
        Koji is a software engineer with a passion to build challenging products
        for improving people’s lives. Since I graduated from New York
        University, he has worked on my projects with TypeScript, React, and
        Python. He has also contributed to open-source projects on GitHub.
      </SectionText>
    </Section>
  );
};
