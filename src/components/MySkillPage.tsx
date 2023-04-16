import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { ReactComponent as Frontend } from '../assets/svg/laptop-code-solid.svg'
import { ReactComponent as Design } from '../assets/svg/palette-solid.svg'
import LogoComp from '../subComponents/LogoComp'
import SocialIcon from '../subComponents/SocialIcon'
import PowerBtn from '../subComponents/PowerBtn'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
  background-color:${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  font-family: 'Ubuntu mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
  
  
`

const Title = styled.h2`
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);



  &>*:first-child{
      margin-right: 1rem;
    }
`
const Description = styled.div`
  
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0 ;

  strong{ 
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,p{
    margin-left: 2rem;
  }

  ${Main}:hover &{

      color:${props => props.theme.body};
    
  }

`

const MySkillPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComp theme='light' />
        <SocialIcon theme='light' />
        <PowerBtn />
        <ParticleComponent theme='light' />

        <Main>
          <Title><Design width={40} height={40} /> Design</Title>
          <Description>I love to create design which speaks, Keep it clean, minimal and simple.</Description>
          <Description>
            <strong>I LIKE TO DESIGN</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title><Frontend width={40} height={40} />Frontend Develover</Title>
          <Description>I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.</Description>
          <Description>
            <strong>SKILLS</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
            </p>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <p>
              VScode, Github, Codepen etc.
            </p>
          </Description>
        </Main>
        <BigTitle text="SKILL" top="80%" left="30%" />
      </Box>
    </ThemeProvider>
  )
}

MySkillPage.propTypes = {}

export default MySkillPage