import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';

// COMPONENTS
import OwenedCard from '../../components/Owned/OwenedCard'

import { useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import axios from 'axios'

const Container = styled.div`
    width:100%;
    display:flex;
`

const Wrapper = styled.div`
    width:1366px;
    height: 100px;
    padding:0 10px;
    box-sizing: border-box;
`

const Sidings = styled.div`
    flex-grow: 1;
`

const Title = styled.p`
    color: 	#484848;
    font-size: 30px;
    font-weight: bold;
    padding:10px 0;
    border-bottom: 1px solid #1A66CC;
`

const CardsBodyContainer = styled.div`
    width:100%;
    margin-top: 10px;
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

const CardsWrapper = styled.div`
    width:100%;
    display: grid;
    grid-template-columns:repeat(auto-fill,350px);
    justify-content: space-around;
    gap:10px;
    position:relative;
    margin-top: 10px;

    @media (max-width: 1366px){
        grid-template-columns:repeat(auto-fill,250px);
    }
`

const Owned = () => {
    const cookies = new Cookies(null, { path: '/' });
    const token = cookies.get('token');
    const user = useSelector(state => state.user.currentUser);
    const [refresher, setRefresher] = useState(false);
    
    const {data,isLoading,isError,error} = useQuery({
        queryKey:['',refresher],
        queryFn: async() => {
            const res = await axios({
                method:"get",
                url:`/course/get-all-owned-course?token=${token}`,
                include:{withCredentials:true}
            });
            return res?.data
        }
    })

    if(isLoading){
        return <Spinner />
    }

    if(isError){
        console.log(error)
    }

    console.log(user?.course_owned.length)

  return (
    <>
    <Container>
        <Sidings />
        <Wrapper>
            <Title>My courses and events</Title>
            
            {user?.course_owned.length === 0
            ?
            <p>NO COURSE OR EVENT</p>
            :
            <CardsWrapper>
                {data?.course_owned.map((data,i) => {
                    return(
                        <OwenedCard setRefresher={setRefresher} key={i} data={data._id} />
                    )
                })}

            </CardsWrapper>
            }
       


            
            
            
        </Wrapper>
        <Sidings />
    </Container>
    </>
  )
}

export default Owned
