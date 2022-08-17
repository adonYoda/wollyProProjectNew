import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const MyApp = styled.div`
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  min-width: 100%;
`;

function App() {
  return (
    <MyApp>
      <Header />
      <Main />
      <Footer />
    </MyApp>
  );
}

export default App;
