import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
    background: #545454;
    border-radius: 8px;
    margin: 10px;
`;

export const Background = styled.ImageBackground.attrs({
    resizeMode: 'cover',
})`
    width: 393px;
    height: 225px;
`;

export const TextContainer = styled.View`
    padding: 12px;
    background: #f7630c;
    max-height: 95px;
    width: 393px;
    position: absolute;
    bottom: 0;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;
