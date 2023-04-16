import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComp from '../subComponents/LogoComp'
import PowerBtn from '../subComponents/PowerBtn'
import SocialIcon from '../subComponents/SocialIcon'
import BlogComp from './BlogComp'
import { Blogs } from '../data/BlogData';
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'


const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  
  
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;

`

const Center = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const Grid = styled.div`
  
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

`

const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}

const BlogPage = (): JSX.Element => {

  const [number, setNumber] = useState(0);

  useEffect(() => {

    let Num = (window.innerHeight - 70) / 26;

    setNumber(Math.round(Num))

  }, []);

  return (
    <MainContainer variants={container} initial='hidden' animate='show' exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      <Container>
        <LogoComp />
        <PowerBtn />
        <SocialIcon />
        <AnchorComponent number={number} />
        <Center>
          <Grid>
            {
              Blogs.map(blog => {
                return <BlogComp key={blog.id} blog={blog} />
              })
            }
          </Grid>
        </Center>
        <BigTitle text="BLOG" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  )
}

BlogPage.propTypes = {}

export default BlogPage