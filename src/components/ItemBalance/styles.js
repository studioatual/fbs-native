import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 10px;
  margin-bottom: 3px;
  elevation: 2;
  border-radius: 5px;
  background: #fff;
`;

export const Title = styled.Text.attrs({
  numOfLines: 1,
})`
  font-size: 14px;
  color: #3aa3fd;
`;
