import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import styled from "styled-components";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { CLIENT_ID } from "./utils/constants";

const MyApp = styled.div`
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  min-width: 100%;
  position: relative;
`;

function App() {
  return (
    <PayPalScriptProvider options={{"client-id": CLIENT_ID}} >
      <MyApp>
        {/* <Background /> */}
        <Header />
        <Main />
        <Footer />
      </MyApp>
    </PayPalScriptProvider>
  );
}

export default App;
