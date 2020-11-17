import React from 'react';
import { View } from 'react-native';

import Header from '../../Components/Header';
import ListPlaylistVideos from '../../Components/ListPlaylistVideos';

const Home: React.FC = () => {
    return (
        <View>
            <Header />
            <ListPlaylistVideos
                ChannelName="Curso em Vídeo"
                PlaylistId="PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR"
            />
        </View>
    );
};

export default Home;
