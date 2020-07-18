import React, {Component} from 'react';
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, StyleReset, ThemeProvider} from 'atomize';

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
//Create a client engine instance
const engine = new Styletron();

const theme = {
  colors: {
    black900: "1d1d1e"
  }
};  

class App extends Component {
  render() {
    return(
      <StyletronProvider value = {engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
          <Div
            textColor = "black900"
            minH="100vh"
            w="100vw"
            d="flex"
            flexDir="column"
            algin="center"
            textSize="display2"
            p={{x:"1rem", y: "4rem"}}
          >
            Please work
            <Button
              h="2.5rem"
              w="2.5rem"
              bg="warning700"
              hoverBg="warning600"
              rounded="circle"
              m={{r:"1rem"}}
              shadow="2"
              hoverShadow="4"
            >
              <Icon name="BookmarkSolid" size = "20px" color = "white" />
            </Button>
          </Div>
        </ThemeProvider>
      </StyletronProvider>
    );
  }
}
export default App;
