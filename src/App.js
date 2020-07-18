import React, {Component} from 'react';
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, Row, Col, Container, StyleReset, ThemeProvider} from 'atomize';

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
            minH = "8rem"
            bg = "success100"
          >
          
          </Div>
          <Div
            textColor = "black900"
            minH="50vh"
            w="100vw"
            d="flex"
            flexDir="column"
            align="center"
            textSize="display3"
            p={{x:"1rem", y: "4rem"}}
            bg = "success100"
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
          <Container
            w="100rem"
            d="flex"
            flexDir="column"
            align="center"
            bg = "black"
            minH = "10rem"
          >
          {
            <Row d = "flex" flexDir = "row" justify = "space-between">
                <Col size="4" bg = "brand700" p="4rem">
                  <Div 
                    d="flex"
                    p="1rem" 
                    bg = "warning500" 
                    rounded = "md" 
                    minW = "8rem" 
                    minH = "10rem"
                    align="center"
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
                <Col size="4" bg = "brand700" p="4rem">
                  <Div 
                    d = "flex"
                    p="1rem" 
                    bg = "warning500" 
                    rounded = "md" 
                    minW = "8rem" 
                    minH = "10rem"
                    align="center"
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
                <Col size="4" bg = "brand700" p="4rem">
                  <Div 
                    d = "flex"
                    p="1rem"
                    bg = "warning500" 
                    rounded = "md" 
                    minW = "8rem" 
                    minH = "10rem" 
                    align = "center"
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
