import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components';

const Box = styled.div`
    display: flex;
    cursor: pointer;
    position: fixed;
    left: 10rem;
    top: 3rem;
    z-index: 10;
    
`;



const play = keyframes`
    0%{
        transform:scaleY(1);
    }50%{
        transform: scaleY(2);
    }100%{
        transform: scaleY(1);
    }    
`


const Line = styled.span<{ click: boolean, index: number }>`
background-color: ${P => P.theme.text};
border: 1px solid ${P => P.theme.body};
animation: ${play} 1s ease infinite;
animation-play-state: ${p => p.click ? "running" : "paused"};
border-radius: 5px;
height: 1rem;
width: 2px;
margin: 0 0.1rem;
animation-delay: 0.${p => 2 + p.index
    }s;
`


const SoundBar = () => {
    const ref: any = useRef(null);
    const [click, setClick] = useState(false);
    const soundCurrent = ref.current;
    const handleClick = () => {
        setClick(!click)


    }

    useEffect(() => {
        if (soundCurrent)
            if (click) {
                soundCurrent.play();
            } else {
                soundCurrent.pause();
            }
    }, [click])


    return (
        <Box onClick={() => handleClick()}>
            {[...Array(5)].map((d, i) => <Line key={i} click={click} index={i} />)}

            <audio ref={ref} src={require('../assets/audio/OnlyMP3.to - Heat Waves - Glass Animals  Japanese Cover-BOokFwrmri4-192k-1650291264696.mp3')} loop></audio>
        </Box>
    )
}

SoundBar.propTypes = {}

export default SoundBar