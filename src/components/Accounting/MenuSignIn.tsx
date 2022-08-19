import React, { useState } from "react";
import {
  Button,
  ClickAwayListener,
  FormControl,
  Grid,
  Grow,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  Popper,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useGetUsersQuery } from "../../API/accountingApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginRegex } from "../../utils/constants";
import { putUser } from "../../store/userSlice";

interface Props {
  anchorRef: any;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const DropdownMenu: React.FC<Props> = ({ anchorRef, open, setOpen }) => {
  const [login, setLogin] = useState("");
  // const [isLogined, setisLogined] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const { data = [] } = useGetUsersQuery(isLogined);

  //=========================================================================
  const [skip, setSkip] = React.useState(true);
  const { data = [], error, isLoading, isUninitialized } = useGetUsersQuery(login, { skip });
  //=========================================================================
  const skipTime = () => {
    setTimeout(() => {
      setSkip(true);
    }, 1000);
  }

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickLoginIn = () => {
    dispatch(putUser({
      login : data.login,
      firstName : data.firstName,
      lastName : data.lastName,
      about : data.about,
      profilePicture : data.profilePicture,
      userPhotos : data.userPhotos,
      phone : data.phone,
      mail : data.email,
      addresses : data.addresses,
      roles : data.roles,
    }))
    
    // console.log("isLogined " + isLogined);
  };

  const handleClickGetUsers = () => {


  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };



  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      placement="bottom-start"
      transition
      disablePortal
      style={{
        position: 'relative',
        zIndex: 100
      }}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom-start" ? "left top" : "left bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                margin="normal"
                padding="2em"
                noValidate
                autoComplete="off"
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  item
                  xs="auto"
                >
                  <p>Sign In to your Account</p>

                  <TextField
                    id="outlined-adornment"
                    label="Login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value.trim())}
                  
                  />
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value.trim())}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  <Link href="#" color="inherit">
                    Forgot Password?
                  </Link>
                  <div style={{ margin: "2em" }}>
                    <Button
                      variant="contained"
                      onClick={(e) => {
                        // setisLogined(login);
                        setSkip(prev => !prev);
                        skipTime();
                        handleClickLoginIn();
                        handleClose(e)
                      }}
                    >
                      Sign In
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      onClick={(e) => {
                        navigate("/registration");
                        handleClose(e);
                      }}
                    >
                      Create Account
                    </Button>
                    <Button onClick={handleClickGetUsers}>Get Users</Button>
                  </div>
                </Grid>
              </Box>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper >
  );
};

export default DropdownMenu;
