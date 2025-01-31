import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'


const hero = () => {
    const transition = {type: 'tween' , duration :3}
  return (
    <div className="hero" >
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
                <motion.div
                initial={{left: '238px'}}
                whileInView={{left:'8px'}}
                transition={transition}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and 
                        live up your life to fullest</span>
                </div>
            </div>
            <div className="figures">
                <div><span> <NumberCounter end={140} start={100} preFix="+" delay="4"  /> </span><span>EXPERT COACHES</span></div>
                <div><span><NumberCounter end={978} start={800} preFix="+" delay="4"  /></span><span>MEMBERS JOINED</span></div>
                <div><span><NumberCounter end={50} start={0} preFix="+" delay="4"/></span><span>FITNESS PROGRAMS</span></div>
            </div>

            <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>

        </div>





        <div className="right-h">
           <button className='btn'>Join Now</button>
           <motion.div
           initial={{right:"-1rem"}}
           whileInView={{right:"4rem"}}
           transition={{...transition, type:"spring"}}
           

           className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span><span>116 bpm</span>
           </motion.div>
            <img src={hero_image} alt="" className="hero-image" />
            <motion.img 
            initial={{right:"11rem"}}
            whileInView={{right:"20rem"}}
            transition={transition}
            src={hero_image_back} alt="" className="hero-image-back" />
            <motion.div 
            initial={{right:"37rem"}}
            whileInView={{right:"28rem"}}
            transition={transition}
            className='calories'>
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned</span><span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default hero
