import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    getVideosFromAPlaylist,
    getVideosFromASearch,
} from '../../Functions/videos';

import Loading from '../Loading';
import VideoItem from '../VideoItem';

import {
    Container,
    YoutuberTitle,
    List,
    SeeAllVideosButton,
    SeeAllVideosButtonText,
} from './styles';

interface Props {
    channelName: string;
    playlistId?: string;
    searchContent?: string;
}

const ListVideos: React.FC<Props> = ({
    channelName = '',
    playlistId,
    searchContent,
}: Props) => {
    const { navigate } = useNavigation();

    const [videos, setVideos] = useState<Array<IVideo>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getVideos = useCallback(async () => {
        setLoading(true);
        let response;

        if (playlistId) {
            response = await getVideosFromAPlaylist({
                playlistId,
                maxResults: 5,
            });
        } else if (searchContent) {
            response = await getVideosFromASearch({
                query: searchContent,
                maxResults: 10,
            });
        }

        if (response) {
            setVideos(response);
        }

        setLoading(false);
    }, [playlistId, searchContent]);

    useEffect(() => {
        getVideos();
    }, [getVideos]);

    const handleNavigateAllVideos = useCallback(() => {
        navigate('AllVideosOfAPlaylist', { playlistId });
    }, [navigate, playlistId]);

    return (
        <Container>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <YoutuberTitle>{channelName}</YoutuberTitle>
                    <List
                        data={videos}
                        keyExtractor={(item, index) => String(index)}
                        renderItem={({ item: video }) => (
                            <VideoItem video={video} />
                        )}
                        horizontal
                    />

                    <SeeAllVideosButton onPress={handleNavigateAllVideos}>
                        <SeeAllVideosButtonText>
                            Ver todos as aulas
                        </SeeAllVideosButtonText>
                    </SeeAllVideosButton>
                </>
            )}
        </Container>
    );
};

export default ListVideos;
