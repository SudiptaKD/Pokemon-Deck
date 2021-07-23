import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header style={{height:'10vh'}}>
            <Navbar bg="danger" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Pokemon Deck</Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;