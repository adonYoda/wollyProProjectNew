import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { profilePage, profilePages } from "../../../utils/constants";
import HowToContent from "./HowToContent";
import NewsRow from "./News/NewsRow";
import ProfileTopBar from "./ProfileTopBar";

const HowTo = styled.div`
	margin: 0 0 142px 0;
	& .howto {
		&__title {
			padding: 0 0 0 40px;
		}
	}
`;
const Hints = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 70px 184px 70px;
`;
const Hint = styled.div`
	& > h3 {
		font-size: 20px;
		text-transform: uppercase;
		color: #868484;
		margin: 0 0 17px 0;
	}
	& > p {
		font-size: 14px;
		color: #868484;
		margin: 0 0 34px 0;
	}
`;
const LinkStyled = styled(Link)`
	text-transform: uppercase;
	color: #e7e7e7;
	font-size: 14px;
	text-decoration: underline;
`;
const News = styled.div`
	& .news__title {
		padding-left: 20px;
		font-size: 14px;
		position: relative;
		line-height: 1.8;
		color: #e7e7e7;
		&:after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1px;
			background-color: #868484;
		}
	}
`;

const ProfilePageIntro = () => {
	const { ordersPage, setUpPage } = profilePages;

	return (
		<>
			<ProfileTopBar />
			<HowTo>
				<h3 className="howto__title">How to start:</h3>
				<HowToContent />
			</HowTo>
			<Hints>
				<Hint>
					<h3 className="hints__title">Shipping</h3>
					<p>Check your delivering possibilities.</p>
					<LinkStyled to="shipping">See details</LinkStyled>
				</Hint>
				<Hint>
					<h3 className="hints__title">Faq topics</h3>
					<p>Most requested answers and questions.</p>
					<LinkStyled to="faq">See details</LinkStyled>
				</Hint>
			</Hints>
			<News>
				<h3 className="news__title">News:</h3>
				<NewsRow />
			</News>
		</>
	);
};

export default ProfilePageIntro;
