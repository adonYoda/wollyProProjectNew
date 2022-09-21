import Spline from '@splinetool/react-spline'
import React from 'react'
import styled from 'styled-components';

const Background = () => {

    const Wrapper = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        & div {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    `;

    return (
        <Wrapper>
            <div>
                <Spline scene='https://prod.spline.design/Wa91wtxDCfwuN02M/scene.splinecode' />
            </div>
        </Wrapper>
    )
}

export default Background