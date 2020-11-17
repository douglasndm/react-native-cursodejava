import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background: #545454;
    border-radius: 8px;
    margin: 10px;
`;

export const Background = styled.ImageBackground.attrs({
    resizeMode: 'cover',
})`
    width: 225px;
    height: 225px;
`;

export const TextContainer = styled.View`
    padding: 12px;
    background: #b8b8b8;
    width: 225px;
    position: absolute;
    bottom: 0;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #4f4f4f;
`;

export const Description = styled.Text`
    color: #4f4f4f;
`;
