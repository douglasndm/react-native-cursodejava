import React from 'react';

import Header from '../../Components/Header';
import ListVideos from '../../Components/ListVideos';

import { Container, Content } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />

            <Content>
                <ListVideos
                    channelName="Curso em Vídeo"
                    playlistId="PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR"
                />

                <ListVideos
                    channelName="Loiane Groner"
                    playlistId="PLGxZ4Rq3BOBq0KXHsp5J3PxyFaBIXVs3r"
                />
            </Content>
        </Container>
    );
};

export default Home;
