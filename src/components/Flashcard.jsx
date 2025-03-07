import React from 'react';

const Flashcard = ({question, answer, showAnswer}) => {
    return (
        <div className="card-inner">
            {showAnswer ? (
                <div className="card-back">
                    <p>{answer}</p>
                </div>
            ) : (
                <div className="card-front">
                    <p>{question}</p>
                </div>
            )}
        </div>
    );
};

export default Flashcard;