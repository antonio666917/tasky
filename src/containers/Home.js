import React, { Component } from "react";
import styled from "styled-components";
import Tasky from "../components/Tasky/Tasky";

const StyledHome = styled.main``;

class Home extends Component {
  render() {
    return (
      <StyledHome>
        <Tasky />
      </StyledHome>
    );
  }
}

export default Home;
