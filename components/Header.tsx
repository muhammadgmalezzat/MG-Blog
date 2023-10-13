import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import {BsLinkedin ,BsFacebook ,BsGithub, BsBehance,BsInstagram }from 'react-icons/bs'


const Header = () => {
    return (
    <section className="flex flex-col justify-center items-center h-[70vh] bg-bodyColor w-full relative" >
            <div className="w-[200px] h-[200px] mx-auto my-10 rounded-[100%] bg-bodyColorLight shadow-xl shadow-gray-400 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl dark:shadow-black">
                <Image
                    
                    src='/images/site/logo1.png'
                    alt='An image showing Muhammad'
                    width={300}
                    height={300}
                    
                />
            </div>
            <h1
                className='text-textGreen font-bold font-sans md:text-4xl text-xl my-2 text-center'
            >Hi, I'm Muhammad Gmal</h1>
            <p
                className='text-textGreen font-mono md:text-xl  my-2 text-center'
            >
                I blog about Software Engineering - especially web development.
            </p>
            <div className={styles.sociallinks}>
                <ul >
                    <li>
                        <a href='https://github.com/muhammadgmalezzat' target="_blank" rel="noopener noreferrer">
                        <span>
                            <BsGithub />
                        </span>
                    </a>
                    </li>
                    <li><a href='https://www.facebook.com/mohamed.gmal.98871' target="_blank" rel="noopener noreferrer">
                        <span>
                            <BsFacebook />
                        </span>
                    </a></li>

                    <li><a href='https://www.linkedin.com/in/muhammad-gmal-61330119b/' target="_blank" rel="noopener noreferrer">
                        <span>
                            <BsLinkedin />
                        </span>
                    </a></li>

                    <li><a href='https://www.instagram.com/7958_muhammad/?fbclid=IwAR2eHRWktRWm-FDqcPWCFYOcm7FrbFBtr0X2mBRjMpjZWfCMcXrarMwtSg4' target="_blank" rel="noopener noreferrer" >
                        <span>
                            <BsInstagram />
                        </span>
                    </a></li>

                    <li><a href='https://www.behance.net/muhammad12' target="_blank" rel="noopener noreferrer">
                        <span>
                            <BsBehance />
                        </span>
                    </a></li>
                </ul>
            </div>
            
        </section>
    )
};

export default Header