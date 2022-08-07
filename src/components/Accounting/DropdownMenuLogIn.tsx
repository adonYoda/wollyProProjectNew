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
import {useGetUsersQuery} from '../../API/accountingApi'
import { validate } from "email-validator";
import { useDispatch } from "react-redux";
import {putUser } from "../../store/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { useNavigate } from "react-router";


interface Props {
  anchorRef: any;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const DropdownMenu: React.FC<Props> = ({ anchorRef, open, setOpen }) => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {data = [], isLoading} = useGetUsersQuery('');
  const navigate = useNavigate();
  
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickLoginIn = () => {
   dispatch(putUser(email))
  };

  const handleClickCreateAccount = () => {
     
  };

  const handleClickGetUsers = () => {
    if(isLoading){
      console.log("UsersLoading");
      
    }else
   console.log(data);
   
  }


  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  const emailValidate = (e: string) => {
    const email = e;
    if (validate(email)) {
      setEmail(email);
      console.log(email);
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
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
                    required
                    id="outlined-required"
                    label="Email"
                    onChange={(e) => emailValidate(e.target.value.trim())}
                    error={!emailIsValid}
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
                    <Button variant="contained" 
                    onClick={handleClickLoginIn}
                    >
                      Sign In
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      onClick = {() => {
                      navigate("/registration")
                      }}
                    >
                      Create Account
                    </Button>
                    <Button
                    onClick = {handleClickGetUsers}
                    >Get Users</Button>
                  </div>
                </Grid>
              </Box>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper> 
  );
};

export default DropdownMenu;
