import React, { useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {useQuery} from 'react-query'
import axios from 'axios'

// COMPONENTS
import CardSearch from '../components/CardSearch'
import Filter from '../components/Filter'

// ICONS
import openIcon from '../icons/openArrow.png'

const Container = styled.div`
    width:100%;
    display:flex;
`
const Sidings = styled.div`
    flex-grow:1;
    background-color: white;

    z-index: 5;
`
const Wrapper = styled.div`
    width:100%;
    display: flex;
    max-width: 1366px;
    margin: 0px auto;
    position:sticky;
    top:65px;
    left:0;
`

const Body = styled.div`
    flex-grow: 1;
    padding:10px;
    padding-right: 10px;
    box-sizing: border-box;
    position:relative;
`

const TopContainer = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    flex-direction: column;
    position: sticky;
    top:65px;
    left:100px;
    margin-top: -10px;
    background-color: white;
    z-index: 5;

    @media (max-width:450px){
        top:55px;
    }
`

const TopWrapper = styled.div`
    width:100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const OpenFilterContainer = styled.div`
    height:40px;
    display:flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    border:1px solid gray;
    border-radius: 3px;
    cursor:pointer;


    @media (max-width:800px) {
        
    }
`

const OpenFilterText = styled.p`
    font-size: 15px;
`

const OpenImg = styled.img`
    width:30px;
    height:30px;
`
const TotalSearchContainer = styled.div`
    height:40px;
    display:flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    border:1px solid gray;
    border-radius: 3px;
    float: right;
`
const TotalSearch = styled.p`
    margin-right: 10px;
`

const Hr = styled.hr`
    border-top: 1px solid #1A66CC;
    width:100%;
    margin: 10px 0%;
    box-sizing: border-box;
`

const CardsWrapper = styled.div`
    width:100%;
    display: grid;
    grid-template-columns:repeat(auto-fill,250px);
    justify-content: space-around;
    gap:10px;
    position:relative;
`

const FilterTabletBackgroundCloser = styled.div`
    width:100%;
    height:calc(100vh - 65px);
    position: fixed;
    top:65px;
    left:0;
    z-index: 7;
    /* margin-top: calc(-100vh + 65px); */
    background-color: gray;
    opacity:.3;
    transition: all .2s ease .2s;

    @media (min-width:800px) {
        display:none;
    }

    @media (max-width:450px){
        display:none;
    }
`

const FreeDiv = styled.div`

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
    top:50px;


   @keyframes spinner-zp9dbg {
   to {
      transform: rotate(1turn);
   }
}`

function Search() {
    const [openFilter, setOpenFilter] = useState(false);

    const [openTabletFilter, setOpenTabletFilter] = useState(false);
    const [minPrice,setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [category, setCategory] = useState('');


    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const title = query.get('query');

        // console.log({minPrice,maxPrice,category,title})

    // FILTER FUNCTION RECEIVER
    const minPriceFunction = (value) => {
        setMinPrice(value)
    }

    const maxPriceFunction = (value) => {
        setMaxPrice(value)
    }

    const categoryFunction = (value) => {
        setCategory(value)
    }

    const {data, isLoading} = useQuery({
        queryKey:['data',minPrice,maxPrice,category,title],
        queryFn: async() => {
            const res = await axios({
                method:'GET',
                url:`/course/get-all-active-courses?${minPrice !== '' ? `price[gte]=${minPrice}` : ''}&${maxPrice !== '' ? `price[lte]=${maxPrice}` : ''}&${category !== '' ? `category=${category}` : ''}&${title ? `title=${title}` : ''}`,
                include:{withCredentials:true}
            })
            return res?.data
        }
    })

    const Loading = () => {
        if(isLoading){
            return(
                <Spinner />
            )
        }
    }




  return (
    
    <>


    <Container>
        <Sidings />
            <Wrapper>
                {openFilter
                ?
                <>
                <Filter 
                    minimumPrice={minPriceFunction} 
                    maximumPrice={maxPriceFunction}
                    setOpenFilter={setOpenFilter} 
                    category={categoryFunction}
                    style={{marginLeft:'0',left:0}} />
                <FilterTabletBackgroundCloser onClick={e => setOpenFilter(false)} />
                </>
                :
                <>
                <Filter setOpenFilter={setOpenFilter} style={{marginLeft:'-300px',left:'-100%'}} />
                </>
                }
                <Body>
                    <TopContainer>
                    <TopWrapper>
                        {!openFilter ? <OpenFilterContainer onClick={e => setOpenFilter(true)} as={motion.div} animate={{opacity:1}} initial={{opacity:0}} transition={{delay:.3,duration:.2}}>
                            <OpenFilterText>Open Filter</OpenFilterText>
                            <OpenImg src={openIcon} />
                        </OpenFilterContainer>:
                        <FreeDiv />
                        }
                        
                        <TotalSearchContainer>
                            <TotalSearch>{data?.length} Result</TotalSearch>
                        </TotalSearchContainer>
                        
                    </TopWrapper>
                    <Hr />
                    </TopContainer>

                    <CardsWrapper>
                        <Loading />
                        {data?.map((dat,i) => {
                            return(
                                <Link key={i} to={`/course?id=${dat._id}`} style={{textDecoration:'none',color:'black'}}>
                                    <CardSearch dat={dat} />
                                </Link>
                            )
                        })}


                        
                    </CardsWrapper>
                </Body>
            </Wrapper>
        <Sidings />
    </Container>

    </>

  )
}

export default Search