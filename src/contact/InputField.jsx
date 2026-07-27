import React, { useState } from 'react'
import {
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter,
} from "react-icons/fa6";



import {
    Mail,
    Phone,
    MapPin,
    Building2,
    Send,
} from "lucide-react";







function InputField() {
    return (
        <div>
            <ContactSection />
        </div>
    )
}

export default InputField






export function ContactSection() {

    const [details,setDetails] = useState([{
        name : "",
        email : "",
        CompanyName : "",
        phoneNumber : "",
        ServiceInterest : "",
        message : "",
    }])


    const handleChange = (e) =>{
        setDetails((prev) =>({
            ...prev , 
            [e.target.name] : [e.target.value]
        }))
    }
    console.log(details)

    const handleSubmit = (e) => {
    e.preventDefault();

    console.log(details);

   
    };

    return (
        <section className="relative  overflow-hidden m-auto items-center justify-center   pt-2 rounded-2xl  ">
        <form onSubmit={handleSubmit}>


            <div className="relative z-10 max-w-5xl mx-auto px-6 grid lg:grid-cols-[1.7fr_1fr] gap-18 mb-30 ">

               
                <div>

                    <div className="grid md:grid-cols-2 gap-2">

                        <div className="md:col-span-2">
                            <label className="text-white text-xs font-thin mb-2 block">
                                Full Name *
                            </label>

                            <input
                                type="text"
                                name='name'
                                value={details.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full h-10 rounded-xl bg-[#130d24] border border-[#2b2143] px-3 text-white placeholder-gray-500 outline-none focus:border-violet-500"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="text-gray-300 text-xs mb-2 block">
                                Email Address *
                            </label>

                            <input
                                type="email"
                                type='email'
                                name='email'
                                value={details.email}
                                onChange={handleChange}
                                placeholder="john@email.com"
                                className="w-full h-10 rounded-xl bg-[#130d24] border border-[#2b2143] px-3 text-white placeholder-gray-500 outline-none focus:border-violet-500"
                            />
                        </div>

                        <div>
                            <label className="text-gray-300 text-xs mb-2 block">
                                Company Name
                            </label>

                            <input
                                placeholder="Your Company"
                                type='text'
                                name='CompanyName'
                                value={details.CompanyName}
                                onChange={handleChange}
                                className="w-full h-10 rounded-xl bg-[#130d24] border border-[#2b2143] px-3 text-white placeholder-gray-500 outline-none focus:border-violet-500"
                            />
                        </div>

                        <div>
                            <label className="text-gray-300 text-xs mb-2 block">
                                Phone Number
                            </label>

                            <input
                                placeholder="+91 9876543210"
                                type='number'
                                name='phoneNumber'
                                value={details.phoneNumber}
                                onChange={handleChange}
                                className="w-full h-10 rounded-xl bg-[#130d24] border border-[#2b2143] px-3 text-white placeholder-gray-500 outline-none focus:border-violet-500"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="text-gray-300 text-xs mb-2 block">
                                Service Interest *
                            </label>

                            <select className="w-full h-10 rounded-xl bg-[#130d24] border border-[#2b2143] px-3 text-gray-400 outline-none focus:border-violet-500"   
                                name='ServiceInterest'
                                value={details.ServiceInterest}
                                onChange={handleChange}
                            >
                                <option value='' >Select a service</option>
                                <option value='Web Development' >Web Development</option>
                                <option value='Mobile App' >Mobile App</option>
                                <option value='UI/UX Design' >UI/UX Design</option>
                                <option value='Digital Marketing' > Marketing</option>
                                <option value='Human resources' > Human resources</option>
                                <option value='Artificial Intelligence and Machine Learning' >Artificial Intelligence and Machine Learning</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="text-gray-300 text-xs mb-2 block">
                                Message *
                            </label>

                            <textarea
                                rows={3}
                                type='text'
                                name='message'
                                value={details.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                className="w-full rounded-xl bg-[#130d24] border border-[#2b2143] p-5 text-white placeholder-gray-500 outline-none resize-none focus:border-violet-500"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <button className="w-full h-10 rounded-xl bg-gradient-to-r from-violet-700 via-fuchsia-600 to-violet-700 text-white font-semibold flex justify-center items-center gap-3 hover:scale-[1.02] duration-300" onClick={handleSubmit}>
                                Send Message
                                <Send size={18} />
                            </button>

                            <p className="text-center text-gray-500 mt-4 text-sm">
                                * Required fields. Your information is secure.
                            </p>
                        </div>
                        
                    </div>
                </div>

 {/* -------------------------Right Side------------------------- */}
                <div className="space-y-5 mt-6">

                    <InfoCard
                        icon={<Mail size={20} />}
                        title="EMAIL"
                        value={
                            <>
                                mahadakshaofficial@gmail.com
                            </>
                        }
                    />

                    <InfoCard
                        icon={<Phone size={20} />}
                        title="PHONE"
                        value="+91 XXXXXX8382"
                    />

                    <div className="space-y-4">

                        <InfoCard
                            icon={<MapPin size={20} />}
                            title="OFFICE"
                            value="Selaqui, Dehradun, 208011 "
                        />

                        <iframe
                            title="map"
                            className="rounded-xl w-full h-52 border border-[#2b2143]"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221.6429553075027!2d77.88561091385688!3d30.346076294516976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1783670185989!5m2!1sen!2sin"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>

                    <InfoCard
                        icon={<Building2 size={20} />}
                        title="REGISTERED"
                        value="C/o-Padmalabha Gouda, Odisha - 761118"
                    />

                    <div>
                        <h4 className="text-gray-400 uppercase text-sm mb-4">
                            Follow Us
                        </h4>

                        <div className="flex gap-4">

                            <SocialIcon>
                                <FaLinkedinIn />
                            </SocialIcon>

                            <SocialIcon>
                                <FaYoutube />
                            </SocialIcon>

                            <SocialIcon>
                                <FaXTwitter />
                            </SocialIcon>

                        </div>
                    </div>
                </div>
                
            </div></form>
        </section>
    );
}

function InfoCard({ icon, title, value }) {
    return (
        <div className="flex gap-4 items-start">

            <div className="w-12 h-8 rounded-xl bg-[#170f2d] border border-[#32204f] flex justify-center items-center text-violet-400">
                {icon}
            </div>

            <div>
                <p className="text-xs uppercase tracking-widest  text-gray-500">
                    {title}
                </p>

                <p className="text-gray-200 text-xs mt-1 leading-5">
                    {value}
                </p>
            </div>
            
        </div>
    );
}

function SocialIcon({ children }) {
    return (
        <div className="w-11 h-8 rounded-xl border border-[#32204f] bg-[#170f2d] flex justify-center items-center text-gray-300 hover:bg-violet-600 hover:text-white duration-300 cursor-pointer">
            {children}
        </div>
    );
}