import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View``;

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

export const YoutuberTitle = styled.Text`
    margin: 10px 0 5px 10px;
    font-size: 22px;
    font-weight: bold;
    color: #f7630c;
`;

export const List = styled.FlatList``;

export const SeeAllVideosButton = styled(RectButton)`
    align-self: flex-end;
    padding: 2px 15px 0 0;
`;

export const SeeAllVideosButtonText = styled.Text`
    font-size: 16px;
    color: #f7630c;
`;