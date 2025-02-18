import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

const SocialMedia = () => {

    return (
        <div className="social-media-container">
        <a
          href="https://www.linkedin.com/in/sumit-gupta-1571102b3/"
          title="Let's Connect"
          className="icon-button linkedin"
          target="_blank"
        >
          <i>
            <SiLinkedin title="Let's Connect" />
          </i>
        </a>
        
        <a href="https://github.com/SumitGupta0107" title="Check my Github" className="icon-button github" target="_blank">
          <i>
            <SiGithub title="Check my Github" />
          </i>
        </a>
        <a href = "mailto: sumitgupta.310711@gmail.com" title="Mail me" className="icon-button email" target="_blank" >
          <i>
            <SiGmail title="Mail me" />
          </i>
        </a>
      </div>
    );
}

export default SocialMedia;