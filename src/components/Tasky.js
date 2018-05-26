import React, { Component } from "react";
import styled from "styled-components";
import Taskbar from "./Taskbar";
import Answerbox from "./Answerbox";

const StyledTasky = styled.div`
  margin-top: 1rem;
`;

class Tasky extends Component {
  state = {
    query: "",
    loading: false,
    ready: false,
    result: null
  };

  handleChange = e => {
    const query = e.target.value;
    this.setState({ query, ready: this.validateQuery(query) });
  };

  validateQuery(query) {
    let length = false,
      correct = true; // implement correctness later!

    if (typeof query !== "undefined" && query.length >= 2) {
      length = true;
    }

    return length && correct;
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true, ready: false });

    // send the request to dialogflow
    // receive a response type
    // decide what to do with the response
    // feed the result state
    // when the result state is fed
    // reset the taskbar
    // so that we are ready for the next request
  };

  render() {
    const { loading, ready, query, result } = this.state;
    return (
      <StyledTasky>
        <Taskbar
          loading={loading}
          ready={ready}
          onSubmit={this.handleSubmit}
          validateQuery={this.validateQuery}
          onChange={this.handleChange}
        />
        {result && <Answerbox query={query} result={result} />}
      </StyledTasky>
    );
  }
}

export default Tasky;
