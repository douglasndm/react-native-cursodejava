import React from 'react';

import { LoadingContainer, LoadingComponent, LoadingText } from './styles';

const Loading: React.FC = () => {
    return (
        <LoadingContainer>
            <LoadingComponent />
            <LoadingText>Carregando...</LoadingText>
        </LoadingContainer>
    );
};

export default Loading;
