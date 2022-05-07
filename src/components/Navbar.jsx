import fish from '../assets/main-color.png';

const Nav = () => {
  return (
    <header>
    <nav>
          <img className="logo" src={fish} />
          <div className="nav-items">
            <span>Networks</span>
            <span>How It Works</span>
            <span>Team</span>
            <span>Jobs</span>
            <span>More</span>
            <span>English</span>
          </div>
        </nav>
        </header>
  )
}

export default Nav;