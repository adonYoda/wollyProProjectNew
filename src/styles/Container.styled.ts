import styled from "styled-components";
import { containerWidth } from "../utils/constants";


export const MyContainer = styled.div`
	max-width: ${containerWidth}px;
	margin: 0 auto;
	padding: 0 15px;
	position: relative;
	@media (max-width: ${containerWidth}px) {
		max-width: 1200px;
	}
`