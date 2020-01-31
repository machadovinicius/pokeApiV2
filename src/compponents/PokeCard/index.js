import React from "react";

import Ditto from "../../assets/ditto.png";

import { Card, Indice, Title, Circle, Pokemon, Types, Item } from "./styles";

export default function PokeCard() {
    return (
        <Card>
            <Indice>#1</Indice>
            <Title>Ditto</Title>
            <Circle>
                <Pokemon src={Ditto} alt="Ditto" />
            </Circle>
            <Types>
                <Item>Normal</Item>
                <Item>Normal</Item>
            </Types>
        </Card>
    );
}
