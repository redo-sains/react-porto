import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Github } from '../assets/svg/github-brands.svg'
import { ReactComponent as Twitter } from '../assets/svg/twitter-brands.svg'
import { ReactComponent as Facebook } from '../assets/svg/facebook-brands.svg'
import { ReactComponent as Youtube } from '../assets/svg/youtube-brands.svg'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'
import { motion } from 'framer-motion'

interface Props {
    click?: boolean,
    theme?: string
}

const Icons = styled.div<Props>`
    display:flex;
    flex-direction: column;
    align-items:center;
    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index:9;

    a{
        color: inherit;    
    }

    a:first-child{
        background-color: "red";
    }

    svg{
        color: ${props => props.click ? props.theme.body : props.theme.text};
        transition: ${(props) => props.click ? "all 1s ease 1s" : "all 1s ease"};
    }
`

const Line = styled(motion.span) <Props>`
width: 2px;
height: 8rem;
background-color:${props => props.click ? props.theme.body : props.theme.text};
transition:${(props) => props.click ? "all 1s ease 1s" : "all 1s ease"};


`


const SocialIcons = styled(motion.div)`

    margin: 0.25rem 0;

`




const SocialIcon: React.FC<Props> = ({ click }) => {

    return (
        <Icons click={click}>
            <SocialIcons initial={{ transform: "scale(0)" }} animate={{ scale: [0, 1, 1.5, 1] }} transition={{ type: "spring", duration: 0.4, delay: 1.4 }} >
                <NavLink target="_blank" to='/'>
                    <Github width={25} height={25} />
                    {/* color={click ? darkTheme.text : darkTheme.body} /> */}
                </NavLink>
            </SocialIcons>
            <SocialIcons initial={{ transform: "scale(0)" }} animate={{ scale: [0, 1, 1.5, 1] }} transition={{ type: "spring", duration: 0.4, delay: 1.2 }} >
                <NavLink target="_blank" to='/'>
                    <Twitter width={25} height={25} />
                </NavLink>
            </SocialIcons >
            <SocialIcons initial={{ transform: "scale(0)" }} animate={{ scale: [0, 1, 1.5, 1] }} transition={{ type: "spring", duration: 0.4, delay: 1 }} >
                <NavLink target="_blank" to='/'>
                    <Facebook width={25} height={25} />
                </NavLink>
            </SocialIcons >
            <SocialIcons initial={{ transform: "scale(0)" }} animate={{ scale: [0, 1, 1.5, 1] }} transition={{ type: "spring", duration: 0.4, delay: 0.8 }} >
                <NavLink target="_blank" to='/'>
                    <Youtube width={25} height={25} />
                </NavLink>
            </SocialIcons >
            <Line initial={{ height: 0 }} animate={{ height: '8rem' }} transition={{ type: 'spring', duration: 0.4, delay: 0.1 }} click={click} />
        </Icons >
    )
}





export default SocialIcon