import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { homePage, profilePage, profilePages } from '../../utils/constants'

const MyLink = styled(Link)`
	color: #ffffff;
	font-size: 16px;
	line-height: 40px;
	text-align: center;
	border: 1px solid #FFFFFF26;
	display: block;
	width: 100%;
	transition: all 0.3s ease 0s;
	margin: 0px 0px 20px 0px;
	white-space: nowrap;
	&.back_to_shop {
		background-color: #ffffff13;
		border: 1px solid #FFFFFF26;
		margin-bottom: 40px;
	}
	&:hover {
		background-color: #FFFFFF26;
		border: 1px solid #FFFFFFA6;
		color: #EA4680;
	}
`;

const ProfilePageSidebar = () => {

	const {
		mailBoxPage,
		paymentMethodsPage,
		purchaseHistoryPage,
		savedPage,
		ordersPage,
		myAccountPage,
	} = profilePages;

	return (
		<>
			<MyLink className='back_to_shop' to={homePage}>Back to Shop</MyLink>
			<MyLink to={profilePage + mailBoxPage}>Mail Box</MyLink>
			<MyLink to={profilePage + paymentMethodsPage}>Payment Methodas</MyLink>
			<MyLink to={profilePage + purchaseHistoryPage}>Purchase History</MyLink>
			<MyLink to={profilePage + savedPage}>Saved</MyLink>
			<MyLink to={profilePage + ordersPage}>Orders</MyLink>
			<MyLink to={profilePage + myAccountPage}>My Account</MyLink>
		</>
	)
}

export default ProfilePageSidebar