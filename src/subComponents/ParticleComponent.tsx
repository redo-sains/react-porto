import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Particles from 'react-tsparticles';

import configDark from '../config/particlesjs-config'
import configLight from '../config/particlesjs-config-light'



interface Props {
    theme?: string
}



const Box = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
`

const ParticleComponent: React.FC<Props> = ({ theme }) => {



    const particlesInit = async () => {
        // console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        // await loadFull(main);
    };

    const particlesLoaded = async () => {
        // console.log(container);
    };



    return (
        <Box>
            <Particles
                style={{ position: 'absolute', top: 0 }}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={theme === "light" ? configLight() : configDark()}
            />
        </Box>
    )
}

ParticleComponent.propTypes = {}

export default ParticleComponent