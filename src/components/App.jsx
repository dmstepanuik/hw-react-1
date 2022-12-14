import Profile from './Profile/Profile';
import person from '../data/user';
import data from '../data/data';
import Statistics from './Statistics/Statistics';
import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.container}>
      <Profile
        avatar={person.avatar}
        username={person.username}
        tag={person.tag}
        location={person.location}
        stats={person.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
