import border from '../Assets/border.png'
import crackers from '../Assets/crackers.png'
import React from "react"
import './About.css'

const About = () => (
    <div className='about-section'>
    
    <div className='about-head'>
        <img className="img" src={border} alt='border' />
        <h1>About</h1>
        <img className="img"  src={border} alt='border' />
    </div>
        <div className='about-content'>
            <img src={crackers} alt='crackers' className='crackers' />
            <p className='pa'>Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them. <br></br><span>The choice is yours. Because they don’t have one.</span></p>
            <img src={crackers} alt='crackers' className='crackers' />
        </div>
    
    </div>
)
export default About