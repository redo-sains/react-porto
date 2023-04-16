import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { darkTheme } from './Themes'
import LogoComp from '../subComponents/LogoComp'
import SocialIcon from '../subComponents/SocialIcon'
import PowerBtn from '../subComponents/PowerBtn'
import { Work } from "../data/WorkData"
import Card from '../subComponents/Card'
import BigTitle from '../subComponents/BigTitle'
import { ReactComponent as YinYang } from '../assets/svg/yin-yang-solid.svg'
import { motion } from 'framer-motion'


const Box = styled(motion.div)`
  background-color:${props => props.theme.body};
  
  height: 10vh;
  position: relative;
  overflow: hidden;
`

const Floating = keyframes`
  0%{
    transform: translateY(-10px)
  }
  50%{
    transform: translate(15px, 15px);
  }
  100%{
    transform: translateY(-10px);
  }

`


const Main = styled(motion.ul)`

position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;
color: white;

`


const Rotate = styled.span`

 display: block;
 position: fixed;
 right: 1rem;
 bottom: 1rem;
 width: 80px;
 height: 80px;
 z-index: 1;


`

const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}


const WorkPage = () => {

  const ref: any | null = useRef(null);
  const refBox: any | null = useRef(null);
  const yinyang: any | null = useRef(null);

  useEffect(() => {

    let element = ref.current
    let boxElement = refBox.current
    let yinyangElement = yinyang.current
    const width = element.offsetWidth;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinyangElement.style.transform = `rotate(${-window.pageYOffset}deg)`;
    }

    boxElement.style.height = `${width}px`

    console.log(window.innerWidth)

    window.addEventListener('scroll', rotate);
    return () => window.removeEventListener('scroll', rotate);

  }, [])
  return (
    <ThemeProvider theme={darkTheme}>
      <Box ref={refBox} animate={{ translateX: [window.innerWidth, -(window.innerWidth * 0.1), 0], transition: { duration: 1.5 } }}>
        <LogoComp theme='dark' />
        <SocialIcon theme='dark' />
        <PowerBtn />


        <Main ref={ref} variants={container} initial="hidden" animate='show' >
          {
            Work.map((d, index) => {
              return <Card key={d.id} data={d} i={index} />
            })
          }
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} color={darkTheme.text} />
        </Rotate>
        <BigTitle text="WORK" top="5rem" right="16rem" />
      </Box>
    </ThemeProvider>
  )
}

WorkPage.propTypes = {}

export default WorkPage