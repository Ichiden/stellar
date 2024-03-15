import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

// ICONS
import {FaStar} from 'react-icons/fa';
import userIcon from '../icons/user-icon.jpg'

// COMPONENTS
import CloudinaryVideoOrdinary from '../components/CloudinaryVideoOrdinary'
import SubjectCardOnViewPage from '../components/SubjectCardOnViewPage'
import FeedbackCard from '../components/Feedback/FeedbackCard'
import FeedbackShowAllPopup from '../components/Feedback/FeedbackShowAllPopup'

import {
    Container,
    Wrapper,
    Sidings,
    VideoContainer,
    VideoWrapper,
    BottomContainer,
    BottomLeftContainer,
    BottomRightContainer,
    TitleContainer,
    Title,
    SubTitle,
    Text,
    ButtonsContainer,
    BuyButton,
    AddToCartButton,
    RatingsContainer,
    RatingsTopContainer,
    RatingsText,
    RatingsStar,
    AuthorContainer,
    AuthorImageContainer,
    AuthorName,
    AuthorRole,
    AuthorMessage,
    BuyButtonTablet,
    AddToCartButtonTablet,
    Spinner,
    FeedbackContainer,
    FeedbackTitle,
    FeedbackButton,
    NoFeedbackText
} from '../styles/ViewCourse.style'

const StarContainer = styled.div`
    margin-left: 5px;
`

const AuthorImg = styled.img`
    width:100%;
    height:100%;
    border-radius: 50%;
`

const BackgroundCloser = styled.div`
    width:100%;
    height:100vh;
    background-color: black;
    opacity:.5;
    z-index: 19;
    position:fixed;
    top:0;
    left:0;
`


