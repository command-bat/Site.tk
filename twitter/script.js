const login = document.getElementById('login');
const registro = document.getElementById('registro');

login.addEventListener('click', () => {
  window.location.href = 'login';
});

registro.addEventListener('click', () => {
  window.location.href = 'registro';
});

firebase.auth().onAuthStateChanged(function(user) {
  const divDeslogado = document.getElementById('deslogado');
  const divLogado = document.getElementById('logado');

  if (user) {
    divDeslogado.style.display = 'none';
    divLogado.style.display = 'block';
    displayAllUserPosts();
  } else {
    divDeslogado.style.display = 'block';
    divLogado.style.display = 'none';
  }
});


function displayAllUserPosts() {
  // Referência ao banco de dados do Firebase
  const database = firebase.database();

  // Referência ao feed na página
  const timeline = document.getElementById('timeline');

  // Limpar o feed antes de exibir os posts
  timeline.innerHTML = '';

  // Array to hold all posts
  const allPosts = [];

  // Get all user posts
  const usersRef = database.ref('users');

  usersRef.once('value', function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
      const userId = userSnapshot.key;
      const postsRef = database.ref('users/' + userId + '/posts');

      postsRef.orderByChild('timestamp').on('child_added', function(postSnapshot) {
        const post = postSnapshot.val();
        const userPhotoUrl = "https://firebasestorage.googleapis.com/v0/b/twitter-ee749.appspot.com/o/" + userId + "%2Favatar.png?alt=media";
        allPosts.push({ post, userPhotoUrl });
        // After each post is added, sort the timeline for this user
        allPosts.sort((a, b) => b.post.timestamp - a.post.timestamp);
        // Display the sorted posts in the timeline
        timeline.innerHTML = ''; // Clear the timeline
        allPosts.forEach(({ post, userPhotoUrl }) => {
          const tweetItem = createTweetItem(post, userPhotoUrl);
          timeline.appendChild(tweetItem);
        });
      });
    });
  });
}




function postTweet() {
  const tweetInput = document.getElementById("tweetInput");
  const tweetText = tweetInput.value;

  if (tweetText.trim() === "") {
    alert("Please enter a valid tweet.");
    return;
  }

  const user = firebase.auth().currentUser;
  if (!user) {
    return;
  }

  // Referência ao banco de dados do Firebase
  const database = firebase.database();

  // Referência à coleção de posts do usuário
  const userPostsRef = database.ref('users/' + user.uid + '/posts');

  // Crie um novo post para o usuário
  const newPostRef = userPostsRef.push();
  newPostRef.set({
    text: tweetText,
    userName: user.displayName,
    userUid: user.uid, // Add user's UID to identify the user
    timestamp: firebase.database.ServerValue.TIMESTAMP
  });

  // Limpar o input
  tweetInput.value = "";
}

function createTweetItem(post, userPhotoUrl) {
  const tweetItem = document.createElement("div");
  tweetItem.classList.add("timeline-item");

  const userPhoto = document.createElement("img");
  userPhoto.src = userPhotoUrl;
  userPhoto.alt = "User Photo";
  userPhoto.classList.add("small-user-photo");
  tweetItem.appendChild(userPhoto);

  const userName = document.createElement("span");
  userName.textContent = post.userName;
  tweetItem.appendChild(userName);

  // Fetch the user's username from the database using user UID
  const database = firebase.database();
  const userRef = database.ref('users/' + post.userUid);
  userRef.once('value', function(snapshot) {
    const userData = snapshot.val();
    if (userData && userData.username) {
      userName.textContent = userData.username; // Update the username in the timeline item
    }
  });

  const tweetText = document.createElement("p");
  tweetText.textContent = post.text;
  tweetItem.appendChild(tweetText);

  return tweetItem;
}

