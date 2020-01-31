import React from "react";

import { Container, Title, Box } from "./styles";

import Header from "../../compponents/Header";
import PokeCard from "../../compponents/PokeCard";

export default function Pokedex() {
    return (
        <>
            <Header />
            <Container>
                <Title>This is your Pokedex!</Title>
                <Box>
                    <PokeCard />
                    <PokeCard />
                    <PokeCard />
                    <PokeCard />
                </Box>
            </Container>
        </>
    );
}
