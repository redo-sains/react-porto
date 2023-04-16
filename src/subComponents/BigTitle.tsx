import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

interface Props {
    top?: string | number;
    left?: string | number;
    right?: string | number;
    text: string;
}
interface TextProps {
    top: string | number;
    left: string | number;
    right: string | number;
}

const Text = styled.h1<TextProps>`

    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    color: ${props => `rgba(${props.theme.textRgba}, 0.1)`};
    font-size: calc(5rem + 5vw);
    pointer-events: none;
    z-index: 0;

`

const BigTitle: React.FC<Props> = ({ text, top = "", left = "", right = "" }) => {
    return (
        <Text top={top} left={left} right={right}>
            {text}
        </Text>
    )
}

BigTitle.propTypes = {}

export default BigTitle