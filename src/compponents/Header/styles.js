import styled from "styled-components";
import Colors from "../../global/colors";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.primary};
    padding: 10px 0;
    max-height: 70px;
`;
export const NavMenu = styled.div`
    max-width: 1000px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.img`
    width: 100px;
`;
export const ListMenu = styled.ul`
    width: 50%;
    display: flex;
    justify-content: space-between;
`;
export const Item = styled.li`
    color: ${Colors.white};
    font-size: 16px;
`;
