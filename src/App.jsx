import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./components/Header";
import Form from "./components/Form/Form";
import Content from "./components/Content/Content";
import { useState } from "react";

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
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload((prev) => !prev);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Form onTodoAdded={handleReload} />
      <Content reload={reload} onReload={handleReload} />
    </>
  );
}

export default App;
