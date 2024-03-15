import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  display: flex;
`

export const Sidings = styled.div`
  flex-grow: 1;
`

export const Wrapper = styled.div`
  max-width:1366px;
  width:1366px;
  box-sizing: border-box;

  @media (max-width: 1366px) {
    padding:0 20px;
  }

  @media (max-width:450px) {
    padding:0;
  }

`
export const BannerContainer = styled.div`
  width:100%;
  display: flex;
  margin-top: 30px;

  @media (max-width:830px) {
    flex-direction: column;
    margin-top: 0;
  }
`

export const WelcomeMessageContainer = styled.div`
  width:50%;
  padding:20px;
  box-sizing: border-box;

  @media (max-width:830px) {
    width:100%;
  }


`

export const FreeDiv = styled.div`
  width:20px;

  @media (max-width:830px) {
    display:none;
  }
`

export const MessageBlackText = styled.p`
  font-size: 40px;
  box-sizing: border-box;
  display: inline-block;

  @media (max-width:936px) {
    font-size: 35px;
  }
`

export const MessageBlueText = styled.p`
  font-size: 40px;
  box-sizing: border-box;
  color:#1A66CC;
  display: inline-block;
  font-weight: bold;

  @media (max-width:936px) {
    font-size: 35px;
  }
`

export const SmallTextMessage = styled.p`
  margin-top: 30px;
  color:#808080;
`

export const PoweredBy = styled.p`
    margin-top: 20px;
    color:#808080;
`

export const VizContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const SmallLogo = styled.img`
  width:20px;
  height:20px;
`

export const LogoText = styled.p`
  font-size: 16px;
  color: #808080;
`

export const BannerCon = styled.div`
  flex-grow: 1;
  height:400px;
  /* background-color: #071C34;
  border-radius: 20px; */

  @media (max-width:830px) {
    display:none;
  }
`

export const BannerTop = styled.div`
  width:100%;
  height:300px;
  background-color: #071C34;

  @media (min-width:830px) {
    display: none;
  }

`