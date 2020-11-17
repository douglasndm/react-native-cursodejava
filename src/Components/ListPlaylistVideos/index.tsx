import React, { useCallback, useEffect, useMemo, useState } from 'react';
import IVideo from '../../@types/video';

import YouTubeAPI from '../../services/youtube';

import VideoItem from '../VideoItem';

import {
    Container,
    YoutuberTitle,
    List,
    SeeAllVideosButton,
    SeeAllVideosButtonText,
} from './styles';

interface Props {
    ChannelName: string;
    PlaylistId: string;
}

const PlaylistVideos: React.FC<Props> = ({
    ChannelName = '',
    PlaylistId,
}: Props) => {
    const [videos, setVideos] = useState<Array<IVideo>>([]);

    const getVideos = useCallback(async () => {
        const response = await YouTubeAPI.get('/playlistItems', {
            params: {
                part: 'id,snippet',
                playlistId: PlaylistId,
                maxResults: 5,
            },
        });

        setVideos(response.data.items);
    }, [PlaylistId]);

    useEffect(() => {
        getVideos();
    }, [getVideos]);

    return (
        <Container>
            <YoutuberTitle>{ChannelName}</YoutuberTitle>
            <List
                data={videos}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item: video }) => <VideoItem video={video} />}
                horizontal
            />

            <SeeAllVideosButton>
                <SeeAllVideosButtonText>
                    Ver todos as aulas
                </SeeAllVideosButtonText>
            </SeeAllVideosButton>
        </Container>
    );
};

export default PlaylistVideos;
