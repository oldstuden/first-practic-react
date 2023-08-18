import { ActivitiesStats } from './ActivitiesStats/ActivitiesStats';
import { GlobalStyle } from './GlobalStyle';
import { QuizForm } from './QuizForm';
import { SearchBar } from './SearchBar';
import user from './user.json';

export const App = () => {
  return (
    <div>
      <QuizForm />
      <SearchBar />
      <ActivitiesStats
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <GlobalStyle />
    </div>
  );
};
// ActivitiesStats({items: user})
