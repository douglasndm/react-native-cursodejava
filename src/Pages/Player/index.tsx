import { useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import IVideo from '../../@types/video';

import Header from '../../Components/Header';
import Loading from '../../Components/Loading';
import { getVideo } from '../../Functions/videos';

import { Container, VideoTitle, VideoDescription } from './styles';

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
        console.log(response);

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

                    <VideoTitle>{video?.snippet.title}</VideoTitle>

                    <VideoDescription>
                        {video?.snippet.description}
                    </VideoDescription>
                </Container>
            )}
        </>
    );
};

export default Player;
