import React from 'react';

import VideoItem from '../VideoItem';

import {
    Container,
    YoutuberTitle,
    List,
    SeeAllVideosButton,
    SeeAllVideosButtonText,
} from './styles';

const PlaylistVideos: React.FC = () => {
    const items = [
        {
            id: 1,
            title: 'Video 1',
            description: 'apodksaopdas',
        },
        {
            id: 2,
            title: 'Video 2',
            description: 'apodksaopdas',
        },
        {
            id: 3,
            title: 'Video 3',
            description: 'apodksaopdas',
        },
        {
            id: 4,
            title: 'Video 4',
            description: 'apodksaopdas',
        },
        {
            id: 5,
            title: 'Video 5',
            description: 'apodksaopdas',
        },
    ];
    return (
        <Container>
            <YoutuberTitle>Gustavo Guanabara</YoutuberTitle>
            <List
                data={items}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item }) => <VideoItem video={item} />}
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
