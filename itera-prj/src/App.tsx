import userInfo from './userInfo.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <b>First name:</b> {userInfo.firstName}
        </li>
        <li>
          <b>Short biography:</b> {userInfo.ShortBiography}
        </li>
        <li>
          <b>Email:</b> {userInfo.contacts.email}
        </li>
        <li>
          <b>GitHub accoutnt:</b> {userInfo.contacts.githubAccount}
        </li>
      </ul>
    </div>
  );
}

export default App;