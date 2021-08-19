import styled from "styled-components";



export const MainLayout = styled.div`
    padding: 5rem;

    @media screen and (max-width:650px)
    {
        padding: 1rem;
        overflow-wrap: normal;
    }
`;

export const InnerLayout = styled.div`
    padding: 5rem 0;
`;