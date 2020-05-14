import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #aaaaaa;
  text-align: center;
`;

export const InputForm = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  height: 44px;
  margin-top: 15px;
  padding-left: 15px;
  font-size: 16px;
  color: #06c;
  border-width: 1px;
  border-color: ${(props) => (props.isError ? '#c70000' : '#3aa3fd')};
  border-radius: 5px;
`;

export const SmallError = styled.Text`
  margin-left: 5px;
  margin-top: 5px;
  font-size: 12px;
  color: #c70000;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const BtEnter = styled.TouchableOpacity`
  padding: 10px 20px;
  background: #3aa3fd;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const BtEnterText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

export const BtGoback = styled.TouchableOpacity`
  padding: 8px 12px;
  border-width: 1px;
  border-color: #3aa3fd;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const BtGobackText = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: #3aa3fd;
`;
