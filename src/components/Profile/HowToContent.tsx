import React from 'react'
import styled from 'styled-components';
import HowToPreview from './HowToPreview';
import HowToStartPage from './HowToStartPage'


const HowToContentWrapper = styled.div`
	height: 240px;
	background-color: #ffffff88;
	overflow-x: scroll;
	/* scrollbar-width: unset;
	&::-webkit-scrollbar{
		width: 0;height: 0;
	} */
`;
const Container = styled.div`
	padding: 20px 40px;
	display: flex;
`;

const contentPreview = [
	{
		path: 'get_started',
		subtitle: 'how to start',
		title: 'Get started together',
		img: ''
	},
	{
		path: 'present',
		subtitle: 'your jewellry',
		title: 'how to present',
		img: ''
	},
	{
		path: 'experience',
		subtitle: 'provide & create',
		title: 'customer experience',
		img: ''
	},
	{
		path: 'shipping',
		subtitle: 'the quick guide',
		title: 'to product shipping',
		img: ''
	},
	{
		path: 'seller_fees',
		subtitle: 'a guide to wolly pro seller and how to reduce',
		title: 'seller fees',
		img: ''
	},
]

const HowToContent = () => {



	return (
		<HowToContentWrapper>
			<Container>
				{contentPreview.map((c, i) => <HowToPreview {...c} />)}
				{/*
				<HowToStartPage />
				<HowToPresentPage />
				<HowToProvideExperiencePage />
				<HowToShipping />
				<HowToReduceSellerFees />
				*/}
			</Container>
		</HowToContentWrapper>
	)
}

export default HowToContent