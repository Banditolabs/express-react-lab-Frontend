import linkedin from '../../linkedin.png'
import github from '../../github_icon.png'
import './styles.scss'

export default function Footer (props) {
    return (
        <div id="footer">
            <a href="https://www.linkedin.com/in/joshuagoss/"><img className="social-img" alt="linkdin" src={linkedin} /></a>
            <a href="https://github.com/Banditolabs"><img className="social-img" alt="github" src={github} /></a>
        </div>

    )
}