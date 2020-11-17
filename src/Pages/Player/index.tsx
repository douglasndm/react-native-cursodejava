import { useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import Header from '../../Components/Header';
import Loading from '../../Components/Loading';
import { getVideo } from '../../Functions/videos';

import { Container, Content, VideoTitle, VideoDescription } from './styles';

interface Props {
    videoId: string;
}

const Player: React.FC = () => {
    const route = useRoute();
    const routeParams = route.params as Props;

    const [video, setVideo] = useState<IVideoInfo | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loadVideo = useCallback(async () => {
        setIsLoading(true);
        const response = await getVideo({ videoId: routeParams.videoId });

        setVideo(response);

        setIsLoading(false);
    }, [routeParams.videoId]);

    useEffect(() => {
        loadVideo();
    }, [loadVideo]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <Container>
                    <Header />

                    {!!video && (
                        <Content>
                            <YoutubePlayer videoId={video.id} height={230} />
                            <VideoTitle>{video.snippet.title}</VideoTitle>

                            <VideoDescription>
                                {video.snippet.description}
                            </VideoDescription>
                        </Content>
                    )}
                </Container>
            )}
        </>
    );
};

export default Player;
