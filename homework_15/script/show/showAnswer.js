const showAnswer = ( text, variable ) => {

    const answer = document.createElement("p");

    answer.className = 'answer';

    answer.innerHTML = `${ text } - <span> ${ variable }</span><br>`;

    return answer;

}

export default showAnswer;