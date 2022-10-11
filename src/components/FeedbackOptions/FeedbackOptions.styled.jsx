import styled from '@emotion/styled';

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  margin: -10px;
`;

export const BtnItem = styled.li`
  margin: 10px;
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 10px 20px;
  border: none;

  border: 2px solid #fff;
  font-size: 20px;
  color: #fff;
  background-color: #8c98ba;
  text-align: center;
  transition: all 200ms linear;
  cursor: pointer;

  :hover {
    border: 2px solid #8c98ba;
    color: #8c98ba;
    background-color: #fff;
  }
`;