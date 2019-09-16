/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// const githubData = ((username) => {
//   axios.get('https://api.github.com/users/' + username)
//     .then((results) => {
//       return results;
//     });
// });


  // axios.get('https://api.github.com/users/' + 'hisnameisjimmy')
  //   .then((results) => {
  //     return results;
  //   });




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

const newCard = (githubData) => {
  const
    card = document.createElement('div'),
    cardImage = document.createElement('img'),
    cardInfo = document.createElement('div'),
    cardName = document.createElement('h3'),
    cardUsername= document.createElement('p'),
    cardLocation = document.createElement('p'),
    cardProfile = document.createElement('p'),
    cardProfileLink = document.createElement('a'),
    cardFollowers = document.createElement('p'),
    cardFollowing = document.createElement('p'),
    cardBio = document.createElement('p');

  cardImage.src = githubData.avatar_url;
  cardName.textContent = githubData.name;
  cardUsername.textContent = githubData.login;
  cardLocation.textContent = `Location: ${githubData.location}`;
  cardProfileLink.setAttribute('href', githubData.html_url);
  cardProfileLink.textContent = githubData.html_url;
  cardProfile.textContent = `Profile: `;
  cardFollowers.textContent = `Followers: ${githubData.followers}`;
  cardFollowing.textContent = `Following: ${githubData.following}`;
  cardBio.textContent = `Bio: ${githubData.bio}`;

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUsername.classList.add('username');
  cardUsername.classList.add('username');
  
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUsername);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(cardProfileLink);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  return card;
}

cardUsers = ['hisnameisjimmy', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

// cardUsers = ['hisnameisjimmy'];

// const renderCards = cardUsers.forEach((name) => {
//   axios.get('https://api.github.com/users/' + name)
//     .then((results) => {
//       //return results;
//       newCard(results);
//     });
// });

const card = document.querySelector('.cards');

// const jimmy = axios.get('https://api.github.com/users/hisnameisjimmy')
//     .then((results) => {
//       return results;
//     });

cardUsers.forEach((user) => {
  axios.get('https://api.github.com/users/' + user)
    .then((results) => {
      //console.log(results);
      // for (i = 0; i < results.length; i++){
      //   card.appendChild(newCard(results.[i]));
      // }
      // Object.keys(results).forEach((element) => {
      //   card.appendChild(newCard(element));
      // }); 
        card.appendChild(newCard(results.data));
    });
}); 

// jimmy.forEach((element) => {
//   card.appendChild(newCard(element));
// }); 

// card.appendChild(newCard(user));


// const jimmy = [{
//   "login": "hisnameisjimmy",
//   "id": 740373,
//   "node_id": "MDQ6VXNlcjc0MDM3Mw==",
//   "avatar_url": "https://avatars3.githubusercontent.com/u/740373?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/hisnameisjimmy",
//   "html_url": "https://github.com/hisnameisjimmy",
//   "followers_url": "https://api.github.com/users/hisnameisjimmy/followers",
//   "following_url": "https://api.github.com/users/hisnameisjimmy/following{/other_user}",
//   "gists_url": "https://api.github.com/users/hisnameisjimmy/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/hisnameisjimmy/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/hisnameisjimmy/subscriptions",
//   "organizations_url": "https://api.github.com/users/hisnameisjimmy/orgs",
//   "repos_url": "https://api.github.com/users/hisnameisjimmy/repos",
//   "events_url": "https://api.github.com/users/hisnameisjimmy/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/hisnameisjimmy/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Jimmy Hooker",
//   "company": null,
//   "blog": "",
//   "location": "United States",
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "public_repos": 26,
//   "public_gists": 6,
//   "followers": 4,
//   "following": 3,
//   "created_at": "2011-04-20T01:35:08Z",
//   "updated_at": "2019-09-13T22:03:26Z"
// }];

// jimmy.forEach((element) => {
//   card.appendChild(newCard(element));
// }); 


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
