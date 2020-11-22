import './App.css';
import Profile from './profile/Profile_component'
import ProfileImg from "./profile/ProfileImg.jpg";

function App() {
  const handleName = (name) => {

    alert(`Name of profile user is ${name}`)

  }
  return (
    <div className="App">
      {/* Props to profileComponent */}
      <Profile
        fullName="Fatima Zohra BELABDI"
        profession="software developer"
        bio="A developer, fitness and lifestyle passionate, captivating motivational for new challenges."
        handleName={handleName}
      >
        {/* Pass as Children Props to profileComponent */}
        <img src={ProfileImg} alt="img" />
      </Profile>
    </div >
  );
}

export default App;
