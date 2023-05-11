import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container= styled.div`
   display: flex;
   justify-content: center;
   height: 90%;
   padding: 10px 0;
   flex-direction: column;
   text-align: center;
`;

const HeroImage = styled.img`
  height: 50%;
  align-self: center;
  animation: animate 2s infinite ease alternate;

  @keyframes animate{
   to{
      transform: translateY(20px)
   }
  }
`;

const HeroImageShadow = styled.img`
  height: 10%;
  align-self: center;
  margin-bottom: 10px;
`;

function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <HeroImage src="./images/banana-hero.png" />
        <HeroImageShadow src="./images/banana-hero-bg.png" />
      <h2>Get Started</h2>
      </Container>
    </Section>
  );
}

export default Hero;
