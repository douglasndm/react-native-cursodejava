import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const YoutuberTitle = styled.Text`
    margin: 10px 0 5px 10px;
    font-size: 22px;
    font-weight: bold;
    color: #f7630c;
`;

export const List = styled.FlatList``;

export const SeeAllVideosButton = styled(RectButton)`
    align-self: flex-end;
    padding: 10px;
    margin: 0 10px 0 0;
`;

export const SeeAllVideosButtonText = styled.Text`
    font-size: 16px;
    color: #f7630c;
`;
