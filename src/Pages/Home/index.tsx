import React from 'react';

import Header from '../../Components/Header';
import ListVideos from '../../Components/ListVideos';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <ListVideos
                channelName="Curso em Vídeo"
                playlistId="PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR"
            />

            <ListVideos
                channelName="Loiane Groner"
                playlistId="PLGxZ4Rq3BOBq0KXHsp5J3PxyFaBIXVs3r"
            />

            <ListVideos channelName="Mais aulas" searchContent="aula de java" />
        </Container>
    );
};

export default Home;
