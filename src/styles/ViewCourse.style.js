import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display: flex;
`

export const Wrapper = styled.div`
    width:1366px;
    max-width: 1366px;

`

export const Sidings = styled.div`
    flex-grow: 1;
`

export const VideoContainer = styled.div`
    width:100%;
    height:400px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const VideoWrapper = styled.div`
    width:80%;
    height:100%;
    background-color: red;

    @media (max-width:800px) {
        width:100%;
    }
`

export const BottomContainer = styled.div`
    width:100%;
    display: flex;

    @media (max-width:800px) {
        flex-direction: column;
    }

`

// LEFT
export const BottomLeftContainer = styled.div`
    flex-grow: 1;
    padding: 10px;
    box-sizing: border-box;
    padding-left: 0;
    padding-bottom: 0;

    @media (max-width:1366px) {
        padding-left: 10px;
    }
`
export const TitleContainer = styled.div`
    width:100%;
    background-color: #E9F2F9;
    padding:10px;
    border-radius: 15px;
    box-sizing: border-box;
    margin-bottom: 10px;
`

export const Title = styled.p`
    color:#0D0D0D;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`

export const SubTitle = styled.p`
    color:#6C6A6A;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;
`

export const Text = styled.p`
    color:#6C6A6A;
    font-size: 13px;
`

// RIGHT
export const BottomRightContainer = styled.div`
    width:325px;
    min-width: 325px;
    padding:10px 0;
    box-sizing: border-box;

    @media (max-width:1366px) {
        padding-right: 10px;
    }

    @media (max-width:800px) {
        width:100%;
        padding-left: 10px;
        min-width: 0;
        padding-top: 0;
    }
`

export const ButtonsContainer = styled.div`
    width:100%;
    padding:0;
`

export const BuyButton = styled.button`
    width:100%;
    background-color: #1A66CC;
    color:white;
    border:1px solid #1A66CC;
    margin:0;
    font-size: 14px;
    font-weight: bold;
    padding:10px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;

    @media (max-width:800px) {
        display: none;
    }
`

export const AddToCartButton = styled.button`
    width:100%;
    background-color: white;
    color:#1A66CC;
    border:1px solid #1A66CC;
    margin:0;
    font-size: 14px;
    font-weight: bold;
    padding:10px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;

    @media (max-width:800px) {
        display: none;
    }
`

export const BuyButtonTablet = styled.button`
    width:100%;
    background-color: #1A66CC;
    color:white;
    border:1px solid #1A66CC;
    margin:0;
    font-size: 14px;
    font-weight: bold;
    padding:10px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    position:sticky;
    top:75px;

    @media (min-width:800px) {
        display: none;
    }

    @media (max-width:450px) {
        top:65px;
    }
`

export const AddToCartButtonTablet = styled.button`
    width:100%;
    background-color: white;
    color:#1A66CC;
    border:1px solid #1A66CC;
    margin:0;
    font-size: 14px;
    font-weight: bold;
    padding:10px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;

    @media (min-width:800px) {
        display: none;
    }
`

export const RatingsContainer = styled.div`
    width:100%;
    background-color: #E9F2F9;
    border-radius: 15px;
    padding:20px;
    box-sizing: border-box;
    margin-bottom: 10px;
`

export const RatingsTopContainer = styled.div`
    display: flex;
    margin-bottom: 5px;
`

export const RatingsText = styled.p`
    font-size: 13px;
    color:#0F0F0F;
`

export const RatingsStar = styled.img`
    width:57px;
    margin:0 10px;
`

export const AuthorContainer = styled.div`
    width:100%;
    background-color: #E9F2F9;
    border-radius: 15px;
    padding:20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AuthorImageContainer = styled.div`
    width:100px;
    height:100px;
    background-color: gray;
    border-radius: 50%;
    margin-bottom: 5px;
`

export const AuthorName = styled.p`
    font-size: 16px;
    font-weight: bold;
    color:#232323;
`

export const AuthorRole = styled.p`
    color:#6C6A6A;
    font-size: 10px;
    margin-bottom: 10px;
`   

export const AuthorMessage = styled.p`
    color:#6C6A6A;
    font-size: 12px;
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

export const FeedbackContainer = styled.div`
    width:100%;
    background-color: #E9F2F9;
    margin-bottom: 10px;
    border-radius: 15px;
    padding:10px;
    box-sizing: border-box;
`

export const FeedbackTitle = styled.p`
    font-size: 17px;
    text-align: center;
    font-weight: bold;
`

export const FeedbackButton = styled.button`
    background-color: #1A66CC;
    border:none;
    border-radius: 20px;
    padding:10px;
    color:white;
    box-sizing: border-box;
    margin-left: 50%;
    transform: translateX(-50%);
    cursor: pointer;

    &:hover{
        opacity: .5;
    }
`

export const NoFeedbackText = styled.p`
    font-size: 12px;
    color:gray
`




