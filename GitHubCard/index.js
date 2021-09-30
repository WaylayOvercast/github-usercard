/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'
let cards = document.querySelector('.cards');

// axios Request, GET method , URL endpoint
axios.get('https://api.github.com/users/WaylayOvercast').then(maxData =>{
  //then take the data callback and do something with it once resolved
  cards.appendChild(domManager(maxData.data))
}).catch(e => console.log(e));//catch error

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/



/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

req(followersArray);

function req (arr){
  arr.forEach(ar => 
    axios.get(`https://api.github.com/users/${ar}`)
    
    .then(info =>
      cards.appendChild(domManager(info.data)))
    
    .catch(e => 
      console.log(e)));
}
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
 function domManager (obj){
  
  let div = document.createElement('div');
  div.classList.add('card');
  
  let img = document.createElement('img');
  img.src = obj.avatar_url;
  div.appendChild(img);

  let div2 = document.createElement('div');
  div2.classList.add('card-info');
  div.appendChild(div2);

  let name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = obj.name;
  div2.appendChild(name);

  let username = document.createElement('p');
  username.classList.add('username');
  username.textContent = obj.login;
  div2.appendChild(username);

  let location = document.createElement('p');
  location.textContent = `Location: ${obj.location}`; /* my location on github is null*/
  div2.appendChild(location);

  let profile = document.createElement('p');
  profile.textContent = 'Profile: ';
  div2.appendChild(profile);

  let profileLink = document.createElement('a');
  profileLink.href = `${obj.html_url}`;
  profileLink.textContent = obj.html_url;
  profile.appendChild(profileLink);

  let followers = document.createElement('p');
  followers.textContent = `Followers:  ${obj.followers}`;
  div2.appendChild(followers);

  let following = document.createElement('p');
  following.textContent = 'Following: '+ obj.following;
  div2.appendChild(following);

  let bio = document.createElement('p');
  bio.textContent = 'Bio: '+ obj.bio;
  div2.appendChild(bio);

  return div
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
