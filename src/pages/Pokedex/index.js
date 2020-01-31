import React from "react";

import { Container, Title } from "./styles";

import Header from "../../compponents/Header";

export default function Pokedex() {
    return (
        <>
            <Header />
            <Container>
                <Title>This is your Pokedex!</Title>
            </Container>
        </>
    );
}
