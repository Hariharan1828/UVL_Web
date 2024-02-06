"use client"

import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'
import Video from 'next-video';
import getStarted from '/videos/videoo.mp4';


const Banner = () => {
  return (
    <div className="flex items-center w-full lg:h-auto">
            <AspectRatio
                ratio={16/9}
                className='flex items-center justify-center'
            >

                <Video src={getStarted}  autoPlay loop muted controls={false} className="w-full h-[] object-cover" />
                    

            
            </AspectRatio>
            

        </div>
  )
}

export default Banner