import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    blue: "#2979ff",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CardList>
        <Card secondary></Card>
        <Card2 secondary></Card2>
      </CardList>
    </ThemeProvider>
  );
}

export default App;
