document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');

    container.style.border = '3px solid yellow';

})

function addBackgroundColor() {

    const bondhu = document.getElementsByClassName('friend');
    for (const friend of bondhu) {
        friend.style.backgroundColor = 'lightblue'
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Accusantium, optio?</p>
    
    `
    container.appendChild(friendDiv);

})