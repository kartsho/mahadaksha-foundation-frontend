import React from 'react'
import { IoMdCode } from "react-icons/io";
import { AiOutlineTeam } from "react-icons/ai";
import { CiCloud } from "react-icons/ci";
import { IoIosColorPalette } from "react-icons/io";
import { IoBarChartOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function WhatWeDoBest() {
    const cardDes = [               
        {
            id : 1,
            logo : <IoMdCode/>,
            title : 'Custom Software Development',
            description :'Tailored web and mobile applications built with modern frameworks to solve your unique business challenges.' , 
        },


        {
            id : 2,
            logo :<AiOutlineTeam/> ,
            title : 'Team Collaboration & Support',
            description : 'Cross-functional teamwork with dedicated support to align strategy, execution, and long-term product success.', 
        },



        {
            id : 3,
            logo :<CiCloud/> ,
            title :'Cloud & DevOps Solutions' ,
            description : 'Scalable cloud architecture, migration, and CI/CD pipelines on AWS, Azure, and Google Cloud.', 
        },



        {
            id : 4,
            logo : <IoIosColorPalette/>,
            title : 'UI/UX Design' ,
            description :'User-centered design that turns complex workflows into intuitive, beautiful digital experiences.' , 
        },

        {
            id : 5,
            logo : <IoBarChartOutline/>,
            title : 'Digital Marketing & SEO',
            description :'Data-driven marketing strategies to grow your online presence, traffic, and conversions.' , 
        },


        {
            id : 6,
            logo :<PiHeadphones/> ,
            title : 'IT Consulting & Support',
            description : 'Strategic technology consulting and ongoing support to keep your business running smoothly.', 
        }
    ]
  return (
  <div className=' bg-[#000000] h-full w-full '>
    <div className='flex items-center justify-items-center m-auto flex-col'>
        <h1 className='text-white text-5xl font-extrabold pt-10 mt-10'>
        What we do best
    </h1>
    <p className='text-white/60 pt-3  font-bold pb-10'>
        Comprehensive IT services designed to help businesses grow and professionals thrive.
    </p>
    </div>
      <div className='grid grid-cols-3 gap-4  '>
        {
            cardDes.map((cardDes)=>(
                <div key={cardDes.id} className='hover-3d hover:ease-in-out ' >
                    <BestCard id={cardDes.id} logo={cardDes.logo} title={cardDes.title} description={cardDes.description} />
                </div>
            ))
        }
    </div>
  </div>
  )
}

export default WhatWeDoBest




export function BestCard({
  logo,
  title,
  description,
}) {
  return (
    <div className="m-5 bg-[#13111F] ml-20 mr-20 font-bold  " >
      <div className='bg-[#13111F] '>
        <Card sx={{ maxWidth: 535 }}  className='bg-[#13111F] rounded-3xl '>
        <CardActionArea className='bg-[#13111F]'>
{/* className='bg-[#13111F]' */}
          <div className="text-2xl text-purple-600 flex justify-start p-1  bg-[#13111F]">
            {logo}
          </div>

          <CardContent className='bg-[#13111F]'>
            <Typography gutterBottom variant="h10" className='text-white '>
              {title}
            </Typography>

            <Typography variant="body2" className='text-white '>
              {description}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    </div>
  );
}