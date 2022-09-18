import Socials from './Socials';
import AboutMe from './AboutMe';
import ProfilePic from '../assets/profile-pic.jpeg';

function LandingPage() {

//   function setEmoji(emoji) {
//     const emojiField = document.querySelector('.emoji-area');
//     emojiField.innerHTML = emoji;
// }

//   function getRandomEmoji() {
//     fetch('https://ranmoji.herokuapp.com/emojis/api/v.1.0/')
//       .then(response => {
//         response.json().then(data => {
//           setEmoji(data.emoji)
//         })
//       });
//   }

  const getEmoji = require('get-random-emoji')

  return (
    <div className="divStyle">
      <div>
        <div className="emoji-area">{getEmoji()}</div>
        <AboutMe />
        <Socials />
      </div>
    </div>
  );
}

export default LandingPage;
