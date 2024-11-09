'use client'
/**
 * @class ExperienceTimeLine
 * @description purpose of this component is to render experience as a time line
 * @author Nawod Madhuvantha
*/


import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Image from 'next/image';
import { ExperienceList } from '@/shared/constants/about';
import Link from 'next/link';

const ExperienceTimeLine = () => {
  return (
    <div className='relative z-10'>
      <VerticalTimeline animate={false}>
        { ExperienceList.list.map((item) =>
            <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            contentStyle={{
                color: '#fff',
                background: 'linear-gradient(135deg, rgba(91, 172, 62, 0.2), rgba(133, 221, 82, 0.2), rgba(36, 109, 27, 0.2))',
                backdropFilter: 'blur(10px)', 
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid #aa701',
                borderRadius: '0.5rem',
                padding: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              }}
                contentArrowStyle={{ borderRight: '7px solid #246d1b' }}
                date={item.date}
                iconStyle={{ color: '#fff', background : 'black' }}
                icon={
                    <div className='relative w-full h-full flex items-center justify-center'>
                        <Image src={item.icon} alt={`${item.icon} logo`} className='object-scale-down' fill />
                    </div>
                }
            >
                <div className='flex flex-wrap items-center gap-4'>
                    {
                        item.skills.map((skill)=>
                            <div key={skill.id} className='text-sm pt-[2px] pb-[4px] px-[16px] rounded-2xl roboto bg-theme'>{skill.value}</div>
                        )
                    }
                </div>
                <h3 className="anton text-xl mt-4">{item.designation}</h3>
                <Link href={item.link} target='_blank' className="text-xl cursor-pointer">{item.company}<span className='inline-block'>, {item.location}</span></Link>
                <ul className='mt-4'>
                    {item.tasks.map((task)=>
                        <li key={task.id} className="text-lg relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-2 before:bg-themeLight before:rounded-sm">
                        {task.value}
                        </li>
                    )}
                </ul>
        </VerticalTimelineElement>
        )}
    </VerticalTimeline>
    </div>
  )
}

export default ExperienceTimeLine
