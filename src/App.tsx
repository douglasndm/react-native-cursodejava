import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes from './Routes';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#f7630c" />
            <Routes />
        </NavigationContainer>
    );
};

export default App;
