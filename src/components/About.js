import React from 'react'
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Div, Button, Icon, Text, Row, Col, Container, StyleReset, ThemeProvider} from 'atomize';
import bubbleground from '../double-bubble-outline/double-bubble-outline.png'

const About = props => {
    
    const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
    //Create a client engine instance
    const engine = new Styletron();

    const theme = {
        colors: {
          black900: "1d1d1e"
        }
      };  

    return(
        <StyletronProvider value = {engine} debug={debug} debugAfterHydration>
            <ThemeProvider theme={theme}>
                <StyleReset />
                    <Div
                    textColor = "black900"
                    minH="auto" //Yeah idk how to make this fill hopefully it scales
                    w="100vw"
                    d="flex"
                    flexDir="column"
                    align="center"
                    textSize="display3"
                    p={{x:"1rem", y: "10rem"}}
                    bgImg = {bubbleground}
                    bgSize = "contain"
                    >
                        What is going on 
                    </Div>
            </ThemeProvider>
        </StyletronProvider>
    );
}

export default About