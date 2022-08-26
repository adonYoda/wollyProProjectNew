import React from 'react'
import styled from 'styled-components';
import { MyContainer } from '../../styles/Container.styled';
import ProfilePageMain from './ProfilePageMain';
import ProfilePageSidebar from './ProfilePageSidebar';

const ProfilePageWrapper = styled.div`
	min-width: 100%;
	& * {
		color: #fff;
	}
`;
const ProfilePageSidebarWrapper = styled.div`
	width: 185px;
`;
const Content = styled.div`
	display: flex;
	flex: 1 1 100%;
`;
const ProfilePageMainStyled = styled.div`
	
`;

const ProfilePage = () => {

	return (
		<ProfilePageWrapper>
			<MyContainer>
				<Content>
					{/*
					sidebar
					main block
						buttons
						howToStart
					*/}
					<ProfilePageSidebarWrapper>
						<ProfilePageSidebar />
					</ProfilePageSidebarWrapper>
					<ProfilePageMain />
				</Content>
			</MyContainer>
		</ProfilePageWrapper>
	)
}

export default ProfilePage