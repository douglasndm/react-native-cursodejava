import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home';
import AllVideosOfAPlaylist from '../Pages/AllVideosOfAPlaylist';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                name="AllVideosOfAPlaylist"
                component={AllVideosOfAPlaylist}
            />
        </Stack.Navigator>
    );
};

export default Routes;
