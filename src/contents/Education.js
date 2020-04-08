import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Bachelor of Science in Technology Management" where="Southeast Missouri State University" from="January 2010" to="May 2014" />
                <Widecard title="Marine Technician Specialist" where="Marine Mechanics Institute" from="2002" to="2004" />
            </div>
        )
    }
}

export default Education
