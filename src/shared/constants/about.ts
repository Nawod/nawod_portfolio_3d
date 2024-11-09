import { ExperienceItem } from "../models/about";

export class ExperienceList {
    public static readonly list : ExperienceItem[] = [
        {
            id : '01',
            date : '2021 - 2023',
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
                    value : 'SCSS'
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
            date : '2023 - Present',
            icon : '/company/marvel.png',
            designation: 'Software Engineer',
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
                    value : 'Typescript'
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
            date : '2020 - Present',
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