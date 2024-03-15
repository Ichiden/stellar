import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useBeforeUnload } from "react-router-dom";





const price = 14340;

// Format the price above to PHP using the locale, style, and currency.
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
});


const Container = styled.div`
  width:60px;
  background-color: green;
`

const Rec = styled.div`
  width:60px;
  height:20px;
  background-color: blue;
`

const Arrow = styled.div`
  width: 0; 
  height: 0; 
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  
  border-top: 10px solid blue;
`

const Div = styled.div`
  margin-left: 100px;
  margin-top: 100px;
`



const Sample = () => {


  useEffect(() => {
    const interval = setInterval(() => {
      console.log('samsan')
    },3000)

    return () => clearInterval(interval)
  },[])


  return (
    <>

      


          

    </>
  )
}

export default Sample
