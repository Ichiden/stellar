import React from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie';

// ICONS
import sampleCourseImg from '../../icons/samCourse.jpg'
import QRCode from "react-qr-code";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const Container = styled.div`
    width:100%;
    display: flex;
`

const Wrapper = styled.div`
    max-width: 1366px;
    width:1366px;
    box-sizing: border-box;
    padding-top: 20px;
    @media (max-width:1386px) {
        padding:20px;
    }

`
const Sidings = styled.div`
    flex-grow: 1;
`

const SubContainer = styled.div`
    width:100%;
    background-color: #E9F2F9;
    border-radius: 15px;
    border:1px solid black;
    box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    padding:20px;


    @media (max-width:800px) {
        flex-direction: column;
    }
`

const LeftContainer = styled.div`
    flex-grow: 1;

`



const MainImageContainer = styled.div`
    width:100%;
    border-radius: 15px;
    margin-bottom: 5px;
`

const SampleImg = styled.img`
    width:100%;
    object-fit: cover;
    border-radius: 15px;
`
const Title = styled.div`
    font-weight: bold;
    font-size: 35px;
    color:#232323;
    margin-bottom: 5px;

    @media (max-width:800px) {
        font-size: 25px;
    }

    @media (max-width:450px) {
        font-size: 20px;
    }
`

const Date = styled.p`
    font-size: 18px;
    color:#232323;
    margin-bottom: 5px;

    
    @media (max-width:800px) {
        font-size: 16px;
    }

    @media (max-width:450px) {
        font-size: 14px;
    }
`

const Place = styled.div`
    border:1px solid #1A66CC;
    padding:5px;
    border-radius: 15px;
    width:400px;
    color:#232323;
    box-sizing: border-box;

    @media (max-width:500px) {
        width:100%;
    }

    @media (max-width:800px) {
        font-size: 16px;
    }

    @media (max-width:450px) {
        font-size: 14px;
    }
`

const RightContainer = styled.div`
    width:400px;
    min-width: 400px;
    padding-left: 20px;
    box-sizing: border-box;

    @media (max-width:1000px) {
        width:300px;
        min-width: 300px;  
        
    }

    @media (max-width:800px) {
        width:100%;
        min-width: 0;  
        padding: 0;
        padding-top:10px;
    }
`

const QrCodeContainer = styled.div`
    width:100%;
    background-color: #071C34;
    border-radius: 15px;
    padding:20px;
    box-sizing: border-box;
`

const QrTitle = styled.p`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color:white;
    margin-bottom: 20px;
`

const QrMessage = styled.p`
    text-align: center;
    font-size: 13px;
    color:white;
    margin-bottom: 20px;
`

const QrContainer = styled.div`
    height: auto;
    margin: 0 auto;
    max-width: 250;
    width: 90%;
    padding:20px;
    border-radius:15px;
    background:white;
    margin-top:20px;
    margin-bottom:20px;
    box-sizing: border-box;

    @media (max-width:800px){
        width:350px;
    }

    @media (max-width:500px){
        width:100%;
    }

`

const Spinner = styled.div`
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

const OwnedEvent = () => {
    const user = useSelector(state => state.user.currentUser);
    const cookies = new Cookies(null, { path: '/' });
    const token = cookies.get('token');

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const eventId = query.get('eventId');

    const qrCode = user?.course_owned?.find(e => {
        return e._id === eventId
    });

    const {data,isLoading} = useQuery({
        queryKey:[''],
        queryFn: async() => {
            const res = await axios({
                method:'GET',
                url:`/event/get-single_owned-event?eventId=${eventId}&token=${token}`,
                include:{withCredentials:true}
            })
            return res?.data
        }
    })

    if(isLoading){
        return <Spinner />
    }

    var dateFrom = new window.Date(data?.date_from);
    var dateTo = new window.Date(data?.date_to);

    console.log(data)


  return (
    <>
    <Container>
        <Sidings />
        <Wrapper>
            <SubContainer>
                {/* LEFT CONTAINER */}
                <LeftContainer>
                    {/* IMAGE */}
                    <MainImageContainer>
                        <SampleImg src={sampleCourseImg} />
                    </MainImageContainer>

                    {/* TITLE */}
                    <Title>{data?.title}</Title>

                    {/* DATE */}
                    <Date>{dateFrom.toLocaleDateString('en-US')} - {dateTo.toLocaleDateString('en-US')}</Date>

                    {/* PLACE */}
                    <Place>{data?.place}</Place>
                </LeftContainer>

                {/* RIGHT CONTAINER */}
                <RightContainer>
                    {/* QR CODE CONTAINER */}
                    <QrCodeContainer>
                        {/* QR TITLE */}
                        <QrTitle>{data?.title}</QrTitle>

                        {/* QR MESSAGE */}
                        <QrMessage>This will serve as your Identification card for the coming Regional Conference.</QrMessage>

                        {qrCode?.reg_type === 'f2f'
                        ?
                        <QrContainer>
                            <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={qrCode.qr_code}
                            viewBox={`0 0 256 256`}
                            />
                        </QrContainer>
                        :
                        <QrMessage>Your registration is virtual.</QrMessage>
                        }

                    </QrCodeContainer>

                    
                </RightContainer>
            </SubContainer>
        </Wrapper>
        <Sidings />
    </Container>
    </>
  )
}

export default OwnedEvent
