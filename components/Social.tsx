import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import {BsLinkedin ,BsFacebook ,BsGithub, BsBehance,BsInstagram }from 'react-icons/bs'

const Social = () => {
    return (
        <div className=" flex my-5 flex flex-row justify-center items-center m-auto">
            <ul className='w-full my-5 flex-row '>
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

                <li><a href='https://www.instagram.com/7958_muhammad/?fbclid=IwAR2eHRWktRWm-FDqcPWCFYOcm7FrbFBtr0X2mBRjMpjZWfCMcXrarMwtSg4' target="_blank" rel="noopener noreferrer">
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
    );
}

export default Social