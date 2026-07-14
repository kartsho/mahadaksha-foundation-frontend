import React, { useState } from 'react'
import { CiCalendar } from "react-icons/ci";
import EventDetailed from './EventDetailed';
function Event() {
 const data = 
  {
    Workshop:[ {
      title: 'Product Engineering Leadership Workshop',
      titleImage : 'https://media.istockphoto.com/id/1956818527/photo/crowd-of-business-people-having-a-seminar-in-board-room.jpg?s=612x612&w=0&k=20&c=bazpLXOSPCPSy_3Gtvq4Sq-SygVi11KqhHmLgCdSAAg=',
      description : 'A focused workshop for founders, product managers, and engineering leads to align vision, roadmap, and implementation quality. Learn practical systems for shipping high-performance digital products with fewer bottlenecks. Facilitated by senior practitioners who have scaled products from 0 to 1 million users, this workshop combines theory with live exercises on real-world product scenarios.',
      Date : 'May 08, 2026',
      Time : '10:00 AM – 5:30 PM IST',
      Venue : 'The Grand Arc Convention Hal',
      NoRegi : 438,
      Agenda1 : '10:00 AM – Keynote: Turning Product Vision into Systems',
      Agenda2 : '11:30 AM – Building scalable architecture from day one',
      Agenda3 : '02:00 PM – Team collaboration and delivery rituals',
      Agenda4 : '04:00 PM – Open clinic and Q&A with product advisors',
      Location : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d512535.1781478856!2d77.29231040230371!3d12.987769307571995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1783703798398!5m2!1sen!2sin",
      image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'

    },
    ],
    Hackathons:[ {
        title: 'Open Build Hackathon: Future of SaaS',
        titleImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBwtoX0I3tDNRapDE_4BFQtXKsQWgrQ2ZwCk2Vv8TkC6hTeY-AgYBEto&s=10',
        description: 'Build real prototypes with mentors from engineering, design, and growth. Teams pitch product-first solutions, with judging based on usability, architecture, and business impact. Prize pool of ₹15 lakhs across five categories including Best UX, Most Scalable Architecture, and Market-Ready MVP. Sponsors include top SaaS companies actively scouting for talent and acquisition targets.',
        Date: 'May 21–22, 2026',
        Time: '09:00 AM Day 1 – 06:00 PM Day 2 IST',
        Venue: 'CodeForge Arena Hyderabad, India',
        NoRegi: 902,
        Agenda1: '09:00 AM Day 1 – Problem statements and team kickoff',
        Agenda2: '12:00 PM Day 1 – Mentor rounds and architecture checks',
        Agenda3: '08:00 PM Day 1 – Midnight sprint checkpoint',
        Agenda4: '03:00 PM Day 2 – Product demos and final judging',
        Location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501888.7026263036!2d78.07838586924265!3d17.412077907948387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e1!3m2!1sen!2sin!4v1783704412949!5m2!1sen!2sin",
        image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'

      },
       {
        title: 'DevOps Resilience Hackathon',
        titleImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBwtoX0I3tDNRapDE_4BFQtXKsQWgrQ2ZwCk2Vv8TkC6hTeY-AgYBEto&s=10',
        description: 'A high-intensity hackathon for SRE, platform, and DevOps teams. Tracks include error-budget dashboards, deployment risk scoring, Kubernetes failover drills, and AI-assisted incident triage bots. Engineering mentors from cloud-native startups guide teams through architecture and production-readiness reviews.',
        Date: 'December 12–13, 2026',
        Time: '09:00 AM Day 1 – 06:00 PM Day 2 IST',
        Venue: 'Kochi Tech Port & Virtual Kochi, India',
        NoRegi: 1164,
        Agenda1: '09:00 AM Day 1 – Kickoff and problem track allocation',
        Agenda2: '11:00 AM Day 1 – Reliability design clinic',
        Agenda3: '08:00 PM Day 1 – Night sprint checkpoint',
        Agenda4: '01:00 PM Day 2 – Final demos and scoring',
        Location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d259010.78451187903!2d76.13730739775555!3d9.986500065414937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e1!3m2!1sen!2sin!4v1783739390960!5m2!1sen!2sin",
        image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'

      },
       {
        title: 'Open Build Hackathon: Future of SaaS',
        titleImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBwtoX0I3tDNRapDE_4BFQtXKsQWgrQ2ZwCk2Vv8TkC6hTeY-AgYBEto&s=10',
        description: 'Build real prototypes with mentors from engineering, design, and growth. Teams pitch product-first solutions, with judging based on usability, architecture, and business impact. Prize pool of ₹15 lakhs across five categories including Best UX, Most Scalable Architecture, and Market-Ready MVP. Sponsors include top SaaS companies actively scouting for talent and acquisition targets.',
        Date: 'May 21–22, 2026',
        Time: '09:00 AM Day 1 – 06:00 PM Day 2 IST',
        Venue: 'CodeForge Arena Hyderabad, India',
        NoRegi: 902,
        Agenda1: '09:00 AM Day 1 – Problem statements and team kickoff',
        Agenda2: '12:00 PM Day 1 – Mentor rounds and architecture checks',
        Agenda3: '08:00 PM Day 1 – Midnight sprint checkpoint',
        Agenda4: '03:00 PM Day 2 – Product demos and final judging',
        Location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501888.7026263036!2d78.07838586924265!3d17.412077907948387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e1!3m2!1sen!2sin!4v1783704412949!5m2!1sen!2sin" ,
        image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'

      },
       {
        title: 'FinTech Builders Hackathon',
        titleImage : 'https://media.licdn.com/dms/image/v2/D4E12AQFxo6lHckp2Wg/article-cover_image-shrink_720_1280/B4EZ1Ll7QKG0AI-/0/1775089726971?e=2147483647&v=beta&t=n_zTMLJ0bAwxm7vOo7NLFnckA-E0VYvLuKV1JHKTjw8',
        description: `Hosted at the iconic BSE, this hackathon challenged builders to reimagine financial infrastructure for India's next 300 million users. Problem tracks included UPI 2.0 innovations, BNPL risk modelling, cross-border remittance, and SEBI-compliant wealth advisory tools. Judged by executives from NPCI, RBI Innovation Hub, and leading fintech VCs. Total prize pool of ₹20 lakhs.`,
        Date: 'May 17–18, 2025',
        Time: '09:00 AM Day 1 – 06:00 PM Day 2 IST',
        Venue: 'CodeForge Arena Hyderabad, India',
        NoRegi: 902,
        Agenda1: '09:00 AM Day 1 – Problem statements and team kickoff',
        Agenda2: '12:00 PM Day 1 – Mentor rounds and architecture checks',
        Agenda3: '08:00 PM Day 1 – Midnight sprint checkpoint',
        Agenda4: '03:00 PM Day 2 – Product demos and final judging',
        Location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501888.7026263036!2d78.07838586924265!3d17.412077907948387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e1!3m2!1sen!2sin!4v1783704412949!5m2!1sen!2sin" ,
        image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'

      },

    ],
       LiveRecognitions : [ {
        title: 'Startup Ecosystem Recognition Gala 2025',
        titleImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhNgZXgPmwU1FmRfmdxHG9ddkkxeFhlEQ3eRHz8dMdBoRDwz5pNQvk3ws&s=10',
        description: 'The annual Startup Ecosystem Recognition Gala honours the people and organisations that defined India`s startup year. Categories span Early Stage Startup of the Year, Most Impactful Impact Startup, Angel Investor of the Year, Accelerator of the Year, and Community Builder of the Year. The 2025 edition was the largest yet, with 900 attendees representing startups from 28 states.',
        Date: 'February 14, 2025',
        Time: '07:00 PM – 11:00 PM IST',
        Venue: 'JW Marriott Aerocity Grand Ballroom New Delhi, India',
        NoRegi: 2670,
        Agenda1: '07:00 PM – Pre-show cocktails and networking',
        Agenda2: '08:00 PM – Opening address from Chief Guest',
        Agenda3: '08:30 PM – Award presentations across 10 categories',
        Agenda4: '10:00 PM – Keynote: India`s decade of startup leadership',
        Location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5059484336084!2d77.11877507549788!3d28.553184975708184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c69140ab7a9%3A0x22f2522c2e0e742f!2sJW%20Marriott%20Hotel%20New%20Delhi%20Aerocity!5e1!3m2!1sen!2sin!4v1783706535623!5m2!1sen!2sin" ,
        image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'
      },
      
      {
        title: 'Engineering Excellence Awards 2025',
        titleImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9z7TnwlIT4mXgPP9Iz76L8Yv3ZkHuDON_HC_Dz8nAhvObIfBBkzp2xNt&s=10',
        description: `The Engineering Excellence Awards recognise the builders behind the products — the engineers, architects, and platform teams that power India's fastest-growing technology companies. Categories include Best Engineering Culture, Most Impactful Open Source Contribution, Engineering Leader of the Year, and Platform Infrastructure Innovation.`,
        Date: 'August 02, 2026',
        Time: '07:00 PM – 10:30 PM IST',
        Venue: 'ITC Windsor Grand Ballroom Bangalore, India',
        NoRegi: 986,
        Agenda1: '07:00 PM – Cocktails and tech demo floor',
        Agenda2: '07:45 PM – Opening remarks and industry state of the union',
        Agenda3: '08:15 PM – Award presentations: Six categories',
        Agenda4: '10:00 PM – After-party and networking',
        Location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4004.0788556094953!2d77.58341762507688!3d12.9941096873233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1640b976be87%3A0x7ab29f2e655f7f7d!2sITC%20WINDSOR%2C%20Abshot%20Layout%2C%20Vasanth%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001!5e1!3m2!1sen!2sin!4v1783737667370!5m2!1sen!2sin",
        image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'
      },
       {
        title: 'Digital Innovation Recognition Night',
        titleImage : 'https://rhinosdjs.ca/wp-content/uploads/2025/06/Future-Nightclub-Entertainment-Trends.jpg',
        description: 'This recognition night spotlighted the teams and leaders behind measurable digital outcomes in product, engineering, and operations. Awards were judged on implementation quality, customer impact, and long-term sustainability. The evening featured five spotlight stories with practical lessons from winning teams.',
        Date: 'November 09, 2026',
        Time: '07:00 PM – 10:30 PM IST',
        Venue: 'TC Maurya Convention Hall New Delhi, India',
        NoRegi: 1543,
        Agenda1: '07:00 PM – Red carpet and networking',
        Agenda2: '07:45 PM – Opening keynote and jury address',
        Agenda3: '08:30 PM – Award presentations and winner stories',
        Agenda4: '09:45 PM – Community dinner and media interactions',
        Location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.987344739022!2d77.17027887549956!3d28.597452575683974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d403e2dc097%3A0x51edde23b436f8b2!2sITC%20Maurya%2C%20Akhaura%20Block%2C%20Bapu%20dham%2C%20Chanakyapuri%2C%20New%20Delhi%2C%20Delhi%20110021!5e1!3m2!1sen!2sin!4v1783738347282!5m2!1sen!2sin" ,
        image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'
      },
      
      {
        title: 'Engineering Excellence Awards 2025',
        titleImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9z7TnwlIT4mXgPP9Iz76L8Yv3ZkHuDON_HC_Dz8nAhvObIfBBkzp2xNt&s=10',
        description: `The Engineering Excellence Awards recognise the builders behind the products — the engineers, architects, and platform teams that power India's fastest-growing technology companies. Categories include Best Engineering Culture, Most Impactful Open Source Contribution, Engineering Leader of the Year, and Platform Infrastructure Innovation.`,
        Date: 'August 02, 2026',
        Time: '07:00 PM – 10:30 PM IST',
        Venue: 'ITC Windsor Grand Ballroom Bangalore, India',
        NoRegi: 986,
        Agenda1: '07:00 PM – Cocktails and tech demo floor',
        Agenda2: '07:45 PM – Opening remarks and industry state of the union',
        Agenda3: '08:15 PM – Award presentations: Six categories',
        Agenda4: '10:00 PM – After-party and networking',
        Location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4004.0788556094953!2d77.58341762507688!3d12.9941096873233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1640b976be87%3A0x7ab29f2e655f7f7d!2sITC%20WINDSOR%2C%20Abshot%20Layout%2C%20Vasanth%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001!5e1!3m2!1sen!2sin!4v1783737667370!5m2!1sen!2sin" ,
        image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'
      },
    ],
    CorporateTraining : [
      {
        title: 'Agile at Scale: Bootcamp for Engineering Managers',
        titleImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9z7TnwlIT4mXgPP9Iz76L8Yv3ZkHuDON_HC_Dz8nAhvObIfBBkzp2xNt&s=10',
        description: `Covering enterprise agile frameworks including SAFe 6.0, Spotify squad model adaptations, and OKR-driven planning cycles, this bootcamp is designed for engineering managers in organisations with 100+ person engineering functions. Certified SAFe trainers and Agile coaches facilitate all sessions.`,
        Date: 'July 21–23, 2025',
        Time: '08:30 AM – 05:30 PM IST',
        Venue: 'HITEX Exhibition Centre Training Block Hyderabad, India',
        NoRegi: 143,
        Agenda1: 'Day 1 – Agile foundations and SAFe 6.0 overview',
        Agenda2: 'Day 2 – PI Planning simulation: Full team exercise',
        Agenda3: 'Day 3 – OKRs, metrics, and retrospective design',
        Agenda4: 'Daily – Team coaching and implementation planning',
        Location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4004.0788556094953!2d77.58341762507688!3d12.9941096873233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1640b976be87%3A0x7ab29f2e655f7f7d!2sITC%20WINDSOR%2C%20Abshot%20Layout%2C%20Vasanth%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001!5e1!3m2!1sen!2sin!4v1783737667370!5m2!1sen!2sin",
        image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'
      },
      {
        title: 'Corporate Training Sprint: Product Teams',
        titleImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcc9kAzMWniwCYIXZvJbJbLxxUx2Eh82gH2c3RR1R1yo9vX3ihefr5z5X&s=10',
        description: `A structured training sprint for enterprise teams on modern product delivery. Covers user-centric design, technical decision-making, and team collaboration workflows. Post-event surveys reported a 41% average increase in team confidence around product decision-making frameworks.`,
        Date: 'July 21–23, 2027',
        Time: '08:30 AM – 05:30 PM IST',
        Venue: 'HITEX Exhibition Centre Training Block Hyderabad, India',
        NoRegi: 143,
        Agenda1: 'Day 1 – Agile foundations and SAFe 6.0 overview',
        Agenda2: 'Day 2 – PI Planning simulation: Full team exercise',
        Agenda3: 'Day 3 – OKRs, metrics, and retrospective design',
        Agenda4: 'Daily – Team coaching and implementation planning',
        Location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4004.0788556094953!2d77.58341762507688!3d12.9941096873233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1640b976be87%3A0x7ab29f2e655f7f7d!2sITC%20WINDSOR%2C%20Abshot%20Layout%2C%20Vasanth%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001!5e1!3m2!1sen!2sin!4v1783737667370!5m2!1sen!2sin" ,
        image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'
      },
    ],

    CommunityEvents : [
      {
        title: 'Founder Roundtable: East India Edition',
        titleImage : 'https://media.licdn.com/dms/image/v2/C5612AQFdINWhPZprXQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520219208427?e=2147483647&v=beta&t=OWPnDKS0yXhuJW4cmq-rtULKbKw9YNjQbW8BP-xzkhQ',
        description: `A curated founder-only roundtable bringing together entrepreneurs from West Bengal, Odisha, Jharkhand, and the Northeast. Structured discussions around fundraising in non-metro markets, building distributed teams, and regional go-to-market strategies. Hosted in partnership with Bengal Angel Network. Attendance is invite-only with application screening to maintain signal quality.`,
        Date: 'July 21–23, 2026',
        Time: '08:30 AM – 05:30 PM IST',
        Venue: 'HITEX Exhibition Centre Training Block Hyderabad, India',
        NoRegi: 143,
        Agenda1: 'Day 1 – Agile foundations and SAFe 6.0 overview',
        Agenda2: 'Day 2 – PI Planning simulation: Full team exercise',
        Agenda3: 'Day 3 – OKRs, metrics, and retrospective design',
        Agenda4: 'Daily – Team coaching and implementation planning',
        Location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4004.0788556094953!2d77.58341762507688!3d12.9941096873233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1640b976be87%3A0x7ab29f2e655f7f7d!2sITC%20WINDSOR%2C%20Abshot%20Layout%2C%20Vasanth%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001!5e1!3m2!1sen!2sin!4v1783737667370!5m2!1sen!2sin",
        image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'
      },
      {
        title: 'Women in Tech Leadership Summit',
        titleImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkTN5Bdk8nMemwXuoAmo8ugvivekpnKmzCDWDN3DEzSAxVnF6XF9TylOnR&s=10',
        description: `India's most attended summit for women in technology leadership. This year's edition featured 28 speakers across keynotes, panels, and workshops covering negotiation, technical career growth, entrepreneurship, and navigating bias in the workplace. The summit also launched the WiT Mentorship Network, pairing 200 early-career women with senior industry mentors for a six-month structured engagement.`,
        Date: 'July 21–23, 2026',
        Time: '08:30 AM – 05:30 PM IST',
        Venue: 'HITEX Exhibition Centre Training Block Hyderabad, India',
        NoRegi: 143,
        Agenda1: 'Day 1 – Agile foundations and SAFe 6.0 overview',
        Agenda2: 'Day 2 – PI Planning simulation: Full team exercise',
        Agenda3: 'Day 3 – OKRs, metrics, and retrospective design',
        Agenda4: 'Daily – Team coaching and implementation planning',
        Location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4004.0788556094953!2d77.58341762507688!3d12.9941096873233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1640b976be87%3A0x7ab29f2e655f7f7d!2sITC%20WINDSOR%2C%20Abshot%20Layout%2C%20Vasanth%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001!5e1!3m2!1sen!2sin!4v1783737667370!5m2!1sen!2sin",
        image1 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum8De38pxBcKEkmBC4FJ0YGnIBc3pQT4WWiQjGtOWFXbB_En4nN-ipUQ&s=10',
        image2 : 'https://media.wired.com/photos/5aac56eb491c2d69af42197d/3:2/w_2560%2Cc_limit/Hackathons-RTS12CJ0.jpg',
        image3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbKIRIFU_SLzgFq8cJYmLeuB-0YeSiY8-XGnDOPCH-YxYsPPNtTe93pE&s=10'
      },
    ]

    
  }
  


console.log(data.CommunityEvents);
  return (
    <div className='relative bg-[#000000] pl-30 pr-30'>
      <div className='bg-black '>
        <h1 className='bg-black pt-30 pb-10 text-white text-4xl font-extrabold flex m-auto items-center justify-center '>Events</h1>
        <p className='ml-50 mr-50 pl-30 pr-30 items-center justify-center text-white/80'>
          Explore upcoming workshops, hackathons, live recognitions, events, and corporate training sessions. From small meetups to large-scale summits, every experience is curated to inspire collaboration and product excellence.
        </p>
      </div>
      <div className='flex m-auto items-center justify-center mt-20 gap-7 mb-30 text-white font-semibold  py-1 w-max  '>
        <section className='hover:bg-[#292349] px-2 py-1 text-sm  outline-1  rounded-2xl'>
          Workshops
        </section>
        <section className='hover:bg-[#292349] px-2 py-1 text-xs  outline-1 rounded-2xl'>
          Hackathons
        </section>
        <section className='hover:bg-[#292349] px-2 py-1 text-xs outline-1  rounded-2xl'>
          Live Recognitions
        </section>
        <section className='hover:bg-[#292349] px-2 py-1 text-xs outline-1  rounded-2xl'>
          Corporate Training
        </section>

        <section className='hover:bg-[#292349] px-2 py-1 outline-1 text-xs rounded-2xl'>
          Community Events
        </section>
      </div>

      <div className='mb-3'>
        <h1 className=' text-white text-2xl font-semibold'>All Events</h1>
      </div>

    <div className='mt-10 grid     grid-cols-3 ml-30 mr-30 h-max w-max m-auto '>
    {Object.entries(data).map(([category, events]) => (
        <React.Fragment key={category}>
        

        {events.map((item, index) => (
          <div key={index} className='h-max w-max ' >
           <Ecard item={item} category={category} />
          </div>
        ))}
       </React.Fragment>
    ))}
  </div>
    </div>
  )
}

