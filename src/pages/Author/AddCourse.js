import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import {motion} from 'framer-motion'
import axios from 'axios'
import Toastify from '../../components/Toastify'
import Cookies from 'universal-cookie';

// ICONS
import OpenIcon from '../../icons/openArrow.png'

// COMPONENTS
import AddCourseCard from '../../components/Author/AddCourseCard'
import BackgroundCloser from '../../components/Author/BackgroundCloser'
import UploadCoursePopup from '../../components/Author/UploadCoursePopup'
    // sidebars
import Sidebar from '../../components/Author/Sidebar'


// STYLES
import {
    MainBodyWrapper,
    Title,
    InstructionContainer,
    IntructionTitle,
    IntructionTextContainer,
    UploadButtonContainer,
    UploadButton
} from '../../styles/Author/AddCourse.style'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'

const Container = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
`
const Sidings = styled.div`
    flex-grow:1;
    background-color: white;
    z-index: 9;
`

const Wrapper = styled.div`
    width:1366px;
    max-width: 1366px;
    display:flex;
`
const MainBody = styled.div`
    flex-grow: 1;
    padding:0 10px;
    box-sizing: border-box;
    position:relative;
`

const RouteContainer = styled.div`
    width:100%;
    background-color: white;
    position: sticky;
    top:65px;
    left:0;

    @media (max-width:450px) {
        top:55px;
    }
`

const Route = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px 0;
    box-sizing: border-box;
    border-bottom: 1px solid gray;
`

const BlankDiv = styled.div`
    width:100%;
    height:10px;
`

const SidebarCloseContainer = styled.div`
    height:40px;
    display:flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    border:1px solid gray;
    border-radius: 3px;
    cursor:pointer;

    &:hover{
        background-color: lightgray;
    }

    &:active{
        scale:.95;
    }
`
const CloseText = styled.p`
    font-size:15px;
`

const CloseImg = styled.img`
    width:30px;
    height:30px;
`
const RouteText = styled.p`
    font-size: 20px;
    color:gray;  
`

const RouteTextCotnainer = styled.div`
    height:40px;
    display:flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    border-radius: 3px;
    cursor:pointer;
`

const SidebarCloserMobileTablet = styled.div`
    height:40px;
    display:flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    border:1px solid gray;
    border-radius: 3px;
    cursor:pointer;

    &:hover{
        background-color: lightgray;
    }

    &:active{
        scale:.95;
    }
    
    @media (min-width:925px){
        display: none;
    }
`

const CloserBlankDiv = styled.div`
    /* @media (max-width:925px) {
        display: none;
    } */
`

const BackGroundCloser = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    background-color: gray;
    opacity:.3;
    z-index: 3;

    @media (min-width:925px) {
        display: none;
    }

    @media (max-width:450px) {
        display: none;
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
    margin-left: calc(50% - 30px);
    margin-top: 20px;
    margin-bottom: 20px;

   @keyframes spinner-zp9dbg {
   to {
      transform: rotate(1turn);
   }
}`

const Card = styled.div`
    width:100%;
    height:100px;
    background-color: red;
    margin-top: 10px;
`

function Dashboard() {
    const [uploadOpener, setUploadOpener] = useState(false);
    const [openSidebar, setOpenSidebar ] = useState(false);
    const [toastify,setToastify] = useState(false);
    const [refresher, setRefresher] = useState(false)
    const cookies = new Cookies(null, { path: '/' });
    const token = cookies.get('token');


    const { data, isLoading } = useQuery({
        queryKey:[refresher],
        queryFn:async() => {
            const res = await axios({
                method:'GET',
                url:`/course/get-all-author-courses?token=${token}`,
                include:{withCredentials:true}
            })
            return res;
        }
    })

    const Loading = () => {
        if(isLoading){
            return(
                <Spinner />
            )
        }
    }

    console.log(data)

  return (
    <>
    {toastify && <Toastify message={'Course successfully uploaded !!!'} />}
    {/* POPUP - Add course */}
    {uploadOpener 
    && 
    <>
    <UploadCoursePopup setRefresher={setRefresher} setToastify={setToastify} setUploadOpener={setUploadOpener} as={motion.div} animate={{scale:1,opacity:1}} initial={{scale:0.8,opacity:0}} transition={{delay:0,duration:0.1}}/>
    <BackgroundCloser setUploadOpener={setUploadOpener}/>
    </>
    }
    
    <Container>
        <Sidings />
        <Wrapper>
            {openSidebar
            ?
            <Sidebar setOpenSidebar={setOpenSidebar} style={{marginLeft:'0',left:0}}/>
            :
            <Sidebar setOpenSidebar={setOpenSidebar} style={{marginLeft:'-300px',left:'-100%'}}/>
            }

            
            <MainBody>
            <RouteContainer>
                    <Route>
                        {/* FOR DESKTOP AND LAPTOP */}
                        {!openSidebar
                        ?
                        <SidebarCloseContainer onClick={e => setOpenSidebar(true)}>
                            <CloseText>Open Sidebar</CloseText>
                            <CloseImg src={OpenIcon} />
                        </SidebarCloseContainer>
                        :
                        <CloserBlankDiv />
                        }
                    <RouteTextCotnainer>
                        <RouteText>Dashboard</RouteText>
                    </RouteTextCotnainer>
                    
                    </Route>

                    <BlankDiv />
                </RouteContainer>

                {/* START HERE */}

                <MainBodyWrapper>
                    <Title>Add Course</Title>
                    <InstructionContainer>
                        <IntructionTitle>Intruction</IntructionTitle>
                        <IntructionTextContainer>
                        it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consecteasdtur, from a Lorem Ipsum passage, and going through the cites of the word in clasasdasdsical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of 
                        </IntructionTextContainer>
                    </InstructionContainer>

                    <UploadButtonContainer>
                        <div />
                        <UploadButton onClick={e => setUploadOpener(true)}>Upload</UploadButton>
                    </UploadButtonContainer>
                    
                    {data?.data?.map((datas,i) => {
                        return(
                            <AddCourseCard key={i} datas={datas} setRefresher={setRefresher}/>
                        )
                    })}

                    <Loading />
                </MainBodyWrapper>
            </MainBody>
        </Wrapper>
        <Sidings />
    </Container>
    </>
  )
}

export default Dashboard