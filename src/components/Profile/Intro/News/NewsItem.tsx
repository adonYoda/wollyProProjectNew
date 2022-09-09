import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const NewsItemWrapper = styled.div`
	width: 130px;
	height: 130px;
	background-color: #fff;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	& img {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	& h4 {
		display: inline;
		position: relative;
		font-size: 12px;
		text-align: left;
		text-align: center;
	}
`;

interface Props {
	bg: string;
	title: string;
	path: string;
}

const NewsItem: React.FC<Props> = ({ bg, title, path }) => {
	const navigate = useNavigate();

	return (
		<NewsItemWrapper onClick={() => navigate(`news/${path}`)}>
			{bg && <img src={bg} alt={title[0]} />}
			<h4>{title.split("_splt_").reduce((a, b) => a + `\t` + b)}</h4>
		</NewsItemWrapper>
	);
};

export default NewsItem;
