import styled from "styled-components";
import Colors from "../../global/colors";

export const Card = styled.div`
    width: 49%;
    max-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${Colors.normal};
    padding: 10px;
    border-radius: 3px;
    box-shadow: 1px 1px 2px 2px rgb(0, 0, 0, 0.1);
    margin: 5px 0;
`;
export const Indice = styled.span`
    display: block;
    width: 100%;
    text-align: right;
    font-size: 14px;
    color: ${Colors.white};
    margin-bottom: 10px;
`;
export const Title = styled.h2`
    width: 100%;
    text-align: center;
    color: ${Colors.white};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
`;
export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: #ffffff22;
    border-radius: 50%;
    margin: 10px 0;
`;
export const Pokemon = styled.img`
    width: 100%;
`;
export const Types = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const Item = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48.5%;
    font-size: 12px;
    color: ${Colors.white};
    background-color: #ffffff22;
    border-radius: 15px;
    text-transform: uppercase;
    padding: 3px;
`;
