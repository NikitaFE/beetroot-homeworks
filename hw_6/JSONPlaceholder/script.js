const URL = "https://jsonplaceholder.typicode.com/"
const postsTail = "posts";
const usersTail = "users";
const output = document.getElementById("output");
const spinner = document.getElementById('spinner');

output.innerHTML = "Loading ...";

const getData = (URL, tile) => {
  return fetch(URL + tile); 
};

const postToHtml = (title, body, id) => {
  return `<li>
    <h2>${title}</h2>
    <p>${body}</p>
    <a href="#" data-id="${id}">User</a>
  </li>`
};

const renderPosts = data => {
  let allPosts = '';

  for(let i = 0; i < 10; i++) {
    const {title, body, id} = data[i];
    allPosts += postToHtml(title, body, id);
  }

  return allPosts;
};

const renderUserInfo = (user, userId) => {
  const [{name, username, email}] = user;
  const userInfo = document.createElement('ul');
  userInfo.id = `user${userId}`;

  userInfo.innerHTML = `<li>${name}</li><li>${username}</li><li><a href="mailto:${email}">${email}</a></li>`;

  return userInfo;
}

const onUserLinkClick = (e) => {
  e.preventDefault();
  const {target} = e;
  const userId = target.dataset.id;
  let infoBlock = document.querySelector(`user${userId}`);
  console.log(infoBlock);
  //  Вот тут шалость не удалась
  if(!infoBlock) {
    const parentPost = target.parentNode;
    const userTail = `${usersTail}?id=${userId}`;
    const userData = getData(URL, userTail);
    
    userData
      .then(res => res.json())
      .then(user => renderUserInfo(user, userId))
      .then(userInfo => parentPost.appendChild(userInfo));
  } else {
    infoBlock.remove();
  }
}

const fillUserInfo = userLink => {
  userLink.addEventListener('click', onUserLinkClick);
} 

const fillList = () => {
  const data = getData(URL, postsTail);

  data
    .then(res => res.json())
    .then(posts => renderPosts(posts))
    .then(allPosts => output.innerHTML = allPosts)
    .then(() => {
      const usersLinks = document.querySelectorAll('li > a');
      
      usersLinks.forEach(link => fillUserInfo(link));
    })
};

fillList();