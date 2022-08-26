import React from 'react'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { profilePages } from '../../utils/constants'
import MailPage from './MailBox';
import ProfilePageIntro from './ProfilePageIntro';

const Wrapper = styled.div`
	
`;
const TopBar = styled.div`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
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

const ProfilePageMain = () => {

	const {
		introPage,
		mailBoxPage,
		paymentMethodsPage,
		purchaseHistoryPage,
		savedPage,
		ordersPage,
		myAccountPage,
		setUpPage,
	} = profilePages;

	return (
		<Wrapper>
			<TopBar className='abs'>
				<MyLink className='topbar__orders' to={ordersPage}>Check Orders</MyLink>
				<MyLink className='topbar__setup' to={setUpPage}>Set up</MyLink>
			</TopBar>
			<Routes>
				<Route path={introPage} element={<ProfilePageIntro />} />
				<Route path={mailBoxPage} element={<MailPage />} />
				{/* <Route path={paymentMethodsPage} element={<PaymentMethodPage />} /> */}
				{/* <Route path={purchaseHistoryPage} element={<PurchaseHistoryPage />} /> */}
				{/* <Route path={savedPage} element={<SavedPage />} /> */}
				{/* <Route path={ordersPage} element={<OrdersPage />} /> */}
				{/* <Route path={myAccountPage} element={<MyAccountPage />} /> */}
				{/* <Route path={setUpPage} element={<SetUpPage />} /> */}
			</Routes>
		</Wrapper>
	)
}

export default ProfilePageMain