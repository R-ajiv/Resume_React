
import './HomePage.css';
import githubIcon from  '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.jpg';
// import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

function HomePage(){

    return (
        <div className='homepage_container'>
           
           <div className='homepage_left'>
                <p className='homepage_left_h1'>
                        <span className='red_color'>Hi,</span> my name is
                </p>

                <p className='homepage_left_h2'>
                    Rajiv Kumar Singh
                </p>

                <p className='homepage_left_h3'>
                    Student at <span className='red_color'>Lovely Professional University</span>
                </p>

                <br />

                <p className='homepage_left_description'>
                "I am a dedicated student pursuing a B.Tech in Computer Science and Engineering at Lovely Professional University. Currently completed my 2nd year, I am passionate about honing my skills in programming, problem-solving, and technology. My academic journey has equipped me with a solid foundation in computer science concepts, and I have completed various projects and coursework that reflect my commitment to learning and growth. I am eager to explore new opportunities and contribute positively to the field of technology as I continue to advance in my education."
                </p>

                <div>
                    <a href='https://github.com/R-ajiv' target='_blank'>
                        <img 
                            src={githubIcon}
                            alt='githubIconImage'
                            className='homepage_logo'
                        />
                        {/* <FaGithub className='homepage_logo' /> */}
                    </a>
                    <a href='https://www.linkedin.com/in/rajiv-kumar-singh-1a9665176/' target='_blank'>
                        <img 
                            src={linkedinIcon}
                            alt='linkedinIconImage'
                            className='homepage_logo1'
                        />
                    </a>
                </div>

                <a href='mailto:rajivsingh0315@gmail.com'>
                    <buton className='homepage_left_button'>Get in Touch</buton>
                </a>
           </div>

           <div className='homepage_right'>
                <img src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnZxY2ZseWh2cDc4cno3ZTlpdm45a3JsbDZvMWttbG5kY3Vhb3FpcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.webp' alt='GIF' />
           </div>
        </div>
    )
}

export default HomePage;
