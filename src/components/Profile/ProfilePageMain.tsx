import React from 'react'
import { Route, Routes } from 'react-router'
import styled from 'styled-components';
import { profilePage, profilePages } from '../../utils/constants'
import MailPage from './MailBox';
import ProfilePageIntro from './Intro/ProfilePageIntro';

const Wrapper = styled.div`
	
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
	)
}

export default ProfilePageMain