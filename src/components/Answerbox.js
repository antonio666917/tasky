import React, { Component } from "react";
import styled from "styled-components";

const StyledAnswerbox = styled.div`
  position: relative;
  width: 600px;
  margin: 0 auto;
  border-radius: var(--border_radius);
  border: 8px solid var(--gray_light);
  padding: 8px;
  margin-top: 1rem;
`;

class Answerbox extends Component {
  render() {
    return <StyledAnswerbox>hi hi hi</StyledAnswerbox>;
  }
}

export default Answerbox;
