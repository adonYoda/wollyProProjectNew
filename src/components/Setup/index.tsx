import React from 'react'
import styled from 'styled-components';
import { MyContainer } from '../../styles/Container.styled'
import SetupMenu from './SetupMenu';
import SetupTopPanel from './SetupTopPanel';

const SetupPage = styled.div`
    width: 100%;
    height: 100%;
`;


const SetupMain = () => {
    return (
        <SetupPage>
            <MyContainer style={{ display: 'flex', flexWrap: 'wrap' }}>
                <SetupTopPanel />
                <SetupMenu />
            </MyContainer>
        </SetupPage>
    )
}

export default SetupMain