const ViewCourse = () => {
    const user = useSelector(state => state.user.currentUser);
    const [videoOpener, setVideoOpener] = useState(false);
    const [feedbbackPopupOpener, setFeedbackPopupOpener] = useState(false)

    const [currentValue, setCurrentValue] = useState(0)
    const stars = Array(5).fill(0);
    const colors = {
        orange:"#FFD600",
        gray:"#a9a9a9"
    }

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const courseId = query.get('id');


    const {data, isLoading} = useQuery({
        queryKey:['data',courseId],
        queryFn: async() => {
            const res = await axios({
                method:'GET',
                url:`/course/get-single-active-course?id=${courseId}`,
                include:{withCredentials:true}
            })
            return res?.data
        }
    })

    if(isLoading){
        return(
            <Spinner />
        )
    }

    var date = new window.Date(data?.createdAt);

    const courseArray = user?.course_owned;

    const recentSubjectData = courseArray?.find(e => {
        return e._id === courseId
    })

    console.log(data)

  return (
    <>
    <Container>
        <Sidings />
        <Wrapper>
            {/* VIDEO CONTAINER START */}
            <VideoContainer>
            <VideoWrapper key={data?.video_url}>
                <CloudinaryVideoOrdinary videoLink={data?.video_url} />
            </VideoWrapper>
            </VideoContainer>
            {/* VIDEO CONTAINER END */}
            
            {/* BOTTOM CONTAINER START */}
            <BottomContainer>
                {/* LEFT */}
                <BottomLeftContainer>
                    
                        {recentSubjectData !== undefined
                        ?
                        <Link to={`/owned/${data?.type}/?${data?.type}Id=${data?._id}`} style={{textDecoration:"none"}}>
                            <BuyButtonTablet>View</BuyButtonTablet>
                        </Link>
                        :
                        <>
                        {/* BUY BUTTON */}
                        {data?.type === 'course'
                        ?
                        <Link to={`/buy-course?id=${courseId}`}>
                            <BuyButtonTablet>Buy now</BuyButtonTablet>
                        </Link>
                        :
                        <Link to={`/course?id=65ef3843a8c721473a33c731`}>
                            <BuyButtonTablet>Buy this course to avail the event</BuyButtonTablet>
                        </Link>
                        }
                        </>
                        }

                    {/* TITLE */}
                    <TitleContainer>
                        <Title>{data?.title}</Title>
                        <SubTitle>Course Description</SubTitle>
                        <Text>{data?.desc} </Text>
                    </TitleContainer>

                    {/* OBJECTIVES */}
                    {/* <TitleContainer>
                        <SubTitle>Course Objectives</SubTitle>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                    </TitleContainer> */}

                    {/* OUTLINE */}
                    <TitleContainer>
                        <SubTitle>Outline</SubTitle>
                        {data.subjects.map((subjects,i) => {
                            return(
                                <SubjectCardOnViewPage key={i} data={subjects} number={i} />
                            )
                        })}
                    </TitleContainer>

                </BottomLeftContainer>


                {/* RIGHT */}
                <BottomRightContainer>
                    {/* BUTTONS CONTAINER */}
                    <ButtonsContainer>
                        {recentSubjectData !== undefined
                        ?
                        <Link to={`/owned/${data?.type}/?${data?.type}Id=${data?._id}`} style={{textDecoration:"none"}}>
                            <BuyButton>View</BuyButton>
                        </Link>
                        :
                        <>
                        {/* BUY BUTTON */}
                        {data?.type === 'course'
                        ?
                        <Link to={`/buy-course?id=${courseId}`}>
                            <BuyButton>Buy now</BuyButton>
                        </Link>
                        :
                        <Link to={`/course?id=65ef3843a8c721473a33c731`}>
                            <BuyButton>Buy this course to avail the event</BuyButton>
                        </Link>
                        }

                        
                        <AddToCartButton>Add to cart</AddToCartButton>
                        </>
                        }

                    </ButtonsContainer>

                    {/* RATINGS CONTAINER */}
                    <RatingsContainer>
                        <RatingsTopContainer>
                            <RatingsText style={{fontWeight:'bold',display:'inline-block'}}>{data?.average_rating} (stars)</RatingsText>
                            <StarContainer>
                            {stars.map((_,index) => {
                                return(
                                    <FaStar 
                                    key={index}
                                    size='18'
                                    style={{
                                        marginRight:'5',
                                        cursor:"pointer",
                                    }}
                                    color={(currentValue) > index ? colors.orange : colors.gray}
                                    />
                                )
                            })}
                            </StarContainer>
                            <RatingsText style={{fontWeight:'bold',display:'inline-block'}}>({data?.feedback_count})</RatingsText>
                        </RatingsTopContainer>

                        <RatingsText style={{marginBottom:'5px'}}>
                            <p style={{color:'#6C6A6A',display:'inline-block'}}>Number of Enrolees :</p> 
                            <p style={{fontWeight:'bold',display:'inline-block'}}> {data?.registered.length}</p>
                        </RatingsText>

                        <RatingsText>
                            <p style={{color:'#6C6A6A',display:'inline-block'}}>Date published:&nbsp; </p> 
                            <p style={{fontWeight:'bold',display:'inline-block'}}>  {date.toLocaleDateString('en-US')}</p>
                        </RatingsText>
                    </RatingsContainer>
                    {/* RATING CONTAINER END */}

                    {/* FEEDBACK CONTAINER START */}
                    <FeedbackContainer>
                        <FeedbackTitle>Feedback</FeedbackTitle>
                        {Number(data?.feedback.length) === 0
                        ?
                        <NoFeedbackText>No feedback yet.</NoFeedbackText>
                        :
                        <>
                        {/* {data?.feedback.map((dat, i) => {
                            return(
                                <FeedbackCard key={i} data={dat} />
                            )
                        })} */}
                        <FeedbackCard data={data?.feedback[0]} />
                        <FeedbackCard data={data?.feedback[1]} />
                        <FeedbackButton onClick={e => setFeedbackPopupOpener(true)}>Show all</FeedbackButton>
                        </>
                        }

                        {/* FEEDBACK POPUP */}
                        {feedbbackPopupOpener &&
                        <>
                        <BackgroundCloser onClick={e => setFeedbackPopupOpener(false)} />
                        <FeedbackShowAllPopup data={data?.feedback} />
                        </>
                        }

                    </FeedbackContainer>
                    {/* FEEDBACK CONTAINER END */}

                    {/* AUTHOR CONTAINER START */}
                    <AuthorContainer>
                        <AuthorImageContainer>
                            <AuthorImg src={userIcon} />
                        </AuthorImageContainer>
                        <AuthorName>{data?.author_id?.username}</AuthorName>
                        <AuthorRole>{data?.author_id?.role}</AuthorRole>
                        {/* <AuthorMessage>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</AuthorMessage> */}
                    </AuthorContainer>


                </BottomRightContainer>
            </BottomContainer>

        </Wrapper>
        <Sidings />
    </Container>
    </>
  )
}

export default ViewCourse


