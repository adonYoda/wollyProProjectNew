import { AccountCircle } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";

import React, { useState } from "react";
import styled from "styled-components";
import { useAddUsersMutation } from "../../API/accountingApi";

const MyFormRegistartion = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;

  max-width: 1920px;
  min-width: 80%;
`;

const MyTextField = styled.label`
  width: 80%;
  display: flex;
  flex-direction: column;

  & input {
    width: 100%;
    margin: 10px;
  }
`;

export const RegistrationPage = () => {
  const [newUser, setNewUser] = useState("");

  const [addUsers, { isError }] = useAddUsersMutation();

  const handleClickCreateUser = async () => {
    if (newUser) {
      await addUsers({ name: newUser }).unwrap();
      setNewUser("");
    }
  };

  return (
    <MyFormRegistartion>
      <MyTextField>
        First Name:
        <input
          type="text"
          autoComplete="on"
          autoFocus
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
      </MyTextField>
      <MyTextField>
        Last Name:
        <input type="text" autoComplete="on" />
      </MyTextField>
      <MyTextField>
        Email:
        <input type="email" autoComplete="on" />
      </MyTextField>
      <MyTextField>
        Password:
        <input type="password" />
      </MyTextField>
      <MyTextField>
        Password:
        <input type="password" />
      </MyTextField>
      <button type="submit" onClick={handleClickCreateUser}>
        Registration
      </button>
    </MyFormRegistartion>
  );
};
