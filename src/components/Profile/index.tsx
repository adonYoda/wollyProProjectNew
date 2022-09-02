import React from 'react'
import styled from 'styled-components';
import { MyContainer } from '../../styles/Container.styled';
import ProfilePageMain from './ProfilePageMain';
import ProfilePageSidebar from './ProfilePageSidebar';

const sidebarWidth = 185;
const ProfilePageWrapper = styled.div`
	min-width: 100%;
	& * {
		color: #fff;
	}
`;
const ProfilePageSidebarWrapper = styled.div`
	width: ${sidebarWidth}px;
`;
const Content = styled.div`
	display: flex;
	flex: 1 1 100%;
`;
const ProfilePageMainStyled = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 920px;
	width: 920px;
	position: relative;
	margin-left: -${sidebarWidth}px;
	left: 50%;
	transform: translateX(-50%);
`;

const ProfilePage = () => {

	return (
		<ProfilePageWrapper>
			<MyContainer>
				<Content>
					<ProfilePageSidebarWrapper>
						<ProfilePageSidebar />
					</ProfilePageSidebarWrapper>
					<ProfilePageMainStyled>
						<ProfilePageMain />
					</ProfilePageMainStyled>
				</Content>
			</MyContainer>
		</ProfilePageWrapper>
	)
}

export default ProfilePage