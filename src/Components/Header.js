import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
const Header = () => {
  const[menuOpen,setmenuOpen] = useState(false);

  
  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
      <a className="font-bold text-black hover:text-white" href="https://example.com">
        {" "}
        Jeevanandan N R{" "}
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="https://example.com" className='hover:text-black'>Home</a>{" "}
          </li>
          <li>
            <a href="https://example.com" className='hover:text-black'>About</a>{" "}
          </li>
          <li>
            <a href="https://example.com" className='hover:text-black'>Project</a>{" "}
          </li>
          <li>
            <a href="https://example.com" className='hover:text-black'>Contact</a>{" "}
          </li>
        </ul>
      </nav>
      {menuOpen &&(
        <nav className="block md:hidden">
        <ul className="flex flex-col text-white Mobile-View">
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
      )}
      
      <button onClick={() => setmenuOpen(!menuOpen)} className='block md:hidden'><MenuIcon className='text-white h-5'/></button>
    </header>
  );
};

export default Header;
