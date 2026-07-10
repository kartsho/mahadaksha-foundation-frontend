import React from 'react'
import Hero from './Hero'
import InputField from './InputField'

function Contact() {
  return (
<div className='bg-black w-full '>
      <section className='bg-black'>
        <Hero/>
      </section>
       <section className='bg-black'>
        <InputField/>
      </section>
</div>
  )
}

export default Contact  