const LinksSocialMedia = {
  github: 'Douglas-Machado',
  youtube: 'cyborgmc13',
  instagram: 'un_lacky',
  facebook: 'douglasclaudino90',
  twitter: 'cyborgtwt13'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getUserInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  aaaa = fetch(url)
    .then(response => response.json())
    .then(data => {
      userAvatar.src = data.avatar_url
      userName.textContent = data.name
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userBio.textContent = data.bio
    })
}

getUserInfos()
