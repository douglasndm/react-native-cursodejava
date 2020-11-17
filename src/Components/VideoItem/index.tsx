import React from 'react';
import IVideo from '../../@types/video';

import { Container, Background, TextContainer, Title } from './styles';

interface Props {
    video: IVideo;
}

const VideoItem: React.FC<Props> = ({ video }: Props) => {
    return (
        <Container>
            <Background source={{ uri: video.snippet.thumbnails.medium.url }}>
                <TextContainer>
                    <Title>{video.snippet.title}</Title>
                </TextContainer>
            </Background>
        </Container>
    );
};

export default VideoItem;
