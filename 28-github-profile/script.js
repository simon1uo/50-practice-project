const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("search-form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);

    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created");

    addReposToCard(data);
  } catch {
    createErrorCard("No Repos with this username");
  }
}

function createUserCard(user) {
  const userId = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : "";
  const cardHTML = `
  <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      </div>

      <div class="user-info">
        <h2>${userId}</h2>
        ${userBio}
        <ul>
          <li>${user.followers} <strong>followers</strong></li>
          <li>${user.following} <strong>following</strong></li>
          <li>${user.public_repos} <strong>repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card"> 
      <h1>${msg}</h1>
    </div>
  `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = search.value;

  if (username) {
    getUser(username);
    search.value = "";
  }
});
