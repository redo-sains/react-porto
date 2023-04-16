import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ReactComponent as AnchorSvg } from "../assets/svg/anchor-solid.svg"
import { ReactComponent as Link } from "../assets/svg/link-solid.svg"

interface props {
    number: number
}

const Container = styled.div`

    position: relative;

`

const Slider = styled.div`

    position: fixed;
    top:0;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(-100%);

    .chain{
        transform: rotate(135deg);
    }

`

const PraDisplay = styled.div`

    position: absolute;
    top:0;
    right: 2rem;
    /* display: none ; */

`



const Anchor: React.FC<props> = ({ number }) => {

    const ref = useRef<any>(null);
    const hiddenRef = useRef<any>(null);

    useEffect(() => {

        const handleScrollEvent = () => {

            let scrollPosition: number = window.scrollY;
            let windowSize: number = window.innerHeight;
            let bodyHeight: number = document.body.offsetHeight;

            let diff: number = Math.max(bodyHeight - (scrollPosition + windowSize));

            let diffP: number = (diff * 100) / (bodyHeight - windowSize);

            ref.current.style.transform = `translateY(-${diffP}%)`;

            if (window.scrollY > 5) {
                hiddenRef.current.style.display = 'none'
            } else {
                hiddenRef.current.style.display = 'block'
            }


        };
        window.addEventListener("scroll", handleScrollEvent)

        return () => window.removeEventListener("scroll", handleScrollEvent);

    }, [])

    return (
        <Container>
            <PraDisplay ref={hiddenRef} className='hidden'>
                <AnchorSvg width={70} height={70} color="currentColor" />
            </PraDisplay>
            <Slider ref={ref}>

                {
                    [...Array(number)].map((data, id) => {
                        return <Link key={id} width={25} height={25} color="currentColor" className="chain" />
                    })
                }
                <AnchorSvg width={70} height={70} color="currentColor" />
            </Slider>
        </Container>
    )
}

Anchor.propTypes = {}

export default Anchor