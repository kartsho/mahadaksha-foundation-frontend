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
import {motion} from 'framer-motion';
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
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="text-center">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
      What we do best
    </h1>

    <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/60 max-w-2xl mx-auto">
      Comprehensive IT services designed to help businesses grow and
      professionals thrive.
    </p>
  </div>

 <div className="mt-12 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-6 justify-items-center">
    {cardDes.map((item) => (
      <BestCard
        key={item.id}
        logo={item.logo}
        title={item.title}
        description={item.description}
      />
    ))}
  </div>
</div>
  )
}

export default WhatWeDoBest




export function BestCard({ logo, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group flex justify-center"
    >
      <div
        className="
          w-full
          max-w-[300px]
          sm:max-w-[320px]
          lg:max-w-[340px]
          rounded-2xl
          border border-white/10
          bg-gradient-to-br from-[#141322] to-[#0F172A]
          p-5
          transition-all duration-300
          hover:-translate-y-2
          hover:border-purple-500/40
          hover:shadow-[0_15px_40px_rgba(124,77,245,.20)]
        "
      >
        {/* Icon */}
        <div
          className="
            w-12 h-12
            rounded-xl
            bg-purple-600/10
            border border-purple-500/20
            flex items-center justify-center
            text-2xl
            text-purple-500
            mb-4
            group-hover:scale-105
            transition
          "
        >
          {logo}
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 line-clamp-1">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-6 line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}