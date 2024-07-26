import '../pages/About.css'
import GabPhoto from '../assets/Gab.jpg'

export default function About() {
    return (
        <div>
            <main class="info">
        <a href="BG/Gab.jpg" target="_blank">
            <img src={GabPhoto} />
        </a>

        <a class="nameInfo" href="https://github.com/Gabewingman">
            <h1>Peter Gabriel Bersamina</h1><br/>
        </a>

        <a class="nameSkills" href="https://www.linkedin.com/in/peter-gabriel-bersamina/">
            <i>Developer | Web Designer | Tech Enthusiast</i>
        </a>

        <br/><br/>
            <h2>About Me</h2><br/>
            <i>Motivated FrontEnd Developer.</i>

        <br/>
            <p>Contact me at <strong><a class="email" href="https://mail.google.com/mail/u/0/#inbox">pgbersamina@gmail.com</a></strong></p>
    
    </main>
        </div>
    )
}