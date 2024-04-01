  import Image from 'next/image'
  import Link from 'next/link'
  import React from 'react'
  import Logos from "../public/Screenshot 2024-02-04 172524.png"
  import { AspectRatio } from './ui/aspect-ratio'
  const Logo = () => {
    return (
      
      <Link prefetch={false} href="/" className='overflow-hidden '>
          <div className="flex items-center w-36 h-auto">
              <AspectRatio
                  ratio={16/9}
                  className='flex items-center justify-center'
              >
                  <Image
              priority
              src={Logos}
              alt=''
              className='dark:filter dark:invert'  />

              
              </AspectRatio>
              

          </div>
      </Link>
    )
  }

  export default Logo