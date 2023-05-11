import { useState } from "react";
import styled from "styled-components";
import BananaDonut from "./BananaDonut";
import BananaPop from "./BananaPop";
import BananaMilk from "./BananaMilk";
import BananaCakes from "./BananaCakes";
import BananaChoco from "./BananaChoco";

const DATA = [
  {
    title: "Banana Donuts",
  },
  {
    title: "Banana Popsicle",
  },
  {
    title: "Banana Milk",
  },
  {
    title: "Banana Cake",
  },
  {
    title: "Choco Banana",
  },
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 2px black;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.3s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;

function Works() {
  const [menu, setMenu] = useState("Banana Donuts");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {DATA.map((item) => {
              return (
                <ListItem key={item.title} text={item.title} onClick={() => setMenu(item.title)}>
                  {item.title}
                </ListItem>
              );
            })}
          </List>
        </Left>
        <Right>
          {menu === "Banana Donuts" ? (
            <BananaDonut />
          ) : menu === "Banana Popsicle" ? (
            <BananaPop />
          ) 
          : menu === "Banana Cake" ? (
            <BananaCakes />
          ) : 
          menu === "Choco Banana" ? (
            <BananaChoco />
          ) :(
            <BananaMilk />
          )}
        </Right>
      </Container>
    </Section>
  );
}

export default Works;
