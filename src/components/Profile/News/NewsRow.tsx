import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import tempImg from "../../../images/temp.jpeg";

const NewsRowWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 40px 40px 95px 40px;
`;
const NewsRow = () => {
	const news = [
		{
			bg: tempImg,
			title: "LATEST NEWS_splt_ABOUT_splt_PROTOTYPING",
			path: "latest_news_about_prototyping",
		},
		{
			bg: tempImg,
			title: "NEW MATERIALS",
			path: "new_materials",
		},
		{
			bg: tempImg,
			title: "QUALITY_splt_IMPROVEMENT",
			path: "quality_improvement",
		},
		{
			bg: tempImg,
			title: "3D - CONTEST ",
			path: "3d-contest",
		},
		{
			bg: tempImg,
			title: "E-COMMERCE PAGE",
			path: "e-commerce_page",
		},
		{
			bg: tempImg,
			title: "BEST SELLERS",
			path: "best_sellers",
		},
	];

	return (
		<NewsRowWrapper>
			{news.map((n, i) => (
				<NewsItem key={i} {...n} />
			))}
		</NewsRowWrapper>
	);
};

export default NewsRow;
