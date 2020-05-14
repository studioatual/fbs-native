import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Background = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 3;
`;

export const Label = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  z-index: 4;
`;

export const Select = styled.TouchableOpacity`
  padding: 5px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) =>
    props.isVisible ? '#fff' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 5px;
  z-index: 4;
`;

export const SelectText = styled.Text`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.isVisible ? '#06C' : '#fff')};
  text-shadow: ${(props) =>
    props.isVisible ? 'none' : '1px 1px 5px rgba(0, 0, 0, 0.2)'};
`;

export const PopContainer = styled.View`
  position: relative;
  margin-top: 2px;
`;

export const PopUp = styled.View`
  position: absolute;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  background: #fff;
  elevation: 5;
  z-index: 999;
`;

export const Item = styled.TouchableOpacity`
  margin-top: 2px;
  padding: 7px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

export const ItemText = styled.Text`
  flex: 1;
  font-size: 14px;
  color: #06c;
`;
