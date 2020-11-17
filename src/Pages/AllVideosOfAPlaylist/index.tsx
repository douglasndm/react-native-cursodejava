import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import IVideo from '../../@types/video';

import { getVideosFromAPlaylist } from '../../Functions/videos';

import Header from '../../Components/Header';

import { Container, List } from './styles';
import VideoItem from '../../Components/VideoItem';

interface Props {
    playlistId: string;
}

const AllVideosOfAPlaylist: React.FC = () => {
    const route = useRoute();
    const routeParams = route.params as Props;

    const [videos, setVideos] = useState<Array<IVideo>>([]);

    useEffect(() => {
        getVideosFromAPlaylist({
            playlistId: routeParams.playlistId,
            maxResults: 50,
        }).then(response => setVideos(response));
    }, [routeParams]);

    return (
        <Container>
            <Header title="Curso inteiro" />

            <List
                data={videos}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => <VideoItem video={item} />}
            />
        </Container>
    );
};

export default AllVideosOfAPlaylist;
