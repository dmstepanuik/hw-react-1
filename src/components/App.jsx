import Profile from './Profile/Profile';
import person from '../data/user';
console.log(person);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        avatar={person.avatar}
        username={person.username}
        tag={person.tag}
        location={person.location}
        stats={person.stats}
      />
    </div>
  );
};
