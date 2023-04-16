import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import PowerBtn from "../subComponents/PowerBtn";
import LogoComp from "../subComponents/LogoComp";
import SocialIcon from "../subComponents/SocialIcon";
import { ReactComponent as YinYang } from "../assets/svg/yin-yang-solid.svg"
import { NavLink, Link } from "react-router-dom";
import Intro from "../subComponents/Intro";
import { motion } from "framer-motion"

// props type
interface Props {
  click: boolean
}
interface Props1 {
  click1: boolean | number | string
}

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Work = styled(NavLink) <Props1>`
  color: ${(props) => props.click1 == "true" ? props.theme.body : props.theme.text};
  transition: ${(props) => props.click1 == "true" ? "all 1s ease 1s" : "all 1s ease"};
  position: absolute;
  top: 50%;
  transform: rotate(-90deg) translate(50%, -50%);
  left: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const About = styled(NavLink) <Props1>`
  color: ${(props) => props.click1 == "true" ? props.theme.body : props.theme.text};

  transition: ${(props) => props.click1 == "true" ? "all 1s ease 0.5s" : "all 1s ease"};
  text-decoration: none;
  z-index: 1;
`;

const Skill = styled(NavLink)`
  color: ${(props) => props.theme.text};

  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const rotate = keyframes`
    form{
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
    }
`



const Center = styled.div<Props>`
  svg {
    transition: all 1s ease;
  }
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top:  ${props => props.click ? '85%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'};
  transition: all 1s ease;
  transform: translate(-50%, -50%);
  cursor: pointer;
  &>:first-child{
    animation: ${rotate} infinite 1.25s linear;
  }
  &>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem ;
  }
  

`;

const BlackDiv = styled.div<Props>`

  position: absolute ;
  
  background-color: #000;
  
  top: 0;
  right: 50%;
  height: ${props => props.click ? '100%' : '0%'};
  width: ${props => props.click ? '50%' : '0%'};
  z-index: 1;
  
  transition: height 0.5s ease, width 1s ease 0.5s;
  
  `


const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }

  // useEffect(() => {
  //   console.log(click)
  // }, [click])

  return (
    <MainContainer>
      <BlackDiv click={click} />
      <Container>
        {click ? <Intro click={click} /> : null}
        <PowerBtn />
        <LogoComp click={click} />
        <SocialIcon click={click} />

        <Contact href="mailto:hpasc123@gmail.com" target="_blank">
          <motion.h2
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              y: -200
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 0.4 }
            }}
          >Contact</motion.h2>
        </Contact>
        <Blog to="/blog">
          <motion.h2
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              y: -200
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 0.4 }
            }}
          >Blog</motion.h2>
        </Blog>
        <Work click1={`${click}`} to="/work">
          <motion.h2
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              y: -200
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 0.4 }
            }}
          >Work</motion.h2>
        </Work>
        <BottomBar>
          <About click1={`${click}`} to="/about">
            <motion.h2
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: 200
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 0.4 }
              }}
            >About.</motion.h2>
          </About>

          <Skill to="/skill">
            <motion.h2
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: 200
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 0.4 }
              }}
            >Skill.</motion.h2>
          </Skill>
        </BottomBar>
        <Center click={click}>
          <YinYang onClick={() => handleClick()} width={!click ? 200 : 120} height={!click ? 200 : 120} />
          <span>click here</span>
        </Center>

      </Container>
    </MainContainer >
  );
};




Main.propTypes = {};

export default Main;
