import './Header.css'

const template = () => {
  return `
    <header>
      <div class="logo">
        <a href="#"><img src="assets/PhotozyLogo.png" alt="Logo" /></a>
      </div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Create</a></li>
        <li><a href="#">Explore</a></li>
      </ul>
      <div id="search-bar">
        <div class="search-container">
          <img src="assets/search.svg" alt="Search Icon" class="search-icon" />
          <input type="text" id="search-input" placeholder="Search photos..." />
        </div>
      </div>
      <div class="icons">
        <img src="assets/bell.svg" alt="notification" />
        <img src="assets/comment.svg" alt="comment" />
        <img src="assets/user.svg" alt="user" />
      </div>
    </header>
  `
}

const Header = () => {
  return template()
}

export default Header