export default Event
import { useNavigate } from "react-router-dom";


export const Ecard = ({item,category}) =>{
  console.log(category)
  const navigate = useNavigate();

  return(
    <div className='p-2  '>
      <div className='card '>
        <div>
          <img className='h-32 w-56 pt-0' src={item.titleImage} alt="" />
          <div className='flex text-xs pt-2 justify-between items-center '>
            <section className='hover:bg-[#292349] px-1 outline-white text-white text-xs  outline-1  rounded-2xl'>{category}</section>
            <section>UPCOMING</section>
          </div>
          <div className='flex flex-col text-xs pt-3 font-semibold text-red-600 hover:cursor-pointer ' onClick={() =>
    navigate("/event/event-in-detailed", {
      state: {
        item,
        category,
      },
    })
  } >
            <section>{item.title}</section>
            <section className='flex items-center text-white text-xs pt-2 gap-2'><CiCalendar/>{item.Date}</section>
          </div>
        </div>
        
      </div>
    </div>
  )
}
























/* {
 <img src={item.titleImage} alt={item.title} />

            <h2>{item.title}</h2>

            <p>{item.description}</p>

            <p>{item.Date}</p>

            <p>{item.Time}</p>

            <p>{item.Venue}</p>

            <p>{item.NoRegi}</p>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4004.0788556094953!2d77.58341762507688!3d12.9941096873233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1640b976be87%3A0x7ab29f2e655f7f7d!2sITC%20WINDSOR%2C%20Abshot%20Layout%2C%20Vasanth%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001!5e1!3m2!1sen!2sin!4v1783737667370!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
}*/