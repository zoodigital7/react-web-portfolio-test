import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/zach_young_profile.jpeg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic" alt="Zach Young Profile Pic."></img>
                <ReactTypingEffect className="typingeffect" text={['I am Zach Young', 'I am a web developer']} speed={100} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}

export default Home
