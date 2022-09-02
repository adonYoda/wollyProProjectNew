import React from 'react'
import styled from 'styled-components';

interface Props {
    path: string,
    subtitle: string,
    title: string,
    img: string
}

const Wrapper = styled.div`
    min-width: 267px;
    background-color: lightgreen;
    /* margin: 5px; */
`;

const HowToPreview: React.FC<Props> = ({ path, subtitle, title, img }) => {
    return (
        <Wrapper>
            <div>{subtitle} - {title}</div>
        </Wrapper>
    )
}

export default HowToPreview