import './Main.css'

const accessKey = 'F_PCzkpxBPaTPZe2t17mds9QBpMfEFjVLwdz3CUlUCM'

let currentPage = 1
let currentQuery = ''
const photosSet = new Set() // Set to keep track of unique photo IDs

async function fetchPhotos(query, page) {
  try {
    let url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=20`
    if (query) {
      url = `https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${query}&page=${page}&per_page=20`
    }
    const response = await fetch(url)
    const data = await response.json()
    const photos = query ? data.results : data
    displayPhotos(photos)
  } catch (error) {
    console.error('Error fetching photos:', error)
  }
}

function displayPhotos(photos) {
  const photosContainer = document.getElementById('photos')

  // Clear previous messages or photos
  const noPhotosMessage = photosContainer.querySelector('.no-photos-message')
  if (noPhotosMessage) {
    noPhotosMessage.remove()
  }

  if (photos.length === 0) {
    const noPhotosMessage = document.createElement('p')
    noPhotosMessage.classList.add('no-photos-message')
    noPhotosMessage.textContent =
      'Ooooops, no photos found! Try a new search...'
    photosContainer.appendChild(noPhotosMessage)
    return
  }

  photos.forEach((photo) => {
    if (!photosSet.has(photo.id)) {
      photosSet.add(photo.id) // Add photo ID to avoid duplicates
      const card = document.createElement('div')
      card.classList.add('card')

      card.innerHTML = `
                <img src="${photo.urls.small}" alt="${photo.alt_description}">
                <div class="card-content">
                    <p>Photo by <a href="${
                      photo.user.links.html
                    }" target="_blank">${photo.user.name}</a></p>
                    <p>Published on ${new Date(
                      photo.created_at
                    ).toLocaleDateString()}</p>
                    <a href="${photo.links.html}" target="_blank">Visit</a>
                </div>
            `
      photosContainer.appendChild(card)
    }
  })
}

function observeScrollEnd() {
  const scrollEnd = document.getElementById('scroll-end')
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      currentPage++
      fetchPhotos(currentQuery, currentPage)
    }
  })
  observer.observe(scrollEnd)
}

export const addMainListeners = () => {
  document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      currentQuery = e.target.value
      currentPage = 1
      photosSet.clear()
      document.getElementById('photos').innerHTML = '' // Clear existing photos
      fetchPhotos(currentQuery, currentPage)
      document.getElementById('search-input').value = '' // Clear the search input field
    }
  })

  // Add event listener to the logo to reset the page
  document.querySelector('.logo a').addEventListener('click', (e) => {
    e.preventDefault() // Prevent the default action of the link
    resetPage()
  })

  // Initial fetch and set up scroll observer
  fetchPhotos(currentQuery, currentPage)
  observeScrollEnd()
}

function resetPage() {
  currentQuery = ''
  currentPage = 1
  photosSet.clear()
  document.getElementById('search-input').value = ''
  document.getElementById('photos').innerHTML = '' // Clear existing photos
  fetchPhotos(currentQuery, currentPage)
}

const template = () => {
  return `
    <main>
      <div id="photos"></div>
    </main>
  `
}

const Main = () => {
  return template()
}

export { Main }
