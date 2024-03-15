import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import styled from 'styled-components';


function CloudinaryImg({imageUrl,width,height}) {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'diblak4eh'
    }
  });

  const myImage = cld.image(`${imageUrl}`);

  myImage
  .resize(thumbnail().width(width).height(height))
  return (
    <AdvancedImage style={{borderRadius:'16px',width:'100%',height:'100%',objectFit:'cover'}} cldImg={myImage} /> 
  )
}

export default CloudinaryImg
