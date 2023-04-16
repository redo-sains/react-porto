import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


interface props {
    click?: boolean,
    theme?: string
}

const Logo = styled.h1<props>`

    display: inline-block;
    color: ${props => props.click ? props.theme.body : props.theme.text};
    transition: ${(props) => props.click ? "all 1s ease 1s" : "all 1s ease"};
    font-family: 'Pacifico', cursive;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 9;

`


const LogoComp: React.FC<props> = ({ click = false }) => {
    return (
        <Logo click={click}>
            REDO
        </Logo>
    )
}

LogoComp.propTypes = {}

export default LogoComp