import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { Container, Background, TextContainer, Title } from './styles';

interface Props {
    video: IVideo;
}

const VideoItemVertical: React.FC<Props> = ({ video }: Props) => {
    const { navigate } = useNavigation();

    const handleNavigateToVideo = useCallback(() => {
        navigate('Player', { videoId: video.snippet.resourceId.videoId });
    }, [navigate, video.snippet.resourceId.videoId]);

    return (
        <Container onPress={handleNavigateToVideo}>
            <Background source={{ uri: video.snippet.thumbnails.medium.url }}>
                <TextContainer>
                    <Title>{video.snippet.title}</Title>
                </TextContainer>
            </Background>
        </Container>
    );
};

export default VideoItemVertical;
