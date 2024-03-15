import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display: flex;
`

export const Sidings = styled.div`
    flex-grow: 1;
    z-index: 8;
    background-color: white;
`

export const MainWrapper = styled.div`
    width:1366px;
    max-width: 1366px;
    box-sizing: border-box;
    display: flex;
`

export const WrapperBody = styled.div`
    width:100%;
    box-sizing: border-box;
    flex-grow: 1;
`

export const WrapperHeader = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px 0;
    box-sizing: border-box;
    height:40px;
    background-color: #071C34;

    position: sticky;
    top:55px;
    z-index: 5;
`

export const SideabarButton = styled.button`
    cursor: pointer;
    font-size: 13px;
    background-color: #1A66CC;
    font-weight: bold;
    color:white;
    display: flex;
    align-items: center;
    height:40px;
    border:none;
    padding:0 10px;
`

export const OpenArrowContainer = styled.div`
    width:35px;
    margin-top: 5px;
    margin-left: 5px;
`

export const OpenArrowImg = styled.img`
    width:100%;

`

export const Title = styled.div`
    color:white;
    margin-right: 10px;
`

export const BackgroundCloser = styled.div`
    width:100%;
    height:100vh;
    background-color: black;
    opacity:.8;
    position:fixed;
    z-index: 6;

    @media (min-width:1100px) {
        display:none;
    }

    @media (max-width:400px) {
        display:none;
    }
`

export const VideoMainContainer = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`

export const VideoContainer = styled.div`
    width:80%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width:800px) {
        width:100%;
    }
` 

export const BottomContainer = styled.div`
    width:100%;
    display: flex;

    @media (max-width:530px){
        flex-direction: column;
    }
`

export const LeftContainer = styled.div`
    flex-grow: 1;
    padding:10px;
    box-sizing: border-box;
    padding-bottom: 0;
`

export const RightContainer = styled.div`
    width:300px;
    padding:10px 0;
    box-sizing: border-box;
    min-width: 300px;

    @media (max-width:530px) {
        width:100%;
        padding:10px;
        padding-top: 0;
    }
`

export const CourseTitleContainer = styled.div`
    width:100%;
    background-color: #E9F2F9;
    border-radius: 15px;
    padding:10px;
    box-sizing: border-box;
    margin-bottom: 10px;
`

export const CourseTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    color:#0D0D0D;
    margin-bottom: 5px;
`
export const CourseDescription = styled.p`
    color:#6C6A6A;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;
`

export const CourseDescText = styled.p`
    color: #6C6A6A;
    font-size: 13px;
`

export const RatingsContainer = styled.div`
    width:100%;
    background-color: #E9F2F9;
    border-radius: 15px;
    padding:20px;
    box-sizing: border-box;
`

export const RatingsTopContainer = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

export const RatingsTextBlack = styled.p`
    font-size: 12px;
`

export const RatingStar = styled.img`
    width:100px;
`

export const Spinner = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background: conic-gradient(#0000 10%,#ffffff);
   background-color: red;
   -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 3px),#000 0);
   animation: spinner-zp9dbg 1s infinite linear;
    position:absolute;
    left:calc(50% - 30px);
    top:100px;


   @keyframes spinner-zp9dbg {
   to {
      transform: rotate(1turn);
   }
}`

