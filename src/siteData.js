import Asim from './image/testimonial/asim-intro.png'
import Ernest from './image/testimonial/ernest.jpeg'
import Aleks from './image/testimonial/aleks.jpeg'
import ApiDoc from './image/portfolio/api-docs.png'
import BudgetApp from './image/portfolio/budgetApp.png'
import GoFreelancer from './image/portfolio/gofreelancers.png'
import Threadify from './image/portfolio/threadify.png'
import Sharinghan from './image/portfolio/sharinghan.gif'
import SayNumber from './image/portfolio/saythenumber.png'

const skills = {
    front: {
        title: 'Front-end',
        list: ['JavaScript', 'React', 'Redux', 'JQuery', 'Typescript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwindcss'],
    },
    back: {
        title: 'Back-end',
        list: ['Ruby', 'Rails', 'Laravel', 'Nodejs', 'Express', 'MySQL', 'MongoDB', 'Postgresql'],
    },
    tools: {
        title: 'Tools & Methods',
        list: ['Git', 'Github', 'RSpec', 'TDD', 'Integration Test', 'Unit Test', 'Mobile Development', 'Responsive Development', 'RESTful API Design', 'Web Hosting '],
    },
    professional: {
        title: 'Professional',
        list: ['Teamwork', 'Mentoring', 'Remote Pair-Programming'],
    },
}
export const education = [
    {
        year: 'Mar 2022 - Nov 2022',
        position: 'Full stack development',
        company: 'Microverse',
        location: 'Remote',
        details: '- Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.\n' +
            '\n' +
            '- Developed skills in remote pair-programming using GitHub, industry-standard gitflow, and daily standups to communicate and collaborate with international remote developers.\n',
    },
    {
        year: 'Jan 2015 - Nov 2018',
        position: '  Bachelor\'s degree, Computer Science',
        company: 'International University of East Africa',
        location: 'Uganda',
        details: 'I co-designed and co-implemented an emergency tracking and response system.' +
            'Emergency Tracking and Response system with the aim of monitoring and responding ' +
            'to emergency requests from the public by use of geolocation online. The ability to ' +
            'monitor and locate the position of victims gives it a competitive advantage, which ' +
            'can be set up in various communities and regulatory agencies; countries and many more ' +
            'adaptations that are possible',
    },
    {
        year: 'Sep 2007 - Jul 2015',
        position: 'Electrical Engineering',
        company: 'Institut Technique Industriel De Goma',
        location: 'Congo DRC',
        details: 'High School Diploma in Electrical Engineering',
    },
]
export const experience = [
    {
        year: 'Oct 2022 - Present',
        position: 'Code Reviewer',
        company: 'Microverse · Part-time',
        location: 'Remote',
        details: '- Ensuring the quality of source code and conducting code and UI reviews\n' +
            '- Provide quality and timely feedback to students on their technical projects, so that they can become better software developers.',
    },
    {
        year: 'Jul 2020 - Present ',
        position: 'Full-stack Developer',
        company: 'Freelance',
        location: 'Remote',
        details: 'Develop and improve existing and new systems, including client-side and server-side development, while designing efficient and cost-effective systems export default skills',
    },
    // {
    //     year: 'Jan 2021 - Present',
    //     position: 'Manager',
    //     company: ' Ets. Tuliya · Part-time',
    //     location: 'Congo (DRC)',
    //     details: '- Improved company relationships with clients\n' +
    //         '- Provided clear direction to employees',
    // },
    {
        year: 'Mar 2019 - Jul 2019',
        position: 'Full-stack Developer',
        company: ' Harvan International Institute ',
        location: 'Uganda',
        details: '- Helped the company to improve its online presence\n' +
            '- Improved the website latency using (CDN, Optimized Images, and minified CSS and JS files)\n' +
            '- Helped the company to competitively improve the content of the website.',
    },
    {
        year: 'Jul 2018 - Feb 2019',
        position: 'Frontend Web Developer',
        company: 'International University of East Africa',
        location: 'Uganda',
        details: '- Improved the existing website design under the supervision of the Vice-chancellor\n' +
            '- Improved the website latency using (CDN, Optimized Images, and minified CSS and JS files)\n' +
            '- Helped the company to competitively improve the content of the website ( task shared with the marketing team)',
    },
    {
        year: 'Jun 2017 - Sep 2018',
        position: 'Frontend Web Developer',
        company: 'Tresud a.s.b.l',
        location: 'Uganda',
        details: '- Successfully coordinated the development team to build and deliver the website on time.\n' +
            '- Designed and implemented the database ( task shared with other 2 people ).\n' +
            '- Introduced new tools for user behaviour analytics',
    },
]

