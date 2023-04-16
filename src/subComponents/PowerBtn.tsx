import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ReactComponent as BtnPow } from '../assets/svg/power-off-solid.svg'
import { NavLink } from 'react-router-dom'


const Power = styled.div`

    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #FCF6F4;
    padding: 0.3rem;
    border-radius: 50% ;
    border: 1px solid #000;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
    cursor: pointer;

    &:hover{
        background-color: rgba(0,255,0,0.4);
        box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
    }

    &>*:first-child{
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

`

const PowerBtn = () => {
    return (
        <Power>
            <NavLink to="/">
                <BtnPow height={50} width={50} />
            </NavLink>
        </Power>
    )
}

PowerBtn.propTypes = {}

export default PowerBtn