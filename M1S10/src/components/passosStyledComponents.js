import styled from "styled-components";

export const SCPassosContainer = styled.div`
  background-color: bisque;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  padding: 0 5px;
  border-radius: 8px;
`;

export const SCPasso = styled.span`
  color: ${({ ativo }) => `${ativo ? "black" : "gray"}`};
  font-weight: ${({ ativo }) => `${ativo ? "bold" : "regular"}`};
`;
