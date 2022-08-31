let message = document.querySelector('#message');



const addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input').value;
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    document.querySelector('ul').appendChild(movie);
    inputField = '';
}

const deleteMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = `${event.target.parentNode.firstChild.textContent} Movie Deleted!`;
    revealMessage();
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked')){
    message.textContent(`${event.target.textContent} watched!`);
    } else {
        message.textContent(`${event.target.textContent} added back!`)
    }
    revealMessage();
}

function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000);
}
document.querySelector('form').addEventListener('submit', addMovie);