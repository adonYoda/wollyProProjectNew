import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { profilePages } from '../../utils/constants';

const TopBar = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
`;
const MyLink = styled(Link)`
	width: 140px;
	line-height: 50px;
	border: 1px solid #70707099;
	text-align: center;
	transition: all 0.3s ease 0s;
	&:hover {
		border: 1px solid #FFFFFFA6;
	}
	&.topbar__orders{
		font-size: 16px;
		background-color: #1B252C;
		&:hover {
			background-color: #FFFFFF26;
		}
	}
	&.topbar__setup{
		font-size: 20px;
		margin: 0px 0px 0px 30px;
		background-color: #4aa9bd;
		&:hover {
			background-color: #4aa9bdcc;
			
		}
	}
`;

const ProfileTopBar = () => {

	const {
		ordersPage,
		setUpPage,
	} = profilePages;

	return (
		<TopBar>
			<MyLink className='topbar__orders' to={ordersPage}>Check Orders</MyLink>
			<MyLink className='topbar__setup' to={setUpPage}>Set up</MyLink>
		</TopBar>
	)
}

export default ProfileTopBar