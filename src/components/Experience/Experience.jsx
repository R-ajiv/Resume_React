
import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
// import c from '../../assets/c.png';
import html from '../../assets/html.png';
import js from '../../assets/js.png';
import css from '../../assets/css.png';


export default function Experience(){

    const statements = [

        "1.Spearheaded marketing campaigns to promote Coding Ninjas LPU's courses and events, resulting in a significant increase in student enrollment.",        
        "2.Collaborated with the design team to create visually engaging content for social media platforms, enhancing brand visibility and engagement with the target audience.",
        "3.Conducted market research and analysis to identify new opportunities for growth and expansion, contributing to the development of effective marketing strategies.",
        "4.Assisted in organizing workshops and seminars to showcase Coding Ninjas LPU's offerings, attracting a diverse audience and fostering community engagement.",
        "5.Maintained strong relationships with key stakeholders, including students, faculty, and industry partners, to support the overall marketing objectives of the organization.",
        
    ];

    const statements1 = [

        "1.Organized and executed technical and non-technical events as a member of the Event Management Team at IEEE CIS LPU.",        
        "2.Coordinated logistics, managed event schedules, and communicated with speakers and participants to ensure the smooth operation of each event.",
        "3.Promoted events through social media and other channels to increase awareness and participation.",
        "4.Collaborated with team members to develop innovative and engaging event concepts that catered to the interests of the target audience.",
        "5.Gained valuable experience in leadership, teamwork, and project management while contributing to the success of impactful events within the organization.",
        
    ];

    const statements2 = [

        "1.Engaged in community initiatives and projects as a volunteer at Mera India Mera Adhikar - M.I.M.A NGO, focusing on social welfare and empowerment.",        
        "2.Organized events, workshops, and outreach programs while actively teaching children within the community to promote education and personal development.",
        "3.Conducted educational sessions and classes for children, emphasizing the importance of learning and personal growth.",
        "4.Contributed to the NGO's social media campaigns to amplify educational initiatives and reach a broader audience.",
        "5.Collaborated with volunteers to drive positive change within the communities served by the organization while developing leadership skills and enhancing community outreach efforts.",
        
    ];


    const iconImages = [html, css, js];

    return (
        <div className='experience_container'> 
            <br /><br /><br /><br /><br /><br /><br />
            <p className='experience_title'>Experience</p>

            <div className='experience_cards_container'>

                <ExperienceCard
                    companyName = " Coding Ninjas LPU "
                    designation = 'Marketing Team Member'
                    statements={statements}
                    iconImages={iconImages}
                
                />

                    <ExperienceCard
                    companyName = "IEEE CIS LPU"
                    designation = 'Event Management Team Member'
                    statements={statements1}
                    iconImages={iconImages}
                
                />
                   <ExperienceCard
                    companyName = "Mera India Mera Adhikar - M.I.M.A NGO"
                    designation = 'Volunteer'
                    statements={statements2}
                    iconImages={iconImages}
                
                />
            </div>
        </div>
    )
}