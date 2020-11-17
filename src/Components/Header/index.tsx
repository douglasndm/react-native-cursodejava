import React from 'react';

import { Container, Title } from './styles';

interface Props {
    title?: string;
}

const Header: React.FC<Props> = ({ title }: Props) => {
    return (
        <Container>
            {title ? <Title>{title}</Title> : <Title>Curso de Java</Title>}
        </Container>
    );
};

export default Header;
