import { Button } from "@mui/material";
import React from "react";
import UserLoggedOut from "../iconComponents/UserLoggedOut";

import DropdownMenuLogIn from "./Guest/DropdownMenuLogIn";

const SignIn = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <UserLoggedOut style={{ width: " 3em", height: "3em" }} />{" "}
        <span
          style={{
            fontSize: " 1.5em",
            color: "black",
          }}
        >
          Sign In
        </span>
      </Button>
      <DropdownMenuLogIn anchorRef={anchorRef} open={open} setOpen={setOpen} />
    </div>
  );
};

export default SignIn;
