import styled from "styled-components";

export const SCHeader = styled.header`
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.3rem;
  }
`;

export const SCFormContainer = styled.div`
  background-color: pink;
  width: 35%;
  margin: 0 auto 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid pink;
  border-radius: 8px;

  form {
    width: 100%;
  }

  .botoes {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
  }
`;

export const SCButton = styled.button`
  padding: 5px;
  margin: 5px;
  border: none;
  border-radius: 8px;
`;
