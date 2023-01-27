import { FC } from 'react';
import { Calendar } from './components/Calendar';
import { Header } from './components/Header';

const App: FC = () => {
  return (
    <div className="main">
      <div className="container">
        <Header />

        <Calendar />
      </div>
    </div>
  );
};

export default App;
