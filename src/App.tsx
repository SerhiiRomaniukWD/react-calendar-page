import { FC } from 'react';
import { Calendar } from './components/Calendar';
import { DateNavigator } from './components/DateNavigator';

const App: FC = () => {
  return (
    <div className="main">
      <div className="container">
        <DateNavigator />

        <Calendar />
      </div>
    </div>
  );
};

export default App;
