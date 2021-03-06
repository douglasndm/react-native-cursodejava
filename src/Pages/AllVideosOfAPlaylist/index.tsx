import React, { useEffect, useMemo, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { getVideosFromAPlaylist } from '../../Functions/videos';

import Header from '../../Components/Header';

import { Container, Content, List } from './styles';
import VideoItemVertical from '../../Components/VideoItemVertical';

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
            maxResults: 200,
        }).then(response => setVideos(response));
    }, [routeParams]);

    return (
        <Container>
            <Header title="Curso completo" />

            <Content>
                <List
                    data={videos}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => (
                        <VideoItemVertical video={item} />
                    )}
                />
            </Content>
        </Container>
    );
};

export default AllVideosOfAPlaylist;
