import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
      <a className="font-bold text-black" href="https://example.com">
        {" "}
        Jeevanandan N R{" "}
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="https://example.com">Home</a>{" "}
          </li>
          <li>
            <a href="https://example.com">About</a>{" "}
          </li>
          <li>
            <a href="https://example.com">Project</a>{" "}
          </li>
          <li>
            <a href="https://example.com">Contact</a>{" "}
          </li>
        </ul>
      </nav>
      <button className='block md:hidden'><MenuIcon className='text-white h-5'/></button>
    </header>
  );
};

export default Header;
