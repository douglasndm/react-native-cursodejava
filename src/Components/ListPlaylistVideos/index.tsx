import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import IVideo from '../../@types/video';

import { getVideosFromAPlaylist } from '../../Functions/Playlist';

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
    const { navigate } = useNavigation();
    const [videos, setVideos] = useState<Array<IVideo>>([]);

    const getVideos = useCallback(async () => {
        const response = await getVideosFromAPlaylist({
            playlistId: PlaylistId,
            maxResults: 5,
        });

        setVideos(response);
    }, [PlaylistId]);

    useEffect(() => {
        getVideos();
    }, [getVideos]);

    const handleNavigateAllVideos = useCallback(() => {
        navigate('AllVideosOfAPlaylist', { playlistId: PlaylistId });
    }, [navigate, PlaylistId]);

    return (
        <Container>
            <YoutuberTitle>{ChannelName}</YoutuberTitle>
            <List
                data={videos}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item: video }) => <VideoItem video={video} />}
                horizontal
            />

            <SeeAllVideosButton onPress={handleNavigateAllVideos}>
                <SeeAllVideosButtonText>
                    Ver todos as aulas
                </SeeAllVideosButtonText>
            </SeeAllVideosButton>
        </Container>
    );
};

export default PlaylistVideos;
