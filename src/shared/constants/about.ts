import { ExperienceItem } from "../models/about";
import { IconList } from "../models/common";

export class ExperienceList {
    public static readonly list : ExperienceItem[] = [
        {
            id : '01',
            date : '2019 - 2022',
            icon : '/company/zoomi.png',
            designation: 'Software Engineer',
            company: 'Zoomi Technologies Inc',
            location : 'CA',
            link : 'https://www.zoomi.ca/',
            skills : [
                {
                    id : '01',
                    value : 'Angular'
                },
                {
                    id : '02',
                    value : 'React'
                },
                {
                    id : '03',
                    value : 'Typescript'
                },
                {
                    id : '04',
                    value : 'NodeJS'
                },
                {
                    id : '05',
                    value : 'Redux'
                },
            ],
            tasks  : [
                {
                    id : '01',
                    value : "Developed efficient software solutions and pixel-perfect user interfaces utilizing React, Angular, Typescript, and Javascript to meet client requirements."
                },
                {
                    id : '02',
                    value : "Collaborated with cross-functional teams to ensure seamless integration of software components."
                },
                {
                    id : '03',
                    value : "Streamlined code quality by refactoring complex codes to ensure maintainability"
                },
                {
                    id : '04',
                    value : "Maintained existing software through bug fixes and enhancements."
                },
                {
                    id : '05',
                    value : "Empowered company efficiency by developing reusable plugins, and components and Building innovative features."
                },
            ]
        },
        {
            id : '02',
            date : '2022 - 2023',
            icon : '/company/marvel.png',
            designation: 'Senior Software Engineer',
            company: 'Sports TV Network (Pvt) Ltd',
            location : 'LK',
            link : '',
            skills : [
                {
                    id : '01',
                    value : 'Next'
                },
                {
                    id : '02',
                    value : 'React'
                },
                {
                    id : '03',
                    value : 'NodeJS'
                },
                {
                    id : '04',
                    value : 'Prisma'
                },
                {
                    id : '05',
                    value : 'MongoDB'
                },
            ],
            tasks  : [
                {
                    id : '01',
                    value : "Developed responsive web applications using Next.js, React, and Prisma to provide a seamless user experience across devices."
                },
                {
                    id : '02',
                    value : "Enhanced customer engagement by building a user-friendly booking interface, contributing to increased bookings and client retention."
                },
                {
                    id : '03',
                    value : "Built a comprehensive platform for internal booking management, significantly boosting team efficiency and productivity"
                },
                {
                    id : '04',
                    value : "Streamlined operational processes by designing reusable components and tools, supporting smoother workflows and faster feature development."
                },
            ]
        },
        {
            id : '03',
            date : '2024 - PRESENT',
            icon : '/company/marvel.png',
            designation: 'Senior Software Engineer',
            company: 'The Marvel Adventures & Expedition',
            location : 'LK',
            link : 'https://www.themarvelsrilanka.com/',
            skills : [
                {
                    id : '01',
                    value : 'Next'
                },
                {
                    id : '02',
                    value : 'React'
                },
                {
                    id : '03',
                    value : 'NodeJS'
                },
                {
                    id : '04',
                    value : 'Prisma'
                },
                {
                    id : '05',
                    value : 'MongoDB'
                },
            ],
            tasks  : [
                {
                    id : '01',
                    value : "Developed responsive web applications using Next.js, React, and Prisma to provide a seamless user experience across devices."
                },
                {
                    id : '02',
                    value : "Enhanced customer engagement by building a user-friendly booking interface, contributing to increased bookings and client retention."
                },
                {
                    id : '03',
                    value : "Built a comprehensive platform for internal booking management, significantly boosting team efficiency and productivity"
                },
                {
                    id : '04',
                    value : "Streamlined operational processes by designing reusable components and tools, supporting smoother workflows and faster feature development."
                },
            ]
        },     
        {
            id : '04',
            date : '2019 - Present',
            icon : '/logo.png',
            designation: 'Freelance Developer',
            company: 'Self Employment',
            location : 'Remote',
            link : '',
            skills : [
                {
                    id : '01',
                    value : 'Next'
                },
                {
                    id : '02',
                    value : 'React'
                },
                {
                    id : '03',
                    value : 'Angular'
                },
                {
                    id : '04',
                    value : 'Wordpress'
                },
                {
                    id : '04',
                    value : 'NodeJS'
                },
                {
                    id : '05',
                    value : 'Three JS'
                },
            ],
            tasks  : [
                {
                    id : '01',
                    value : "Design user-friendly user interfaces to meet client's requirements."
                },
                {
                    id : '02',
                    value : "Created highly responsive and scalable web applications using Next.JS, React, TypeScript, Redux, Three JS and Mongodb technologies."
                },
                {
                    id : '03',
                    value : "Achieved development milestones and scheduled targets"
                },
            ]
        },
    ]
}

export class TechList {
    public static readonly list : IconList[] = [
        {
            id : '01',
            value : 'Next',
            icon : '/tech/next.png'
        },
        {
            id : '02',
            value : 'React',
            icon : '/tech/reactjs.png'
        },
        {
            id : '03',
            value : 'Angular',
            icon : '/tech/angular.png'
        },
        {
            id : '04',
            value : 'ThreeJs',
            icon : '/tech/threejs.svg'
        },
        {
            id : '05',
            value : 'Tailwind',
            icon : '/tech/tailwind.png'
        },
        {
            id : '06',
            value : 'Typescript',
            icon : '/tech/typescript.png'
        },
        {
            id : '07',
            value : 'Javascript',
            icon : '/tech/javascript.png'
        },
        {
            id : '08',
            value : 'SCSS',
            icon : '/tech/scss.png'
        },
        {
            id : '09',
            value : 'Redux',
            icon : '/tech/redux.png'
        },
        {
            id : '10',
            value : 'GSAP',
            icon : '/tech/gsap.png'
        },
        {
            id : '11',
            value : 'Prisma',
            icon : '/tech/prisma.png'
        },
        {
            id : '12',
            value : 'MongoDB',
            icon : '/tech/mongodb.png'
        },
        {
            id : '13',
            value : 'NodeJS',
            icon : '/tech/nodejs.png'
        },
        {
            id : '14',
            value : 'GIT',
            icon : '/tech/git.png'
        },
        {
            id : '15',
            value : 'Adobe XD',
            icon : '/tech/xd.png'
        },
        {
            id : '16',
            value : 'Figma',
            icon : '/tech/figma.png'
        },
    ]
}