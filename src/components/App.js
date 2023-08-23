// import { ActivitiesStats } from './ActivitiesStats/ActivitiesStats';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { QuizForm } from './QuizForm';
import { SearchBar } from './SearchBar';
// import user from './user.json';
import initialQuizItems from '../quiz-items.json';
import { QuizList } from './QuizList/QuizList';
import { Component } from 'react';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    topicFilter: '',
    levelFilter: 'beginner',
  };
  deleteQuiz = quizId => {
    this.setState(prevState => ({
      quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId),
    }));
  };
  render() {
    return (
      <Layout>
        <QuizForm />
        <SearchBar />
        <QuizList items={this.state.quizItems} onDelete={this.deleteQuiz} />
        {/* <ActivitiesStats
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        /> */}
        <GlobalStyle />
      </Layout>
    );
  }
}
// ActivitiesStats({items: user})
