let jsonResult = ''

const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Submitted')
    const usernameInput = document.querySelector('#usernameInput')
    const username = usernameInput.value

    fetch(`https://api.github.com/users/${username}/repos`)
        .then((result) => result.json())
        .then((jsonResult) => {
            const repoListElement = document.querySelector('.repoContainer')

            repoListElement.innerHTML = ''

            jsonResult.map(generateCard).forEach((card) => {
                repoListElement.appendChild(card)
            })
        })
}

const repoResult = {
    id: 618051437,
    name: 'curly-robot',
    full_name: 'mowglixx/curly-robot',
    owner: {
        login: 'mowglixx',
        avatar_url: 'https://...', // image
        html_url: 'https://github.com/mowglixx',
    },
    html_url: 'https://github.com/mowglixx/curly-robot',
    updated_at: '2023-03-22T20:47:21Z',
    default_branch: 'main',
}

const generateCard = (repo) => {
    // creating all the Elements we will require
    const repoCard = document.createElement('div')
    const topRow = document.createElement('div')
    const bottomRow = document.createElement('div')
    const topRowLeftCol = document.createElement('div')
    const topRowRightCol = document.createElement('div')
    const topRowRightColRepoNameH2 = document.createElement('h2')
    const topRowRightColRepoOwnerH3 = document.createElement('h3')
    const repoCardDisplayPicture = document.createElement('img')

    // add classes to all elements that need one
    repoCard.classList.add('repoCard')
    topRow.classList.add('flexRow')
    bottomRow.classList.add('flexRow')
    topRowLeftCol.classList.add('flexCol')
    topRowRightCol.classList.add('flexCol')
    repoCardDisplayPicture.classList.add('repoCardDisplayPicture')

    topRowRightColRepoNameH2.textContent = repo.name
    topRowRightColRepoOwnerH3.textContent = repo.owner.login
    repoCardDisplayPicture.setAttribute('src', repo.owner.avatar_url)

    // append children to required elements
    repoCard.appendChild(topRow)
    repoCard.appendChild(bottomRow)

    topRowLeftCol.appendChild(repoCardDisplayPicture)

    topRowRightCol.appendChild(topRowRightColRepoNameH2)
    topRowRightCol.appendChild(topRowRightColRepoOwnerH3)

    // return the card to potentially an array
    return repoCard
}

const formContainer = document.querySelector('#formContainer')

formContainer.addEventListener('submit', handleSubmit)
