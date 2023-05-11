import styled from "styled-components";
import BananaDesc from "./BananaDesc";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
  margin: 0;
`;

const WhatIs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
`;

// const Line = styled.img`
//   height: 5px;
// `;

// const Subtitle = styled.p`
//   color: #da4ea2;
//   margin: 0;
// `;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #000000;
  margin: 0;
  padding-right: 60px;
`;

function Who() {
  return (
    <Section>
      <Container>
        <Left>
          <BananaDesc />
        </Left>
        <Right>
          <Title>What is banana?</Title>
          <WhatIs></WhatIs>
          <Desc>
            Bananas are one of the most popular fruits in the world. They are
            native to Southeast Asia, but are now grown in many tropical and
            subtropical regions. Bananas are an important source of nutrition,
            with high levels of vitamins, minerals, and dietary fiber. They are
            a good source of potassium, magnesium, and other minerals, and are
            low in calories and fat-free.
          </Desc>
          <Button>Learn More</Button>
        </Right>
      </Container>
    </Section>
  );
}

export default Who;
