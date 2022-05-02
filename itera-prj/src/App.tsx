import userInfo from './userInfo.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <strong>First name:</strong> {userInfo.firstName}
        </li>
        <li>
          <strong>Short biography:</strong> {userInfo.ShortBiography}
        </li>
        <li>
          <strong>Email:</strong> {userInfo.contacts.email}
        </li>
        <li>
          <strong>GitHub account:</strong> {userInfo.contacts.githubAccount}
        </li>
      </ul>
    </div>
  );
}

export default App;