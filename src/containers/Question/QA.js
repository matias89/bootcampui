import React from 'react';
import Question from '../../components/QuestionsAndAnswers/Question';
import Answer from '../../components/QuestionsAndAnswers/Answer';
import './qa.css'

const QuestionsAndAnswers = () => {
  return (
    <div className = "container">
      <div className = "row card" id = "q1">
        <Question className = "card-header"/>
        <Answer className = "card-body"/>
      </div>
      <div className = "row card" id = "q2">
        <Question className = "card-header"/>
        <Answer className = "card-body"/>
      </div>
      <div className = "row card" id = "q3">
        <Question className = "card-header"/>
        <Answer className = "card-body"/>
      </div>
      <div className = "row card" id = "q4">
        <Question className = "card-header"/>
        <Answer className = "card-body"/>
      </div>      
    </div>
    );
}

export default QuestionsAndAnswers;