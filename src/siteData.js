import Asim from './image/testimonial/asim-intro.png'
import Ernest from './image/testimonial/ernest.jpeg'
import Aleks from './image/testimonial/aleks.jpeg'
import ApiDoc from './image/portfolio/api-docs.png'
import AwesomeBook from './image/portfolio/awesomebook.png'
import Bookstore from './image/portfolio/bookstore.png'
import BudgetApp from './image/portfolio/budgetApp.png'
import GameOfThrone from './image/portfolio/gameofthrones-screen.png'
import GoFreelancer from './image/portfolio/gofreelancers.png'
import KinEat from './image/portfolio/kin-eat.png'
import LeaderBoard from './image/portfolio/leaderboard.png'
import MaterChange from './image/portfolio/materchange-portf.png'
import MathMagicians from './image/portfolio/math-magicians.png'
import ReactTodo from './image/portfolio/react-todo.png'
import RecipeApp from './image/portfolio/recipe-app.png'
import SpaceHub from './image/portfolio/spacehub.png'
import ToDo from './image/portfolio/todolist.png'
import Portfolio from './image/portfolio/portfolio.png'

const skills = {
    front: {
        title: 'Front-end',
        list: ['JavaScript', 'React', 'Redux', 'JQuery', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwindcss'],
    },
    back: {
        title: 'Back-end',
        list: ['Ruby', 'Rails', 'PHP', 'Laravel', 'Nodejs', 'Express', 'MySQL', 'MongoDB', 'Postgresql'],
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
    {
        year: 'Jan 2021 - Present',
        position: 'Manager',
        company: ' Ets. Tuliya · Part-time',
        location: 'Congo (DRC)',
        details: '- Improved company relationships with clients\n' +
            '- Provided clear direction to employees',
    },
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
            ' coding challenges is a great experience, it opens up your mind and helps with your critical thinking. To have' +
            ' Ushindi in your organization as a Full Stack Developer will be of great value to the company. I strongly ' +
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
        screenshot: GoFreelancer,
        name: 'GoFreelancer',
        techStack:[
         'html', 'css','javascript','react','redux', 'tailwind',
        ],
        description:'GoFreelancer enables a user to book a freelancer, cancel a booking, add and delete a freelancer.',
        live: 'https://gofreelancer.vercel.app/',
        github: 'https://github.com/bienvenuushindi/booking-app'
    },
    {
        screenshot: MaterChange,
        name: 'MaterChange',
        techStack:[
            'html', 'css','javascript'
        ],
        description: 'This is a HTML,CSS, JavaScript capstone project. I designed a website for an organisation with the aim of raising a generation of Change Makers that believe in the transforming power of an idea',
        live: 'https://bienvenuushindi.github.io/materchange/',
        github: 'https://github.com/bienvenuushindi/materchange'
    },
    {
        screenshot: KinEat,
        name: 'KinEat',
        techStack:[
            'html', 'css','javascript', 'bootstrap'
        ],
        description: 'In this project, I use an API of various food types with pictures and descriptions to show them on the page of my application. The user interface will allow users to browse through various food types and list specific category\'s food.Additionally,a user may like or comment on a certain meal.',
        live: 'https://bienvenuushindi.github.io/meals-app/',
        github: 'https://github.com/bienvenuushindi/meals-app'
    },
    {
        screenshot: AwesomeBook,
        name: 'AwesomeBook',
        techStack:[
            'html', 'css','javascript', 'bootstrap',
        ],
        description: 'In this project, I designed an Awesome books app. The goal is to make use of ES6 syntax to demonstrate Single Page Application and code modularity.A user can add and remove a book.',
        live: 'https://bienvenuushindi.github.io/awesome-books-es6/',
        github: 'https://github.com/bienvenuushindi/awesome-books-es6'
    },
    {
        screenshot: Portfolio,
        name: 'Portfolio',
        techStack:[
            'html', 'css','javascript',
        ],
        description: 'I precisely replicate this Microverse portfolio templates to demonstrate my skills in HTML, CSS amd Javascript ',
        live: 'https://bienvenuushindi.github.io/portfolio/',
        github: 'https://github.com/bienvenuushindi/portfolio'
    },
    {
        screenshot: LeaderBoard,
        name: 'LeaderBoard',
        techStack:[
            'html', 'css','javascript'
        ],
        description: 'This app displays scores submitted by different players. It also allows any user to submit his score.',
        live: 'https://bienvenuushindi.github.io/leaderboard/',
        github: 'https://github.com/bienvenuushindi/leaderboard'
    }, {
        screenshot: ReactTodo,
        name: 'ReactTodo',
        techStack:[
            'html', 'css','javascript','react', 'bootstrap'
        ],
        description: 'This app is very comprehensive, and covers all main concepts about React, from the very basics to some intermediate topics',
        live: 'https://bienvenuushindi.github.io/react-todo-app/',
        github: 'https://github.com/bienvenuushindi/react-todo-app'
    }, {
        screenshot: SpaceHub,
        name: 'SpaceHub',
        techStack:[
            'html', 'css','javascript','react','redux', 'bootstrap'
        ],
        description: 'Make use of REACT and Redux to make calls to the SpaceX API to provide users with update information about space exploration. It features a user-friendly interface, allowing users to easily view data on SpaceX missions, rockets and satellites.',
        live: 'https://spacetouristhub.netlify.app/',
        github: 'https://github.com/bienvenuushindi/space-travelers-hub'
    }, {
        screenshot: MathMagicians,
        name: 'MathMagicians',
        techStack:[
            'html', 'css','javascript','react', 'bootstrap'
        ],
        description: 'It is Single Page App (SPA), built with React, that allows users to Make simple calculations and read a random math-related quote.',
        live: 'https://basicmaths.netlify.app/',
        github: 'https://github.com/bienvenuushindi/math-magicians'
    }, {
        screenshot: Bookstore,
        name: 'Bookstore',
        techStack:[
            'html', 'css','javascript','react','redux', 'bootstrap'
        ],
        description: 'A react app that displays a list of books, adds a book, removes a selected book.',
        live: 'https://bienvenuushindi.github.io/book-store/',
        github: 'https://github.com/bienvenuushindi/book-store'
    }, {
        screenshot: GameOfThrone,
        name: 'GameOfThrone Houses',
        techStack:[
            'html', 'css','javascript','react','redux', 'bootstrap'
        ],
        description: 'The Game of thrones houses and characters App is a React, Redux application based on a free API to retrieve some quotes of Game of Thrones movies!',
        live: 'https://gameofthrones-details.netlify.app/',
        github: 'https://github.com/bienvenuushindi/gameofthrones-details'
    }
    , {
        screenshot: BudgetApp,
        name: 'BudgetApp',
        techStack:[
            'html', 'css','javascript','react','redux', 'bootstrap'
        ],
        description: 'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
        live: 'https://budgetapp.up.railway.app/',
        github: 'https://github.com/bienvenuushindi/budget-app'
    }
    , {
        screenshot: RecipeApp,
        name: 'RecipeApp',
        techStack:[
            'html', 'css','javascript','ruby', 'rails', 'tailwind', 'bootstrap'
        ],
        description: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
        live: 'https://recipeapp.up.railway.app/',
        github: 'https://github.com/bienvenuushindi/recipe-app'
    }, {
        screenshot: ToDo,
        name: 'ToDo',
        techStack:[
            'html', 'css','javascript',
        ],
        description: 'What is a ToDo List? The definition is a simple one. It\'s a list of tasks you need to complete or things that you want to do',
        live: 'https://bienvenuushindi.github.io/to-do-list',
        github: 'https://github.com/bienvenuushindi/to-do-list'
    }, {
        screenshot: ApiDoc,
        name: 'Go Freelancers Api-Doc',
        techStack:[
            'ruby', 'rails',
        ],
        description:'This is the documentation for GoFreelancer API which enables  a user to book a freelancer, cancel a booking, add and delete a freelancer.',
        live: 'https://gofreelancer.up.railway.app/api-docs',
        github: 'https://github.com/bienvenuushindi/gofreelancer-backend'
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


]


export default skills