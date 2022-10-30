document.getElementById('add-border').addEventListener(
    'click',function(){
        // console.log('add click')
        const container =document.getElementById('friends-container')
        container.style.border='3px solid yellow';
    }
)
document.getElementById('add-background').addEventListener('click',
function(){
    const friends =document.getElementsByClassName('friend')
    for(const friend of friends){
        friend.style.backgroundColor ='lightblue'
    }
}) 
function addFriend(){
    const container =document.getElementById('friends-container');
    const friendDiv =document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML= `
    <h3 class="friend-name">New Friend </h3>
    <p>Illo adipisci sint molestiae id.</p>
    `;
    container.appendChild(friendDiv);
}