import React from "react";
import styled from "styled-components";
import HowToPreview from "./HowToPreview";
import HowToStartPage from "./HowToStartPage";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import Slider from "react-slick";
import { colors } from "../../../utils/constants";
import tempImg from "../../../images/temp.jpeg";

const contentPreview = [
	{
		path: "get_started",
		subtitle: "How to start",
		title: "Get started together",
		img: tempImg,
	},
	{
		path: "present",
		subtitle: "Your jewellry",
		title: "How to present",
		img: tempImg,
	},
	{
		path: "experience",
		subtitle: "Provide & create",
		title: "Customer experience",
		img: tempImg,
	},
	{
		path: "shipping",
		subtitle: "The quick guide",
		title: "To product shipping",
		img: tempImg,
	},
	{
		path: "seller_fees",
		subtitle: "A guide to wolly pro seller and how to reduce",
		title: "Seller fees",
		img: tempImg,
	},
];
//=== <SLICK_SLIDER> ===========================================================================================
const SliderStyled = styled(Slider)`
	&.slick-slider {
		/* margin: 30px auto 50px;
		position: relative;
		display: block;
		user-select: none;
		touch-action: pan-y;
		-webkit-tap-highlight-color: transparent; */
		max-width: 100%;
		height: 240px;
		display: block;
		position: relative;
		overflow: hidden;
	}
	& .slick-list,
	.slick-slider {
		/* position: relative;
		display: block; */
	}
	& .slick-list {
		padding: 20px;
		height: 100%;
	}
	& .slick-track {
		display: flex;
		height: 100%;
		/* position: relative;
		top: 0;
		left: 0;
		display: block;
		margin-left: auto; */
	}
	& .slick-slide {
		max-width: 265px;
		height: 155px;
		margin-left: 20px;
		transition: all 0.3s ease 0s;
		&.slick-current {
			max-width: 320px;
			height: 100%;
			& p {
				transition: all 0.3s ease 0s;
				font-size: 11px;
			}
			& h4 {
				transition: all 0.3s ease 0s;
				font-size: 24px;
			}
		}
		& > div {
			width: 100%;
			height: 100%;
		}
	}
	& .slick-arrow {
		position: absolute;
		top: 50%;
		transform: translatey(-50%);
		z-index: 20;
		&.slick-prev {
			left: 0;
		}
		&.slick-next {
			right: 0;
			transform: translatey(-50%) rotate(180deg);
		}
	}
	& .slick-dots {
		position: absolute;
		bottom: 55px;
		left: 75px;
		& li {
			display: inline-block;
			margin: 0 25px 0 0;
			&.slick-active {
				& button {
					background-color: ${colors.button.bg.main};
				}
			}
			& button {
				color: #fff;
				border: 1px solid ${colors.button.border.main};
				background-color: transparent;
				width: 23px;
				height: 23px;
				font-size: 11px;
				transition: all 0.3s ease 0s;
				cursor: pointer;
				&:hover {
					border: 1px solid ${colors.button.border.hover};
				}
			}
		}
	}
`;
const settings = {
	dots: true,
	arrows: false,
	infinite: false,
	speed: 500,
	slidesToShow: 3,
	// slidesToScroll: 3,
	swipeToSlide: false,
	initialSlide: 0,
	nextArrow: <ArrowBackIosRoundedIcon />,
	prevArrow: <ArrowBackIosRoundedIcon />,
	responsive: [
		{
			breakpoint: 1024,
			settings: {},
		},
	],
};
//=== </SLICK_SLIDER> ===========================================================================================
const HowToContent = () => {
	return (
		<SliderStyled {...settings}>
			{contentPreview.map((c, i) => (
				<HowToPreview key={`${i}-${c}`} {...c} />
			))}
			{/*
			<HowToStartPage />
			<HowToPresentPage />
			<HowToProvideExperiencePage />
			<HowToShipping />
			<HowToReduceSellerFees />
			*/}
		</SliderStyled>
	);
};

export default HowToContent;
