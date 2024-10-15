import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./components/Header";
import Form from "./components/Form/Form";
import Content from "./components/Content/Content";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    min-width: 750px;
    padding: 0 50px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Form />
      <Content />
    </>
  );
}

export default App;
