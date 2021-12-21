import { useState } from 'react';
import { Answers } from './answers';

export const Question = (props) => {
    let { question } = props;

    const [current, setCurrent] = useState(null);

    return (
        <div>
            <h3>{question.title}</h3>
            {question.answers.map((answer, index) => {
                return (
                    <Answers
                        answer={answer}
                        onSelectAnswer={() => {
                            setCurrent(index);
                        }}
                    />
                );
            })}

            <button
                onClick={() => {
                    if (current == null) {
                        alert('Bạn chưa chọn đáp án');
                        return;
                    }

                    if (current == question.correct_answer) alert('Đúng');
                    else alert('Sai');
                }}
            >
                Gửi đáp án
            </button>
        </div>
    );
};
