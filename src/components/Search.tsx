import { Button, ButtonProps } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const ButtonSearch = styled.div`
  width: 200px;
  position: relative;
  display: flex;

  &.search{
    width: 60%;
    & input {
      width: 100%;
      padding: 12px 20px 12px 40px;

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
    background-position: 10px 10px;
    background-repeat: no-repeat;
  }

  & button {
    width: 200px;
    color: white;
    border: none;
    font-size: 26px;
    background-color: transparent;
    cursor: pointer;
  }

  &:after {
    content: "";
    width: 0%;
    height: 2px;
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

  const hadleClickSearch = () => {
    setActiveSearch((prev) => !prev);
  };

  return (
    <ButtonSearch className={activeSearch? "search" : ""} >
      <input type="text" name="search" placeholder="" />
      <button onClick={hadleClickSearch} type="button">
        Search...
      </button>
    </ButtonSearch>
  );
};

export default Search;
