import React from 'react';
import { View } from 'react-native';

import Header from '../../Components/Header';
import ListPlaylistVideos from '../../Components/ListPlaylistVideos';

const Home: React.FC = () => {
    return (
        <View>
            <Header />
            <ListPlaylistVideos />
        </View>
    );
};

export default Home;
