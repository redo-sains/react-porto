import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Github } from '../assets/svg/github-brands.svg'
import { motion } from "framer-motion"

type workData = {
    id: Number,
    name: String,
    description: String,
    tags: String[],
    demo: String,
    github: String,
}

interface Props {
    data: workData,
    i: number
}

const Box = styled(motion.li)`
    width: 16rem;
    height: 40vh;
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    padding: 1.5rem 2rem;
    margin-right: 8rem;
    list-style: none;
    border-radius: 0 50px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.body};
    transition: all 0.2s ease;

    &:hover {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
    }
`

const Title = styled.h2`

font-size: calc(1em + 0.5vw);

`

const Link = styled(NavLink)`
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    border-radius: 0 0 0 50px;
    font-size: calc(1em + 0.5vw);
    ${Box}:hover &{
        background-color: ${(props) => props.theme.text};
        color: ${props => props.theme.body};
    }
`
const Git = styled(NavLink)`
    
    color: inherit;
    text-decoration: none;  
    ${Box}:hover &{
        &>*{
            fill:${(props) => props.theme.text}
        }
    }
`

const Footer = styled.footer`
    
    display: flex;
    justify-content: space-between;
`



const Description = styled.p`

font-size: calc(0.8em + 0.3vw);
font-family: 'Karla', sans-serif;
font-weight: 500;

`

const Tags = styled.div`
    border-top: 2px solid ${(props) => props.theme.body};
    padding-top: 0.5rem ;
    display: flex;
    flex-wrap: wrap;
    ${Box}:hover &{
        border-top: 2px solid ${(props) => props.theme.text};
    }
`

const Tag = styled.span`
    margin-right: 1rem;
    font-size:calc(0.8em + 0.3vw);
`

const item = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card: React.FC<Props> = ({ data, i }) => {

    const { id, name, description, tags, demo, github } = data;


    return (
        <Box variants={item}  >
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Tags>
                {tags.map((t, i2) => {
                    return <Tag key={`${i}-${i2}-${id}`} >#{t}</Tag>
                })}
            </Tags>
            <Footer>
                <Link to={{ pathname: `${demo}` }} target="_blank" >
                    visit
                </Link>
                <Git to={{ pathname: `${github} ` }} target="_blank" >
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        </Box>

    )
}

Card.propTypes = {}

export default Card