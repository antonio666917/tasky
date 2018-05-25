import React, { Component } from "react";
import styled from "styled-components";

const StyledTaskbar = styled.form`
  position: relative;
  width: 500px;
  margin: 0 auto;

  input {
    border-radius: var(--border_radius);
    border: 8px solid var(--gray_light);
    background: var(--white);
    padding: 8px;
    width: 500px;
  }
  button {
    border-radius: var(--border_radius);
    padding: 6px;
    border: none;
    text-align: center;
    position: absolute;
    top: 10px;
    right: -22px;
  }
  .loading {
    position: absolute;
    top: 16px;
    right: -16px;
  }
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .rotating {
    animation: rotating 1s linear infinite;
  }
`;

function Loading() {
  return (
    <div className="loading rotating">
      <span role="img" aria-label="Loading!">
        🧠
      </span>
    </div>
  );
}

function Taskbar({ loading, ready, onChange, onSubmit }) {
  return (
    <StyledTaskbar>
      <input type="text" onChange={onChange} disabled={loading} />

      {ready &&
        !loading && (
          <button type="submit" onClick={onSubmit}>
            Go!
          </button>
        )}

      {loading && <Loading />}
    </StyledTaskbar>
  );
}

export default Taskbar;
