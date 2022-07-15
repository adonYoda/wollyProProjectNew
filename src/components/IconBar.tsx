import Bell from "../iconComponents/Bell";
import Diamond from "../iconComponents/Diamond";
import ShopingBag from "../iconComponents/ShoppingBag";
import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;
const MyDiamond = styled(Diamond)`
  cursor: pointer;
  :hover {
    color: #b287b6;
  }
`;
const MyBell = styled(Bell)`
  cursor: pointer;
  :hover {
    color: #b287b6;
  }
`;
const MyShoppingBag = styled(ShopingBag)`
  cursor: pointer;
  :hover {
    color: #b287b6;
  }
`;

const IconBar = () => {
  return (
    <Icons>
      <MyDiamond />
      <MyBell />
      <MyShoppingBag />
    </Icons>
  );
};

export default IconBar;
