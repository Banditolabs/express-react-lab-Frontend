
import profilePic from '../../Zendesk-Profile-image.png'
import './styles.scss'
import htmlImg from '../../html5-logo-31813.png'
import nodeImg from '../../nodejs.png'
import reactImg from '../../react-logo.png'
import jsImg from '../../JavaScript-logo.png'

export default function Home () {
    return (
        <div className="home-container">
            <h1 className="name-heading">Joshua Goss</h1>  <br/>
            <div className='pic-container'>
                <img alt="profile-pic" className='profile-pic' src={profilePic}/>
                <div className='contact-info'>
                    <h4>Contact Me</h4>
                    <ul>
                        <li><span>Phone: 1234</span></li>
                        <li><span>Email: Test@testing.cm</span></li>
                        <li><span>Linkdin: Jg/Ln</span></li>
                    </ul>
                </div>
            </div>
            <div className='skills-container'>
                <h3>Skills</h3>
                <div className="logo-container">
                    <img id="html-img" alt="html" src={htmlImg}/>
                    <img id="js-img" alt="html" src={jsImg}/>
                    <img id="node-img" alt="html" src={nodeImg}/>
                    <img id="react-img" alt="html" src={reactImg}/>
                </div>
            </div>
        </div>
    )

}