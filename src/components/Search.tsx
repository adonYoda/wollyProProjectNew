import { Button, ButtonProps } from "@mui/material";
import styled from "styled-components";

const ButtonSearch = styled.input`
  width: 150px;
  color: white;
  border: none;
  font-size: 26px;
  background-color: transparent;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.3s ease-in-out;

  &:hover {
    width: 60%;
  }
`;

const Search = () => {
  return <ButtonSearch type="text" name="search" placeholder="Search..." />;
};

export default Search;
