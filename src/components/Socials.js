import GithubIcon from '../assets/github-logo.png';
import GmailIcon from '../assets/gmail-logo.png';
import LinkedinIcon from '../assets/linkedin-logo.png';

function Socials() {
  const imageStyle = {
    marginRight: '30px',
    height: '35px',
  };
  const divStyle = {
    marginTop: '30px',
  };

  return (
    <div style={divStyle}>
      <a href="mailto:meichock1@gmail.com">
        <img src={GmailIcon} alt="Email" style={imageStyle} />
      </a>
      <a href="https://www.linkedin.com/in/mei-chock-0782811b4/">
        <img src={LinkedinIcon} alt="LinkedIn" style={imageStyle} />
      </a>
      <a href="https://github.com/shrimeichock">
        <img src={GithubIcon} alt="Github" style={imageStyle} />
      </a>
    </div>
  );
}

export default Socials;
