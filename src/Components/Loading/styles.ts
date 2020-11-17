import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
    align-items: center;
`;

export const LoadingComponent = styled.ActivityIndicator.attrs({
    color: '#f7630c',
    size: 70,
})`
    margin-top: 25px;
`;

export const LoadingText = styled.Text`
    margin-top: 10px;
    font-size: 16px;
    color: #f7630c;
`;
