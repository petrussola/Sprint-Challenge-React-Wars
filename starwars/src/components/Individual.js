import React from 'react';
import styled from 'styled-components';

function Individual({data}) {

    const StyledDiv = styled.div`
        width: 90%;
        margin: 0.5rem auto;
        padding: 0.5rem;
        background: #FCE3E2;
        border: 1px solid #DB8F8D;
        border-radius: 10px;
    `;
    return (
        <StyledDiv>
            <span>{data.name} was born the year {data.birth_year}, has {data.eye_color} eyes and has starred in {data.films.length} films</span>
        </StyledDiv>
    )
}

export default Individual;