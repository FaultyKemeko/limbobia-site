fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("posts");
    posts.forEach(post => {
      if (post.visivel === false) return;
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
        <h2>${post.titulo}</h2>
        <p>${post.resumo}</p>
        <a href="post.html?id=${post.id}" class="link-arquivo">Ver arquivo</a>
      `;
      container.appendChild(div);
    });
  });