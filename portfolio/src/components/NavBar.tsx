const NavBar = () => {
  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <ul className="navBar">
      <li>
        <a onClick={toTop}>About Me</a>
      </li>
      <li>
        <a href="#section-2">Projects</a>
      </li>
      <li>
        <a href="#section-3">Skills</a>
      </li>
      <li>
        <a href="https://drive.google.com/file/d/1QhJTvS3SDBrWhqCu2aMm8RB4jxycOnZE/view?usp=sharing">
          Resume
        </a>
      </li>
      <li>
        <a href="#section-4">Contact</a>
      </li>
    </ul>
  );
};

export default NavBar;
