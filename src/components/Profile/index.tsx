import React from 'react'
import styled from 'styled-components';
import { MyContainer } from '../../styles/Container.styled';
import { containerWidth } from '../../utils/constants';
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
const ProfilePageMainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 920px;
	width: 920px;
	position: relative;
	margin-left: -${sidebarWidth}px;
	left: 50%;
	transform: translateX(-50%);
	@media (max-width: ${containerWidth}px) {
		flex: 0	1 750px;
		width: 750px;
	}
`;

const ProfilePage = () => {

	return (
		<ProfilePageWrapper>
			<MyContainer>
				<Content>
					<ProfilePageSidebarWrapper>
						<ProfilePageSidebar />
					</ProfilePageSidebarWrapper>
					<ProfilePageMainWrapper>
						<ProfilePageMain />
					</ProfilePageMainWrapper>
				</Content>
			</MyContainer>
		</ProfilePageWrapper>
	)
}

export default ProfilePage