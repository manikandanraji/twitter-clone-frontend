import styled from "styled-components";

export default styled.div`
	margin-left: 15%;
	display: grid;
	grid-template-columns: auto 40%;
	grid-gap: 2rem;

	@media screen and (max-width: 1100px) {
		margin-left: 12%;
	}

	@media screen and (max-width: 530px) {
		margin-left: none;
		grid-template-columns: 1fr;
		grid-gap: none;
	}
`;
