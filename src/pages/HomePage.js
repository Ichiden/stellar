import React from 'react'
import vizcomSmallLogo from '../icons/vizcomSmallLogo.svg'
import sampleEvent from '../icons/sampleEvent.svg'
import styled from 'styled-components'

import {
  Container,
  Sidings,
  Wrapper,
  BannerContainer,
  WelcomeMessageContainer,
  BannerCon,
  MessageBlackText,
  FreeDiv,
  MessageBlueText,
  SmallTextMessage,
  PoweredBy,
  SmallLogo,
  VizContainer,
  LogoText,
  BannerTop
} from '../styles/Homepage.style'

const Img = styled.img`
  width:100%;
  object-fit: cover;
`

const HomePage = () => {
  return (
    <>
    <Container>
      <Sidings />
      <Wrapper>
        {/* TOP CONTAINER */}
        <BannerContainer>
            {/* BANNER TOP */}
            <BannerTop></BannerTop>

            {/* MESSAge */}
            <WelcomeMessageContainer>
              <MessageBlackText>New</MessageBlackText>&nbsp;&nbsp;
              <MessageBlueText>SKILL,</MessageBlueText>
              <MessageBlackText>Welcomes</MessageBlackText>
              <MessageBlueText>Opportunities.</MessageBlueText>
              <MessageBlackText>Yours For The Taking.</MessageBlackText>

            {/* SMALL MESSAGE */}
            <SmallTextMessage>
            Start exploring and learn new skills with us from our greatest instructor.
            Learn now, price starts at Php499.
            </SmallTextMessage>

            <PoweredBy>Powered by</PoweredBy>

            <VizContainer>
              <SmallLogo src={vizcomSmallLogo} />
              <LogoText><i>Vizcom Corporation</i></LogoText>
            </VizContainer>



            </WelcomeMessageContainer>
            <FreeDiv />


            <BannerCon>
              <Img src={sampleEvent} />
            </BannerCon>

        </BannerContainer>
      </Wrapper>
      <Sidings />
    </Container>
    </>
  )
}

export default HomePage
