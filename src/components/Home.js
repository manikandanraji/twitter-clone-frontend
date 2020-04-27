import React from "react";
import styled from "styled-components";
import NewTweet from "./NewTweet";
import Header from './Header';

const Wrapper = styled.div`
	margin-bottom: 1000px;
`;

const Home = () => {
	return (
		<Wrapper>
			<Header text="Home"/>
			<NewTweet />
		</Wrapper>
	);
};

export default Home;
