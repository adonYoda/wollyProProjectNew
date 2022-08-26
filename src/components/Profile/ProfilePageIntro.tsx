import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { profilePage, profilePages } from '../../utils/constants';
import HowToContent from './HowToContent'
import ProfileTopBar from './ProfileTopBar';



const ProfilePageIntro = () => {

	const {
		ordersPage,
		setUpPage
	} = profilePages;

	return (
		<>
			<ProfileTopBar />
			{/* <HowTo>
				<h3 className='howto__title'>How to start:</h3>
				<HowToContent />
			</HowTo> */}
			{/* <Hints>
				<Hint>
					<h3 className='hints__title'>Shipping</h3>
					<p>Check your delivering possibilities.</p>
					<Link to={shippingPage}>See details</Link>
				</Hint>
				<Hint>
					<h3 className='hints__title'>Faq topics</h3>
					<p>Most requested answers and questions.</p>
					<Link to={faqPage}>See details</Link>
				</Hint>
			</Hints> */}
		</>
	)
}

export default ProfilePageIntro