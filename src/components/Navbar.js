import styled from "styled-components";



const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding : 10px 0;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Icons = styled.div``;
const Logo = styled.img`
    height : 50px;
`;
const List = styled.ul`
    display: flex;
    gap: 20px;
    padding: 0;
`;
const ListItem = styled.li`
    list-style: none;
    cursor : pointer;
`;
const Button = styled.button`
    width : 100px;
    padding: 10px;
    background-color : #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor : pointer;
`;

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./images/logo.png" alt="logo" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>What is</ListItem>
            <ListItem>Products</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
            <Button>Banana</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;
