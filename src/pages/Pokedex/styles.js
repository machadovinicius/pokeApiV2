import styled from "styled-components";
import Colors from "../../global/colors";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1000px;
    width: 90%;
    min-height: 100%;
    height: 100vh;
    padding: 30px 15px;
    margin: 20px auto;
    border-radius: 3px;
    box-shadow: 1px 1px 2px 2px rgb(0, 0, 0, 0.1);
`;
export const Title = styled.h1`
    font-size: 20px;
    color: ${Colors.primary};
`;
