import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Avatar, ClickAwayListener, Divider, Grid, Grow, ListItemIcon, MenuItem, Paper, Popper } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../../store/tokenSlice';
import { homePage, profilePage } from '../../utils/constants';

interface Props {
	anchorRef: any;
	open: boolean;
	setOpen: (value: boolean) => void;
}

const MenuProfile: React.FC<Props> = ({ anchorRef, open, setOpen }) => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}
		setOpen(false);
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
							<div>
								<MenuItem onClick={e => {
									navigate(profilePage);
									handleClose(e);
								}}>
									<Avatar /> Profile
								</MenuItem>
								<MenuItem>
									<Avatar /> My account
								</MenuItem>
								<Divider />
								<MenuItem>
									<ListItemIcon>
										<Settings fontSize="small" />
									</ListItemIcon>
									Settings
								</MenuItem>
								<MenuItem onClick={e => {
									dispatch(logout());
									navigate(homePage);
									handleClose(e);
								}}>
									<ListItemIcon>
										<Logout fontSize="small" />
									</ListItemIcon>
									Logout
								</MenuItem>
							</div>
						</ClickAwayListener>
					</Paper>
				</Grow>
			)}
		</Popper>
	)
}

export default MenuProfile