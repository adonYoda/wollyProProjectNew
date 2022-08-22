import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAddUserMutation } from "../../API/accountingApi";
import { putUser } from "../../store/userSlice";
import { emailRegex, loginRegex } from "../../utils/constants";

const Container = styled.div`
  justify-content: space-around;
  height: 806px;
  width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

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
  button[type="button"] {
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
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegistrationPage = () => {
  const {
    register,
    formState: { errors, isValid },
    getValues,
    reset,
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [addUser, { isError }] = useAddUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickRegistration = async () => {
    const login = getValues("login");
    const email = getValues("email");
    const confirmPassword = getValues("confirmPassword");
    const password = getValues("password");
    if (confirmPassword === password) {
       const user = await addUser({ 
        login: login,
        password: password,
        firstName: "",
        lastName: "",
        about: "",
        profilePicture: "",
        userPhotos: [],
        phone: "",
        mail: email,
        addresses:[] 
       }).unwrap()
       dispatch(putUser(user))
      console.log(user);
      
       
    } else {
      setIsPasswordValid(true);
    }

    reset();
  };

  return (
    <Container>
      <MyFormRegistartion>
        <h2
          style={{
            color: "white",
            fontWeight: "normal",
            fontFamily: "Montserrat sans-serif",
            margin: "20px",
          }}
        >
          Create an account
        </h2>
        <MyTextField>
          Login:
          <input
            placeholder="Login"
            type="text"
            autoComplete="on"
            {...register("login", {
              required: "Please enter your Login",
              pattern: {
                value: loginRegex,
                message: "Only latin letters and numbers",
              },
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
          />
        </MyTextField>
        <div style={{ height: 40 }}>
          {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
        </div>

        <MyTextField>
          Email:
          <input
            placeholder="Email"
            type="email"
            autoComplete="on"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: emailRegex,
                message: "Please enter a valid email address",
              },
            })}
          />
        </MyTextField>
        <div style={{ height: 40 }}>
          {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
        </div>
        <MyTextField>
          Password:
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password", {
              required: "Please enter your password",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,15}$/,
                message: "Password must contain ",
              },
            })}
          />
        </MyTextField>
        <div style={{ height: 40 }}>
          {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
        </div>
        <MyTextField>
          Confirm Password:
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
            })}
          />
          <IconButton
          style={{ width:40, height:40, margin: 0}}
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </MyTextField>
        <div style={{ height: 40 }}>
          {errors?.confirmPassword && (
            <p>{errors?.confirmPassword?.message || "Error!"}</p>
          )}
          {isPasswordValid && <p>Please ENTER your confirm password</p>}
        </div>
        <button type="button" onClick={handleClickRegistration}>
          Create account
        </button>
      </MyFormRegistartion>
    </Container>
  );
};

