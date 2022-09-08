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
import { useGetUserMutation } from "../../API/accountingApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { putUser } from "../../store/userSlice";
import { setToken } from "../../store/tokenSlice";
import { createToken, profilePage, registrationPage } from "../../utils/constants";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IState } from "../../types/index"

interface Props {
	anchorRef: any;
	open: boolean;
	setOpen: (value: boolean) => void;
}

const PopperStyled = styled(Popper)`
  padding-top: 10px;
`;

const DropdownMenu: React.FC<Props> = ({ anchorRef, open, setOpen }) => {
	const loginStorage = useSelector((state: IState) => state.user!.login);
	const [formState, setFormState] = useState({
		login: loginStorage ? loginStorage : "",
		password: "",
	});

	const [showPassword, setShowPassword] = useState(false);
	const dispatch = useDispatch();
	const [getUser, { isLoading }] = useGetUserMutation();

	const handleChange = ({
		target: { name, value },
	}: React.ChangeEvent<HTMLInputElement>) =>
		setFormState((prev) => ({ ...prev, [name]: value }));

	const navigate = useNavigate();

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
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
		<PopperStyled
			open={open}
			anchorEl={anchorRef.current}
			role={undefined}
			placement="bottom-start"
			transition
			disablePortal
			style={{
				position: "relative",
				zIndex: 100,
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
										name="login"
										onChange={handleChange}
										value={formState.login}
									/>
									<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
										<InputLabel htmlFor="outlined-adornment-password">
											Password
										</InputLabel>
										<OutlinedInput
											id="outlined-adornment-password"
											type={showPassword ? "text" : "password"}
											name="password"
											onChange={handleChange}
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
											onClick={async (e) => {
												try {
													const token = createToken(
														formState.login,
														formState.password
													);
													const user = await getUser(
														token
													).unwrap();

													dispatch(putUser(user));
													dispatch(setToken(token));
													// localStorage.setItem("token", JSON.stringify(token));
													navigate(profilePage);
													handleClose(e);
												} catch (err) {
													alert(err);
												}
											}}
										>
											Sign In
										</Button>
									</div>
									<div>
										<Button
											variant="contained"
											onClick={(e) => {
												navigate(registrationPage);
												handleClose(e);
											}}
										>
											Create Account
										</Button>
									</div>
								</Grid>
							</Box>
						</ClickAwayListener>
					</Paper>
				</Grow>
			)}
		</PopperStyled>
	);
};

export default DropdownMenu;
