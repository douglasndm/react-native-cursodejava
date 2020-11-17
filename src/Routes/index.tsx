import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home';
import Player from '../Pages/Player';
import AllVideosOfAPlaylist from '../Pages/AllVideosOfAPlaylist';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Player" component={Player} />
            <Stack.Screen
                name="AllVideosOfAPlaylist"
                component={AllVideosOfAPlaylist}
            />
        </Stack.Navigator>
    );
};

export default Routes;
