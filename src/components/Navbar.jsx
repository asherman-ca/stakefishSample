import mainColorLogo from '../assets/main-color.png';

const Nav = () => {
  return (
    <header>
      <nav>
        <img className="nav-logo" src={mainColorLogo} alt="main logo" />
        <div className="nav-items">
          <span>Networks</span>
          <span>How It Works</span>
          <span>Team</span>
          <span>Jobs</span>
          <span><i className="fa-solid fa-ellipsis" ></i>More</span>
          <span><i className="fa-solid fa-globe" ></i>English</span>
        </div>
        <div className="nav-menu">
          <span />
          <span />
        </div>
      </nav>
    </header>
  )
}

export default Nav;