import React, { useEffect, useState } from "react";
import { BsCheckLg, BsAward } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import productTeam from "../../assets/productTeam.avif";
import Slider from "../../logoSlider/Slider";
import { useNavigate } from "react-router-dom";



const API_URL =
  "http://localhost:4000/team";

const stats = [
  {
    digit: "10,000+",
    title: "Learners Trained",
    desc: "Careers launched through our programs",
  },
  {
    digit: "500+",
    title: "Projects Delivered",
    desc: "Custom software shipped for clients",
  },
  {
    digit: "98%",
    title: "Client Satisfaction",
    desc: "Businesses and learners love working with us",
  },
  {
    digit: "50+",
    title: "Global Markets",
    desc: "Serving clients worldwide",
  },
];

const values = [
  "End-to-end IT solutions from web apps to enterprise software",
  "Industry-expert trainers and mentors",
  "Scalable software solutions",
  "Dedicated project managers",
  "Trusted across 50+ global markets",
];

function About() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //     const fetchTeams = async () => {
  //       try {
  //         const res = await axios.get("http://localhost:4000/team");
  //         setTeam(res.data);
  //         console.log(res);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchTeams();
  //   }, [])


  return (
    <div className="bg-gradient-to-b from-[#0d0817] via-[#141022] to-[#0d0817]">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        <img
          src={productTeam}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">

          <span className="bg-[#24164b] text-[#B79CFF] px-5 py-2 rounded-full text-sm font-semibold">
            About Mahadaksha
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-8 leading-tight max-w-5xl">
            Building Software and Careers
            <span className="text-[#7C4DF5]"> Together</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mt-6 text-base md:text-lg leading-8">
            Mahadaksha Foundation helps businesses launch faster while
            empowering students with real-world industry skills through
            innovative software solutions and professional training.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">

            {[
              "Software Development",
              "Career Training",
              "Digital Solutions",
            ].map((item) => (
              <span
                key={item}
                className="border border-[#37304f] px-5 py-2 rounded-full text-sm text-gray-300"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 py-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((item) => (

            <div
              key={item.title}
              className="bg-[#1b1b29] rounded-2xl p-6 text-center border border-transparent hover:border-[#7C4DF5] transition duration-300 hover:-translate-y-2"
            >

              <h2 className="text-3xl font-bold text-[#7C4DF5]">
                {item.digit}
              </h2>

              <h3 className="text-white font-semibold mt-3 text-lg">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= WHY US ================= */}

      <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 bg-[#161324] rounded-3xl">

        <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16">

          <div>

            <h2 className="text-3xl md:text-4xl text-white font-bold">

              Why Choose Mahadaksha?

            </h2>

            <p className="text-gray-400 mt-5 leading-8">

              We combine innovation, education, and technology to help
              organizations grow while preparing learners for successful
              careers.

            </p>

            <div className="space-y-5 mt-8">

              {values.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4"
                >

                  <div className="bg-[#2d1b58] p-2 rounded-full text-white">

                    <BsCheckLg size={14} />

                  </div>

                  <p className="text-gray-300">

                    {item}

                  </p>

                </div>

              ))}

            </div>

          </div>

          <div>

            <div className="bg-[#211a38] rounded-2xl p-8 h-full">

              <h3 className="text-2xl font-bold text-white">

                Our Mission

              </h3>

              <p className="text-gray-400 mt-4 leading-8">

                Empower startups, enterprises and learners through
                innovative technology solutions and practical
                industry-focused education.

              </p>

              <h3 className="text-2xl font-bold text-white mt-10">

                Our Vision

              </h3>

              <p className="text-gray-400 mt-4 leading-8">

                To become a globally recognized organization where
                technology and education create opportunities for
                everyone.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= TEAM ================= */}

      <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 py-24">

        <h2 className="text-4xl font-bold text-white text-center">

          Meet Our Core Team

        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">

          Passionate professionals dedicated to delivering exceptional
          software and empowering future innovators.

        </p>

        {loading ? (

          <div className="flex justify-center py-20">

            <span className="loading loading-spinner loading-lg text-[#7C4DF5]"></span>

          </div>

        ) : (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {team.map((member) => (

              <div
                key={member.id}
                className="bg-[#1b1b29] rounded-2xl overflow-hidden border border-transparent hover:border-[#7C4DF5] transition duration-300 hover:-translate-y-2"
              >

                <div className="overflow-hidden">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover hover:scale-110 duration-500"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-white text-xl font-bold">

                    {member.name}

                  </h3>

                  <p className="text-[#7C4DF5] font-medium mt-1">

                    {member.role}

                  </p>

                  <p className="text-gray-400 mt-4 text-sm leading-7">

                    {member.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>
      {/* ================= CERTIFICATIONS ================= */}

      <section className="mx-2 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 py-10">

        <div className='px-4 text-center'>
           <BsAward className='text-[#7C4DF5] text-4xl mx-auto mb-4' /> 
           <h2 className='text-3xl md:text-4xl font-extrabold text-white'>Certifications & Compliance</h2>
            <p className='text-[#A09EAB] mt-4 max-w-2xl mx-auto'> Our credentials are not just logos. They represent audited quality systems, legal identity, and compliance-backed execution standards.
               </p> 
               <div className='flex flex-wrap gap-4 justify-center mt-8'>
                 {['ISO Certified', 'MSME Registered', 'MCA Registered'].map((c) => (<span key={c} className='border border-[#2A2540] text-gray-300 px-5 py-2 rounded-full text-sm'> {c} </span>))} 
               </div> 
               </div>

      </section>

      {/* ================= LOGO SLIDER ================= */}

      <section className="py-12">

        <Slider />

      </section>

      {/* ================= CTA ================= */}

      <div className='px-4 pb-20 mt-30 '>
        <div className='bg-[#13111F] rounded-2xl max-w-4xl mx-auto text-center py-16 px-6'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-white'> Have a Product Idea? Let's Build It Right. </h2>
          <p className='text-[#A09EAB] mt-4 max-w-xl mx-auto'> Share your goals, timeline, and requirements. Our team will respond with a practical roadmap to design, build, and scale your product. </p>
          <button className='btn btn-primary mt-8 bg-[#7C4DF5] border-none hover:bg-[#6a3ce0]'
            onClick={() => navigate("/contact")}
          > Submit Your Requirements <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;