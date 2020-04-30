import React from "react";
import styled from "styled-components";
import SearchInput from "../components/Search/SearchInput";

const Wrapper = styled.div`
	margin-bottom: 7rem;
`;

const Explore = () => {
	return (
		<Wrapper>
			<SearchInput />
		</Wrapper>
	);
};

export default Explore;
