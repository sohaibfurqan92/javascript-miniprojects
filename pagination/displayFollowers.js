const display = (followers) => {
  const container = document.querySelector('.container');

  container.innerHTML = '';
  followers.forEach((follower) => {
    const { avatar_url, login, html_url } = follower;

    container.innerHTML += `<article class="card">
    <img src=${avatar_url} alt="${login}"/>
    <h4>${login}</h4>
    <a href="${html_url}" class="btn">View Profile</a>
    </article>`;
  });
};

export default display;
