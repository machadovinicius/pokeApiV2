import styled from "styled-components";
import Colors from "../../global/colors";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1000px;
    width: 93%;
    padding: 30px 10px;
    margin: 20px auto;
    border-radius: 3px;
    box-shadow: 1px 1px 2px 2px rgb(0, 0, 0, 0.1);
    background-color: ${Colors.white};
`;
export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
`;
export const Title = styled.h1`
    font-size: 20px;
    color: ${Colors.primary};
`;
