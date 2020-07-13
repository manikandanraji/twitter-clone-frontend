import React from "react";
import styled from "styled-components";
import SearchInput from "../components/Search/SearchInput";

const Wrapper = styled.div`
	padding-bottom: 5rem;
`;

const Explore = () => {
	return (
		<Wrapper>
			<SearchInput />
		</Wrapper>
	);
};

export default Explore;
