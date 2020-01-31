import React from "react";

import PokeLogo from "../../assets/pokemon_logo.png";

import { Container, NavMenu, Logo, ListMenu, Item } from "./styles";

export default function Header() {
    return (
        <Container>
            <NavMenu>
                <Logo src={PokeLogo} alt="Pokedex" />
                <ListMenu>
                    <Item>Pokedex</Item>
                    <Item>Berries</Item>
                </ListMenu>
            </NavMenu>
        </Container>
    );
}
