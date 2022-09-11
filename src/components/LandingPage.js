import Socials from './Socials';
import AboutMe from './AboutMe';
import ProfilePic from '../assets/profile-pic.jpeg';

function LandingPage() {
  const divStyle = {
    marginTop: '25%',
    marginBottom: '25%'
  };
  // Style react component using JS object and JSX (notice the camel case properties!)
  const imageStyle = {
    marginLeft: '10%',
    borderRadius: '10px',
    height: '250px',
    float: 'right',
  };

  return (
    <div style={divStyle}>
      <img src={ProfilePic} alt="Profile" style={imageStyle} />
      <div>
        <AboutMe />
        <Socials />
      </div>
    </div>
  );
}

export default LandingPage;
