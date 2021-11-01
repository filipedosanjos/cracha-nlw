const linksSocialMedia = {
  nome: "Jakeliny Gracielly",
  github: 'jakeliny',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}

function getGitHubProfileUsers() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userName.textContent = data.name
      userGitName.textContent = data.login
      userGitLink.href = data.html_url
      userBio.textContent = data.bio
    })
}

function changeSocialMediaLinks() {
  let li
  for (li of socialLinks.children) {
    const social = li.getAttribute("class")
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

function changeData() {
  alert(`O sistema irá alterar o nome, link do perfil Github e bio do usuário de 
acordo com os dados disponibilizados pela Api do Github do(a) usuário(a):
${linksSocialMedia.nome}

Além disso, serão alterados os links das redes sociais do usuário.`)

  getGitHubProfileUsers()
  changeSocialMediaLinks()
  document.getElementById('button').remove()
}