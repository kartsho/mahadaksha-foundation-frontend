import React from 'react'
import Hero from './Hero'
import JobTypeTabs from './JobTypeTabs'
import TeamSection from './TeamSection'

function Carrer() {
  return (
    <div>
        <section className='relative bg-[#0A0914] '>
          <Hero/>
        </section>
        <section className='relative bg-[#0A0914]'>
          <JobTypeTabs/>
        </section>
        <section className='relative bg-[#0A0914]'>
          <TeamSection/>
        </section>
    </div>
  )
}

export default Carrer