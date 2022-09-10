import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PersonIcon from '@mui/icons-material/Person';
import DropdownMenuLogIn from "./MenuSignIn";
import { useSelector } from "react-redux";
import { IState, IUserProfile } from "../../types";
import MenuProfile from "./MenuProfile";

const widthButton = 185;
const MyButton = styled(Button) <{ islogin: string }>`
  flex: 0 0 ${widthButton}px;
  height: 50px;
  position: relative;
  margin: 0px 100px 0px 0px !important;
  & span {
    font-size: 18px;
    line-height: 1.2;
    color: ${({ islogin }) => islogin ? '#fff' : '#bbb'};
    text-transform: none;
    width: 100%;
    text-align: left;
    padding: ${({ islogin }) => islogin ? '0px 5px 0px 50px' : '0px 0px 0px 30px'};
    & span {
      color: white;
      padding: 0px 0px 0px 0px;
    }
  }
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    box-shadow: ${({ islogin }) => islogin ? 'none' : '0 0 1px 1px #bbb'};
    background-color: ${({ islogin }) => islogin ? '#bbbbbb30' : 'none'};
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
  }
  & .circle {
    position: absolute;
    top: 0;
    right: -3px;
    right: ${({ islogin }) => islogin ? '100%' : '-3px'};
    transform: ${({ islogin }) => islogin ? `translateX(100%)` : 'translateX(0px)'};
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

interface Props {
  token: string
}

const SignIn: React.FC<Props> = ({ token }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  //================================================================
  const user = useSelector<IState, IUserProfile>(state => state.user!);
  //================================================================
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
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
        islogin={token}
        className='login-button'
      >
        {token ? <span>Hello, {user.login}!</span> : <span>
          Sign<span>In</span>
        </span>}
        <div className="circle">
          <Avatar alt={user.login} src={user.profilePicture} />
        </div>
      </MyButton>

      {!token && <DropdownMenuLogIn anchorRef={anchorRef} open={open} setOpen={setOpen} />}
      {token && <MenuProfile anchorRef={anchorRef} open={open} setOpen={setOpen} />}
    </>
  );
};

export default SignIn;
