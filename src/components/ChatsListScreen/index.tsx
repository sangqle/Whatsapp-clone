import React from "react";

import ChatsNavBar from "./ChatsNavbar";
import ChatsList from "./ChatsList";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

const ChatsListScreen: React.FC = () => (
  <Container>
    <ChatsNavBar />
    <ChatsList />
  </Container>
);

export default ChatsListScreen;
