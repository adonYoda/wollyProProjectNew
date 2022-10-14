import React, { useState } from 'react'
import styled from 'styled-components';

const SetupMenuPage = styled.div` .setup-menu {
    &__title {
        color: white;
        margin: 0px 0px 20px 0px;
    }
    &__list {
        display: flex;
        list-style: none;
        flex-direction: column;
        align-items: flex-start;
        & li {
            font-size: 20px;
            color: white;
            padding: 10px;
            border: 1px solid #FFFFFFA6;
            margin-bottom: 10px;
            &.sub-menu {
                margin-left: 20px;
            }
        }
    }
}`;

const SetupMenu = () => {

    const handlerSetDescriptionView = (value: string) => {
        // useState setDescriptionView
        console.log(value)
    }

    return (
        <SetupMenuPage className='setup-menu'>
            <p className='setup-menu__title'>Set Up:</p>
            <ul className='setup-menu__list'
                onClick={e => {
                    handlerSetDescriptionView((e.target as HTMLLIElement).innerText);
                }}>
                <li>Category</li>
                <li>Ring size</li>
                <li>Ring Rail</li>
                <li className='sub-menu'>Material</li>
                <li className='sub-menu'>Surface</li>
                <li>Setting</li>
                <li>Stone</li>
                <li className='sub-menu'>Shape & Size</li>
                <li className='sub-menu'>Color</li>
                <li>Price calculator</li>
            </ul>
        </SetupMenuPage>
    )
}

export default SetupMenu