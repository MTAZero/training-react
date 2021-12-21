import './App.css';

import { Question, Answers } from './components';

const question = {
    title: 'Con chó có mấy chân?',
    answers: ['A. 1 chân', 'B. 2 chân', 'C. 3 chân', 'D. 4 chân'],
    correct_answer: 1,
};

function App() {
    return (
        <div className="App">
            <Question question={question} />
        </div>
    );
}

export default App;
