import styled from "styled-components";

export default styled.div`
	margin-left: 17.6%;
	display: grid;
	grid-template-columns: 65% auto;

	@media screen and (max-width: 1110px) {
		margin-left: 10%;
		grid-template-columns: 1fr;
	}
`;
