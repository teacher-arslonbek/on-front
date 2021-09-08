const NavBar = ({ count }) => {
  return (
    <nav className='navbar navbar-light bg-light px-3 justify-content-start'>
      <span className='navbar-brand mb-0 h1'>Navbar</span>
      <span className='badge bg-dark'>{count}</span>
    </nav>
  );
};

export default NavBar;
