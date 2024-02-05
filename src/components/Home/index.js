import React from 'react';
import './index.scss';
import ProfilePic from '../../assets/profile.jpg';

const Home = () => {
    const columnStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'start',
        marginTop: '20px',
    };

    const columnItemStyle = {
        flex: '2', 
        margin: '0 20px', 
        marginLeft: '80px',
        padding: '20px',
        background: '#f0f0f0',
        borderRadius: '8px', 
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', 
        gap: '10px', 
        padding: '10px', 
    };
    const imageStyle = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '250px',
        height: '250px',
        borderRadius: '70%',
        objectFit: 'cover',
    };


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Welcome to the home page</h1>
                <br></br>
                <br></br>
            </div>
            <div style={columnStyle}>
                {/*Background*/}
                <div style={columnItemStyle}>
                    <h2>About My Background</h2>
                    <img src={ProfilePic} alt="Eraj" style={imageStyle} />
                    <p>
                        Hi! I'm Eraj, a software engineer student based in Evanston, IL. I have a passion for developing
                        software and learning new technologies. I'm currently pursuing a degree in computer science at Northwestern University
                        and I'm looking for opportunities to work on interesting projects and grow my skills. Also, I am a huge fan of the Chicago Bulls and the Chicago Bears.
                         I have a strong foundation in computer science and software engineering, with a focus on software development, cloud computing, and DevOps. I am passionate about building scalable and reliable software systems, and I am always looking for opportunities to learn and grow.
                        
                    </p>
                </div>

                {/*Projects*/}
                <div style={{...columnItemStyle, display: 'block'}}> 
                    <h2>My Projects and Resume</h2>
                    <div style={gridStyle}>
                        <div>
                            <h3>"Picturetag" Photoapp</h3>
                            <p>Conceptualized a photo application that extracts features using image recognition APIs, leveraging Node.js and Express.js.
 The application utilizes 4 AWS services: Elastic Beanstalk, S3, RDS, and EC2.</p>
                            <a href="https://github.com/eraj14/picturetag" target="_blank" alt ="link1">View on GitHub</a>
                        </div>
                        <div>
                            <h3>"Your Life" AI Bio Video Generator</h3>
                            <p>Implemented Flask framework to create a web application that generates personalized bio videos.</p>
                            <a href="https://github.com/eraj14/YourLife" target="_blank" alt ="link2">View on GitHub</a>
                        </div>
                        <div>
                            <h3>"Memory Trails" Trip Photo Keeper</h3>
                            <p>An app to record trips in chronological order to enable to relive the memories later. 
                            The app uses React.js and Firebase for the backend.</p>
                            <a href="https://github.com/394-w24/MemoryTrails" target="_blank" alt ="link3">View On GitHub</a>
                        </div>
                        <div>
                            <h3>Resume</h3>
                            <p>View my latest resume using the link below:</p>
                            <a href="https://github.com/eraj14/resumes/blob/main/R-205928_Eraj_Uzoqov.pdf" alt ="link4" target="_blank">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
