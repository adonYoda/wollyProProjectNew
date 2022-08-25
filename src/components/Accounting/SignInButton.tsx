import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import PersonIcon from '@mui/icons-material/Person';
import DropdownMenuLogIn from "./MenuSignIn";
import { useSelector } from "react-redux";
import { State } from "history";
import { IState, IUserProfile } from "../../types";

const widthButton = 185;
const MyButton = styled(Button) <{ isLogin: boolean }>`
  flex: 0 0 ${widthButton}px;
  height: 50px;
  position: relative;
  
  & span {
    font-size: 18px;
    color: ${({ isLogin }) => isLogin ? '#fff' : '#bbb'};
    text-transform: none;
    width: 100%;
    text-align: left;
    padding: ${({ isLogin }) => isLogin ? '0px 5px 0px 50px' : '0px 0px 0px 30px'};
    & span {
      color: white;
      padding: 0px 0px 0px 0px;
    }
  }
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    box-shadow: ${({ isLogin }) => isLogin ? 'none' : '0 0 1px 1px #bbb'};
    background-color: ${({ isLogin }) => isLogin ? '#bbbbbb30' : 'none'};
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
  }
  & .circle {
    position: absolute;
    top: 0;
    right: -3px;
    right: ${({ isLogin }) => isLogin ? '100%' : '-3px'};
    transform: ${({ isLogin }) => isLogin ? `translateX(100%)` : 'translateX(0px)'};
    width: 51px;
    height: 51px;
    background-color: #bbb;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease 0s;
    & .MuiSvgIcon-root {
      fill: white;
    }
  }
`
//! Remove Interface props or use data from global state
interface Props {
  token: boolean;
  setToken: any;
}

const SignIn: React.FC<Props> = ({ token, setToken }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  //================================================================
  const user = useSelector<IState, IUserProfile>(state => state.user!) // !Get user from global state
  //================================================================

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    setToken((prev: any) => !prev); //! REMOVE
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <MyButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        isLogin={!!token}
        className='login_button'
      >
        {token ? <span>Hello, {user.login}!</span> : <span>
          Sign<span>In</span>
        </span>}
        <div className="circle">
          <PersonIcon style={{ width: "1.3em", height: "1.3em" }} />
        </div>{" "}
      </MyButton>

      <DropdownMenuLogIn anchorRef={anchorRef} open={open} setOpen={setOpen} />
    </>
  );
};

export default SignIn;
