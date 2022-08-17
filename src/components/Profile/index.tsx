import React from 'react'
import styled from 'styled-components';
import ProfilePageTitle from './ProfilePageTitle';

const Container = styled.div`
  width: 100px;
  height: 100px;
  color: red;
`;

const ProfilePage = () => {
	return (
		<Container>
			{/*
			title 'Profile home'
			sidebar
			main block
				buttons
				howToStart
			*/}
			<ProfilePageTitle />
			{/* <ProfilePageSidebar />
			<ProfilePageMain /> */}
		</Container>
	)
}

export default ProfilePage