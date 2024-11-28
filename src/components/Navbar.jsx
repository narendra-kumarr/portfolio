import React from 'react'
import pic from "../../public/image.png"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5"; 
import { useState } from 'react';
import { Link } from 'react-scroll';

function navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const Navitem= [
        {
        id:1,
        text: 'Home'
        },
        {
         id:2,
         text: 'About'
         },
         {
            id:3,
            text: 'Contact'
            },
         {
         id:4,
          text: 'Portfolio'
         },
         
    ]
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md md-h-80 fixed top-0 left-0 right-0 bg-white">
        <div className='flex justify-between items-center h-16 '>
            {/* logo and text start */}
            <div className='flex space-x-2 '>
                <img src={pic} alt="" className='w-12 h-12 rounded-full'/>
                <h1 className='font-semibold text-xl cursor-pointer'>
                    Narendr<span className='text-green-500 text-2xl'>a</span>
                <p className='text-sm'>
                    Web Developer</p>
                </h1>
                
            </div>
             {/* logo and text end */}


            {/* Desktop menu start*/}
            <div > 
                <ul className='hidden md:flex space-x-8'>
                  {Navitem.map(({id,text})=>(
                    <li className='hover:scale-105 duration-200 cursor-pointer ' key={id}
                    >
                      <Link to={text}
                      spy={true} 
                      smooth={true} 
                      duration={500}
                      offset={50} 
                      activeClass="active" 
                      >
                      {text}
                      </Link>
                      </li>
                  )

                ) }
                </ul>
              <div className='md:hidden' onClick={()=>setShowMenu(!showMenu)}>{showMenu?< IoCloseSharp size={25} />:<AiOutlineMenu size={25}/>}</div>
            </div>
        </div>
         {/* Desktop menu end*/}

        {/* mobile menu start*/}
        {

        
        showMenu && (
            <div>
        <ul className='md:hidden flex flex-col h-60  items-center justify-center space-y-4'>
        {Navitem.map(({id,text})=>(
                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                      <Link 
                      onClick={()=>setShowMenu(!showMenu)}
                      to={text}
                      spy={true} 
                      smooth={true} 
                      duration={500}
                      offset={50} 
                      activeClass="active" 
                      >
                      {text}
                      </Link>
                      </li>
                  )

                ) }
                   
                </ul>
              
        </div>
        )
    }
        
        
        {/* mobile menu End */}

    </div>
  )
}

export default navbar