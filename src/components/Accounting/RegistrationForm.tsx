import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { useAddUsersMutation } from "../../API/accountingApi";

const Container = styled.div`
 justify-content: space-around;
  height: 806px;
  width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const MyFormRegistartion = styled.form`
  background-color: transparent;
  width: 30%;
  margin: 0 auto;

  p {
    color: white;

    :before {
      display: inline;
      content: "";
    }
  }
  input[type="submit"] {
    width: 100%;
    background: #802882;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
    -webkit-appearance: none;
    :hover {
      background: rgb(239, 88, 244);
    }

    :active {
      transition: 0.3s all;
      transform: translateY(3px);
      border: 1px solid transparent;
      opacity: 0.8;
    }
  }
`;

const MyTextField = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: white;
  font-size: 14px;
  font-weight: 200;

  & input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

interface IFormInputs {
  TextField: string;
  login: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegistrationPage = () => {
  const [login, setLogin] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
   
    setLogin(data.login);
    setMail(data.email);
    setPassword(data.password);
    console.log({login, mail, password});
     alert(JSON.stringify(data));
    // reset();
  };


  return (
    <Container >
    <MyFormRegistartion onSubmit={handleSubmit(onSubmit)}>
      <MyTextField>
        Login:
        <input
          placeholder="Login"
          type="text"
          autoComplete="on"
          {...register("login", {
            required: "Please enter your Login",
            pattern: {
              value: /[a-zA-Z0-9]/,
              message: "Only latin letters and numbers",
            },
            minLength: {
              value: 5,
              message: "Minimum 5 characters",
            },
          })}
        />
      </MyTextField>
      <div style={{ height: 40 }}>
        {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
      </div>
      {/* <MyTextField>
        First Name:
        <input
          placeholder="First Name"
          type="text"
          autoComplete="on"
          {...register("firstName", {
            required: "Please enter your First Name",
            minLength: {
              value: 1,
              message: "Minimum 1 characters",
            },
          })}
        />
      </MyTextField>
      <div style={{ height: 40 }}>
        {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
      </div>
      <MyTextField>
        Last Name:
        <input
          placeholder="Last Name"
          type="text"
          autoComplete="on"
          {...register("lastName", {
            required: "Please enter your Last Name",
            minLength: {
              value: 1,
              message: "Minimum 1 characters",
            },
          })}
        />
      </MyTextField>
      <div style={{ height: 40 }}>
        {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
      </div> */}
      <MyTextField>
        Email:
        <input
          placeholder="Email"
          type="email"
          autoComplete="on"
          {...register("email", {
            required: "Please enter your email",
            pattern:{
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Please enter a valid email address",
            }
          })}
        />
      </MyTextField>
      <div style={{ height: 40 }}>
        {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
      </div>
      <MyTextField>
        Password:
        <input type="password" 
        placeholder="Enter your password"
        {...register("password", {required: "Please enter your password"})}
        />
      </MyTextField>
      <MyTextField>
       Confirm Password:
        <input type="password" />
      </MyTextField>

      {/* FIX FEATURE */}
      {/* <button
        type="button"
        onClick={() => {
          setValue("lastName", "luo"); // ✅
          errors.bill; // ❌: property bill does not exist
        }}
      >
        SetValue
      </button> */}

      <input type="submit" disabled={!isValid} />
    </MyFormRegistartion>
    </Container>
  );
};
