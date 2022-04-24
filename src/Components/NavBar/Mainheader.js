import NavBar from "./NavBar";
import './Mainheader.css';

const MainHeader = (props) => {
    return (
      <header className={'main-header'}>
        <img src="https://mentorplus.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.0db42e3e.svg&w=384&q=75" alt="logo"></img>
        <NavBar/>
      </header>
    );
  };
  
  export default MainHeader;