export const testimonials = [
    {
        name: "Asim Mehmood Khan",
        position: 'Software Developer',
        image: Asim,
        comment: 'Besides being a thorough gentleman and a very helpful partner. Coding and collaborating with ' +
            'him is always a treat, watching him code and explain the details of how the applications operate and ' +
            'function is insightful and very useful. His approach to handling and solving algorithms and data structures' +
            ' coding challenges is a great experience, it opens up your mind and helps with your critical thinking' +
            '. I strongly ' +
            'recommend having this talented developer at your side for a win-win situation.',
        location: 'Pakistan',
        date: 'Dec 17, 2022',
        linkedIn: 'https://www.linkedin.com/in/asim-khan'

    },
    {
        name: "Ernest Anyewe Adonu",
        image: Ernest,
        position: 'Full-Stack Developer',
        comment: 'Ushindi is one person I know who understands the tools he uses and can manipulate them ' +
            'to achieve anything he wants. He is down to earth and a team player. He can communicate his taught process for a non-technical person' +
            ' to understand. Talk about JavaScript, React, Bootstrap, and Ruby on Rails and I will choose to work with Ushindi. He is an excellent asset to the tech world.',
        location: 'Ghana',
        date: 'August 25, 2022',
        linkedIn: 'https://www.linkedin.com/in/ernest-anyewe-adonu'
    },
    {
        name: "Aleksandra Ujvari",
        position: 'Full-Stack Developer',
        image: Aleks,
        comment: 'Ushindi is an exceptional person, always ready to help. He is an excellent developer, ' +
            'he knows how to find a solution for every problem. I was convinced of this when we worked ' +
            'together on projects in Microverse. He has a high level of knowledge of JavaScript and knows ' +
            'how to transfer his knowledge to others. He is positive and always smiling. He is the developer ' +
            'every company would want.',
        location: 'Serbia',
        date: 'August 20, 2022',
        linkedIn: 'https://www.linkedin.com/in/aleksandraujvari'
    },
]

export const projects = [
    {
        screenshot: Threadify,
        name: 'Threadify',
        techStack: [
            'html', 'css', 'typescript', 'javascript', 'tailwind', 'react'
        ],
        description: 'Paste your text and It will generate a twitter thread for you and allow you to customize the numbering style',
        live: 'https://extendtweet.vercel.app/',
        github: 'https://github.com/bienvenuushindi/threadify'
    }, {
        screenshot: Sharinghan,
        name: 'Sharinghan',
        techStack: [
            'html', 'css', 'javascript', 'ruby', 'rails', 'tailwindcss'
        ],
        description: 'knowledge based system has been created to help code reviewers quickly search for specific code' +
            ' review guidelines and generate a ready to use comment for each requirement that is not followed ',
        live: 'https://sharingan.up.railway.app/',
        github: 'https://github.com/bienvenuushindi/sharingan'
    },{
        screenshot: SayNumber,
        name: 'Say the number',
        techStack: [
            'html', 'css', 'typescript', 'tailwind'
        ],
        description: 'Takes a numeral (just digits without separators (e.g. 19093 instead of 19,093) and returns the standard way of reading a number, complete with punctuation.',
        live: 'https://saythenumber.vercel.app/',
        github: 'https://github.com/bienvenuushindi/HyperionDev/tree/main/sections/C'
    },
    {
        screenshot: GoFreelancer,
        name: 'GoFreelancer',
        techStack: [
            'html', 'css', 'javascript', 'react', 'redux', 'tailwind',
        ],
        description: 'GoFreelancer enables a user to book a freelancer, cancel a booking, add and delete a freelancer.',
        live: 'https://gofreelancer.vercel.app/',
        github: 'https://github.com/bienvenuushindi/booking-app'
    }, {
        screenshot: ApiDoc,
        name: 'Go Freelancers Api-Doc',
        techStack: [
            'ruby', 'rails',
        ],
        description: 'This is the documentation for GoFreelancer API which enables  a user to book a freelancer, cancel a booking, add and delete a freelancer.',
        live: 'https://gofreelancer.up.railway.app/api-docs',
        github: 'https://github.com/bienvenuushindi/gofreelancer-backend'
    }
    , {
        screenshot: BudgetApp,
        name: 'BudgetApp',
        techStack: [
            'html', 'css', 'javascript', 'ruby', 'rails', 'bootstrap'
        ],
        description: 'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
        live: 'https://budgetapp.up.railway.app/',
        github: 'https://github.com/bienvenuushindi/budget-app'
    }
]

export const accounts = [
    {
        name: 'Twitter',
        link: 'https://twitter.com/UsbBush',
        key: 'twitter'
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/usbbush/',
        key: 'linkedin'
    },
    {
        name: 'Github',
        link: 'https://github.com/bienvenuushindi',
        key: 'github'
    },
    {
        name: 'Medium',
        link: 'https://medium.com/@bienvenuushindi',
        key: 'medium'
    },
    {
        name: 'jeanbienvenusb@gmail.com',
        link: 'mailto:jeanbienvenusb@gmail.com',
        key: 'gmail'
    },


]


export default skills
