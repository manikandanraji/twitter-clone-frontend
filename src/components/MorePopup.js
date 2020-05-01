import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import Popup from "reactjs-popup";
import Svg from "../styles/Svg";
import ToggleTheme from "./ToggleTheme";
import Logout from "./Auth/Logout";
import ChangeColor from "./ChangeColor";

const Wrapper = styled.div`
  .btn {
    cursor: pointer;
  }
`;

const MoreBtn = React.forwardRef(({ open, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"></path>
          <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
        </g>
      </Svg>
      <span className="btn">More</span>
    </div>
  );
});

export default () => {
  const theme = useContext(ThemeContext);

  const contentStyle = {
    width: "160px",
    background: theme.background,
    borderRadius: "6px",
    border: `1px solid ${theme.tertiaryColor}`,
    boxShadow: theme.bs1,
  };

  const overlayStyle = {
    background: "none",
  };

  return (
    <Wrapper>
      <Popup
        className="btn"
        trigger={(open) => <MoreBtn open={open} />}
        position="top right"
        closeOnDocumentClick
        contentStyle={contentStyle}
        overlayStyle={overlayStyle}
        arrow={false}
      >
        <ToggleTheme />
        <ChangeColor />
        <Logout />
      </Popup>
    </Wrapper>
  );
};
