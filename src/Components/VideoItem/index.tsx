import React from 'react';

import Img from '../../Assets/Em6aT96VgAA6NqP.jpg';

import {
    Container,
    Background,
    TextContainer,
    Title,
    Description,
} from './styles';

interface Props {
    video: {
        title: string;
        description: string;
    };
}

const VideoItem: React.FC<Props> = ({ video }: Props) => {
    return (
        <Container>
            <Background source={Img}>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <Description>{video.description}</Description>
                </TextContainer>
            </Background>
        </Container>
    );
};

export default VideoItem;
