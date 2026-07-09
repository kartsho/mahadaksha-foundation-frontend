// import React from 'react'

// function About() {
//   return (
//     <div className='absolute inset-0 flex  items-center justify-center text-center h-2 w-2 m-30'>About</div>
//   )
// }

// export default About


// using the mock api for the about section and it will be changed after the real info is given
import React, { useEffect, useState } from 'react'
import { BsCheckLg, BsAward } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import productTeam from '../assets/productTeam.avif'
import Slider from '../logoSlider/Slider';

const API_URL = "https://6a4e15d1e785c9ef536c4116.mockapi.io/mahadakshaFoundation/About";

const stats = [
  { digit: '10,000+', title: 'Learners Trained', desc: 'Careers launched through our programs' },
  { digit: '500+', title: 'Projects Delivered', desc: 'Custom software shipped for clients' },
  { digit: '98%', title: 'Client Satisfaction', desc: 'Businesses and learners love working with us' },
  { digit: '50+', title: 'Global Markets', desc: 'Serving clients and communities worldwide' },
];

const values = [
  'End-to-end IT solutions from web apps to enterprise software',
  'Industry-expert trainers and mentors for career growth',
  'Scalable solutions that evolve with your business',
  'Dedicated project managers and ongoing support',
  'Proven track record across 50+ global markets',
];

function About() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error("Failed to load team data:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className='bg-[#0d0817]'>

      {/* ---------- Hero ---------- */}
      <div className='relative overflow-hidden'>
        <img
          src={productTeam}
          alt="Mahadaksha team"
          className='absolute inset-0 w-full h-full object-cover opacity-25'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#0d0817]/60 via-[#0d0817]/80 to-[#0d0817]' />

        <div className='relative z-10 flex flex-col items-center text-center px-4 pt-28 pb-20'>
          <span className='bg-[#201446] text-[#B79CFF] px-4 py-1 rounded-full text-sm font-semibold mb-6'>
            About Mahadaksha
          </span>
          <h1 className='text-5xl md:text-6xl font-extrabold text-white max-w-4xl leading-tight'>
            Building Software and Careers, <span className='text-[#7C4DF5]'>Together</span>
          </h1>
          <p className='mt-6 text-lg md:text-xl text-[#A09EAB] max-w-2xl'>
            Mahadaksha Foundation helps businesses launch faster and learners grow faster —
            combining custom software development with industry-ready training, under one roof.
          </p>

          <div className='flex flex-wrap gap-3 justify-center mt-8'>
            {['Custom Software Development', 'Career-Ready Training', 'End-to-End Support'].map((tag) => (
              <span key={tag} className='border border-[#2A2540] text-gray-300 px-4 py-2 rounded-full text-sm'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Stats ---------- */}
      <div className='px-4 pb-20'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto'>
          {stats.map((s) => (
            <div
              key={s.title}
              className='card bg-[#1D232A] shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg'
            >
              <div className='card-body flex flex-col items-center justify-center text-center py-8'>
                <h1 className='text-3xl text-[#7C4DF5] font-extrabold'>{s.digit}</h1>
                <h3 className='text-white font-bold mt-1'>{s.title}</h3>
                <p className='mt-2 text-[#A09EAB] text-sm'>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Mission / Why Us ---------- */}
      <div className='ml-4 mr-4 md:ml-30 md:mr-30 bg-[#13111F] p-1 rounded-2xl'>
        <div className='relative m-8 md:m-20 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20'>
          <div className='flex-1 w-full'>
            <h2 className='text-3xl text-white font-extrabold'>
              Why businesses and learners choose Mahadaksha
            </h2>
            <div className='flex flex-col gap-3 font-semibold text-gray-400 mt-4'>
              <p className='font-bold'>
                From custom software to professional training — everything you need to grow
                your business and career under one roof.
              </p>
              {values.map((v) => (
                <p key={v} className='flex flex-row items-center gap-2'>
                  <span className='bg-[#201446] p-[2px] rounded-full'><BsCheckLg /></span>
                  {v}
                </p>
              ))}
            </div>
          </div>

          <div className='flex-1 w-full'>
            <div className='bg-[#1A1630] p-8 rounded-2xl'>
              <h3 className='text-white font-extrabold text-xl mb-2'>Our Mission</h3>
              <p className='text-[#A09EAB]'>
                To empower startups, SMBs, and enterprises with high-impact digital products,
                while equipping the next generation of tech talent with real, job-ready skills.
              </p>
              <h3 className='text-white font-extrabold text-xl mt-6 mb-2'>Our Vision</h3>
              <p className='text-[#A09EAB]'>
                A future where every business can build with confidence, and every learner has
                a clear path from classroom to career.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Core Team ---------- */}
      <div className='px-4 py-24'>
        <h2 className='text-center text-3xl md:text-4xl font-extrabold text-white'>Core Team</h2>
        <p className='text-center text-[#A09EAB] mt-3 max-w-xl mx-auto'>
          The people driving strategy, engineering, and training excellence at Mahadaksha.
        </p>

        {loading ? (
          <p className='text-center text-gray-500 mt-12'>Loading team...</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14'>
            {team.map((member) => (
              <div
                key={member.id}
                className='bg-[#1D232A] rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg'
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-white font-bold text-lg'>{member.name}</h3>
                  <p className='text-[#7C4DF5] font-semibold text-sm mt-1'>{member.role}</p>
                  <p className='text-[#A09EAB] mt-3 text-sm'>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ---------- Certifications ---------- */}
      <div className='px-4 py-20 text-center'>
        <BsAward className='text-[#7C4DF5] text-4xl mx-auto mb-4' />
        <h2 className='text-3xl md:text-4xl font-extrabold text-white'>Certifications & Compliance</h2>
        <p className='text-[#A09EAB] mt-4 max-w-2xl mx-auto'>
          Our credentials are not just logos. They represent audited quality systems, legal
          identity, and compliance-backed execution standards.
        </p>
        <div className='flex flex-wrap gap-4 justify-center mt-8'>
          {['ISO Certified', 'MSME Registered', 'MCA Registered'].map((c) => (
            <span key={c} className='border border-[#2A2540] text-gray-300 px-5 py-2 rounded-full text-sm'>
              {c}
            </span>
          ))}
        </div>
      </div>




      {/* slider */}
          <section >
              <Slider/>
          </section>









      {/* ---------- CTA ---------- */}
      <div className='px-4 pb-24 mt-30  '>
        <div className='bg-[#13111F] rounded-2xl max-w-4xl mx-auto text-center py-16 px-6'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-white'>
            Have a Product Idea? Let's Build It Right.
          </h2>
          <p className='text-[#A09EAB] mt-4 max-w-xl mx-auto'>
            Share your goals, timeline, and requirements. Our team will respond with a
            practical roadmap to design, build, and scale your product.
          </p>
          <button className='btn btn-primary mt-8 bg-[#7C4DF5] border-none hover:bg-[#6a3ce0]'>
            Submit Your Requirements <FaArrowRight />
          </button>
        </div>
      </div>

    </div>
  )
}

export default About
