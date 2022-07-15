import styled from "styled-components";
import clearIcon from "../images/Icons/close.svg";
import searchIcon from "../images/Icons/search_icon.svg";

const MySearch = styled.div`
  background: #f2e6f3;
  border-radius: 24px;
  opacity: 1;
  /* width: 809px;
  height: 48px; */
  display: flex;
`;
const Input = styled.input`
  border: none;
  background: #f2e6f3;
  width: 500px;
  height: 19px;
  color: #1b252c;
  opacity: 0.35;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
`;
const ImgSearch = styled.img`
  width: 24px;
  height: 24px;
  opacity: 0.7;
  cursor: pointer;
`;
const ImgClear = styled.img`
  width: 19px;
  height: 19px;
  opacity: 0.3;
  padding-top: 14px;
  cursor: pointer;
`;

const Search = () => {
  return (
    <MySearch>
      <ImgSearch src={searchIcon} />
      <Input type="search" placeholder="What would you like to find?" />
      <ImgClear src={clearIcon} />
    </MySearch>
  );
};

export default Search;
