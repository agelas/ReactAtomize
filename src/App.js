import React, {Component} from 'react';
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, Row, Col, Container, StyleReset, ThemeProvider} from 'atomize';
import bubbleground from './double-bubble-outline/double-bubble-outline.png'

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
//Create a client engine instance
const engine = new Styletron();

const theme = {
  colors: {
    black900: "1d1d1e"
  },
  grid: {
    gutterWidth: "5rem"
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
            minH="35vh"
            w="100vw"
            d="flex"
            flexDir="column"
            align="center"
            textSize="display3"
            p={{x:"1rem", y: "10rem"}}
            bgImg = {bubbleground}
            bgSize = "contain"
          >
            Mathias Insley
            <Text
              d = "flex"
              textSize = "heading"
              m = "3rem"
              w = "70rem"
              textAlign = "center"
              hoverTextColor="info700"
            >
            Student at Johns Hopkins University. Majoring in Materials Science & Engineering,
            minoring in Computer Science.
            </Text>
          </Div>
          <Container
            w="100rem"
            d="flex"
            flexDir="column"
            align="center"
            bg = "sucess100"
            minH = "10rem"
          >
          {
            <Row d = "flex" flexDir = "row" justify = "space-between">
                <Col size="4" bg = "sucess100" p="4rem">
                  <Div 
                    d="flex"
                    p="1rem" 
                    bg = "success100" 
                    rounded = "md" 
                    minW = "8rem" 
                    minH = "10rem"
                    align="center"
                    shadow="5"
                    border="3px solid"
                    borderColor="gray400"
                  >
                    <Button
                    prefix={
                      <Icon
                        name="Loading2"
                        size="30px"
                        color="white"
                        m={{r: "0.5rem"}}
                      />
                    }
                    bg="info600"
                    rounded="circle"
                    p={{r:"1.5rem", l: "1rem"}}
                    shadow="3"
                    hoverShadow="4"
                  >
                    About
                  </Button> 
                  </Div>
                </Col>
                <Col size="4" bg = "sucess100" p="4rem">
                  <Div 
                    d = "flex"
                    p="1rem" 
                    bg = "success100" 
                    rounded = "md" 
                    minW = "8rem" 
                    minH = "10rem"
                    align="center"
                    shadow="5"
                    border="3px solid"
                    borderColor="gray400"
                  >
                    <Button
                    prefix={
                      <Icon
                        name="Github"
                        size="30px"
                        color="white"
                        m={{r: "0.5rem"}}
                      />
                    }
                    bg="info600"
                    rounded="circle"
                    p={{r:"1.5rem", l: "1rem"}}
                    shadow="3"
                    hoverShadow="4"
                    >
                      Github
                    </Button> 
                  </Div>
                </Col>
                <Col size="4" bg = "sucess100" p="4rem">
                  <Div 
                    d = "flex"
                    p="1rem"
                    bg = "sucess100" 
                    rounded = "md" 
                    minW = "8rem" 
                    minH = "10rem" 
                    align = "center"
                    shadow="5"
                    border="3px solid"
                    borderColor="gray400"
                  >
                    <Button
                      prefix={
                        <Icon
                          name="Linkedin"
                          size="30px"
                          color="white"
                          m={{r: "0.5rem"}}
                        />
                      }
                      bg="info600"
                      rounded="circle"
                      p={{r:"1.5rem", l: "1rem"}}
                      shadow="3"
                      hoverShadow="4"
                    >
                      LinkedIn
                    </Button>
                  </Div>
                </Col>
            </Row>
          }
          </Container>
        </ThemeProvider>
      </StyletronProvider>
    );
  }
}
export default App;
