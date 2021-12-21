export const Answers = (props) => {
    let { answer, onSelectAnswer } = props;

    return (
        <div>
            <input
                type="radio"
                name="test"
                onChange={() => {
                    if (onSelectAnswer) onSelectAnswer();
                }}
            />
            {answer}
        </div>
    );
};
