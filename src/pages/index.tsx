// import BgAnimation from "@components/BackgrooundAnimation/BackgroundAnimation";
// import { BackgroundAnimationWithVanta } from "@components/BackgrooundAnimation/BackgroundAnimationWithVanta";
import { Hero } from "@components/Hero/Hero";
import { Projects } from "@components/Projects/Projects";
import { Technologies } from "@components/Technologies/Technologies";
import { About } from "@components/About/About";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { OSS } from "@components/OSS/OSS";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      
      <Projects />
      <OSS />
      <Technologies />
      <About />
    </Layout>
  );
};

export default Home;
