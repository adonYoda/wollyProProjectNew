import React from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components'
import { profilePage, profilePages } from '../../utils/constants';


const Title = styled.div<{ home?: boolean }>`
	color: #EA4680A6;
	font-size: 86px;
	font-weight: 500;
	display: flex;
	flex: 1 1 auto;
	align-self: flex-end;
	align-items: baseline;
	margin: 0px 0px 0px 20px;
	cursor: ${({ home }) => home ? 'default' : 'pointer'};
	& span {
		margin: 0px 0px 0px 10px;
		color: #CC15FC;
		font-size: 28px;
		font-weight: 400;
	}
`

const ProfilePageTitle = () => {

	const notProfilePage = /^\/profile\/.+/.test(window.location.pathname);
	const navigate = useNavigate();

	if (!notProfilePage) {
		return (
			<Title>
				Profile
				<span>Home</span>
			</Title>
		)
	} else {
		return (
			<Title home={!notProfilePage} onClick={() => navigate(profilePage + profilePages.introPage)}>
				Profile
			</Title>
		)
	}

}

export default ProfilePageTitle