import { Button, ButtonProps } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const widthButton = 100;
const ButtonSearch = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: ${widthButton}px;
  height: 35px;
  margin: 0px 30px 0px 0px;

  &.search{
    min-width: 100%;
    & input {
      width: 100%;
      padding: 0px 0px 5px 10px;
    }
    &:after {
      width: 100%;
    }
  }

  & input {
    width: 0%;
    padding: 0;
    color: white;
    border: none;
    font-size: 26px;
    background-color: transparent;
    outline: none;
    transition: all 0.3s ease 0s;
    height: 100%;
  }

  & button {
    text-transform: uppercase;
    min-width: ${widthButton}px;
    height: 100%;
    color: white;
    border: none;
    font-size: 18px;
    background-color: transparent;
    cursor: pointer;
  }

  &:after {
    content: "";
    width: 0%;
    height: 1px;
    background-color: white;
    position: absolute;
    bottom: 0;
    right: 0;
    transition: all 0.5s;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`;

const Search = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('')
  const hadleClickSearch = () => {
    setActiveSearch((prev) => !prev);
    console.log(searchValue);
    setSearchValue('')
  };



  return (
    <ButtonSearch className={activeSearch ? "search" : ""} >
      <input autoComplete="off" type="text" name="search" placeholder="" onChange={(e) => { setSearchValue(e.target.value.trim()) }} />
      <button onClick={hadleClickSearch} type="button">
        Search
      </button>
    </ButtonSearch>
  );
};

export default Search;
