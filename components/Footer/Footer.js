import './Footer.css'

const template = () => {
  return `
    <footer>
      <ul>
        <div class="footer-icons">
          <img src="assets/home.svg" alt="home" />
          <img src="assets/search.svg" alt="search" />
          <img src="assets/bell.svg" alt="notification" />
          <img src="assets/comment.svg" alt="comment" />
          <img src="assets/user.svg" alt="user" />
        </div>
      </ul>
    </footer>
  `
}

const Footer = () => {
  return template()
}

export default Footer
