import React from 'react'
import styled from 'styled-components'


const Title = styled.div`
	color: #EA4680A6;
	font-size: 86px;
	font-weight: 500;
	display: flex;
	flex: 1 1 auto;
	align-self: flex-end;
	align-items: baseline;
	margin: 0px 0px 0px 20px;
	& span {
		margin: 0px 0px 0px 10px;
		color: #CC15FC;
		font-size: 28px;
		font-weight: 400;
	}
`

const ProfilePageTitle = () => {
	return (
		<Title>
			Profile<span>Home</span>
		</Title>
	)
}

export default ProfilePageTitle