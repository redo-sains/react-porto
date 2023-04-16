import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { darkTheme } from './Themes'
import LogoComp from '../subComponents/LogoComp'
import SocialIcon from '../subComponents/SocialIcon'
import PowerBtn from '../subComponents/PowerBtn'
import ParticleComponent from '../subComponents/ParticleComponent'
import astronaut from '../assets/Images/spaceman.png';
import BigTitle from '../subComponents/BigTitle'


const Box = styled.div`
  background-color:${props => props.theme.body};
  width: 100vw;
  height: 100vh;
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

const Spaceman = styled.div`

position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${Floating}  4s ease infinite;
img{
  width: 100%;
  height: auto;
 }
`

const Main = styled.div`

border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
position: absolute;
z-index: 3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
left: calc(5vw + 5rem);
top: 10rem;

font-family: 'Ubuntu Mono', monospace;
font-size: italic;
`



const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComp theme='dark' />
        <SocialIcon theme='dark' />
        <PowerBtn />

        <ParticleComponent theme='dark' />
        <Main>
          I'm a full-stack developer located in Indonesia. I love to create websites with great user experience using ReactJs.
          <br /><br />
          I'm interested in the whole web development Like trying new things and building great projects. I'm an independent freelancer. I love to watch programming video.
          <br /><br />
          I believe proggramming is magic in this world and i'll use it to make many beautiful things. You can connect with me via social links.
        </Main>
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman >
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  )
}

AboutPage.propTypes = {}

export default AboutPage