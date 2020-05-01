import styled from "styled-components";

const Svg = styled.svg`
  fill: ${(props) => (props.color ? props.color : props.theme.primaryColor)};
  width: 18px;
  height: 18px;
  cursor: ${(props) => (props.loading ? "not-allowed" : "pointer")};
`;

export const DimmedSvg = styled.svg`
  fill: ${(props) => props.theme.secondaryColor};
  width: 18px;
  height: 18px;
  cursor: pointer;
  opacity: ${(props) => (props.loading === "loading" ? "0.5" : "1")};
  cursor: ${(props) => props.loading && "not-allowed"};

  &:hover {
    fill: #e0245e;
  }
`;

export default Svg;
