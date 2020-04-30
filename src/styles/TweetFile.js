import styled from "styled-components";

export default styled.img`
	width: 500px;
	height: 285px;
	border-radius: 10px;
	object-fit: cover;
	margin-top: 0.5rem;

	@media screen and (max-width: 530px) {
		width: 350px;
		height: 260px;
	}
`;
