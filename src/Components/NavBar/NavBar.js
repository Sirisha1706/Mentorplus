import './NavBar.css';
const NavBar = props =>{
    return (
        <nav className={'nav'}>
            <ul>
                <li><label className='mystyle'>Home</label></li>
                <li><label>Plans & Pricing</label></li>
                <li><label className='mystyle'>FAQ's</label></li>
                <li><label className='mystyle'>Contact us</label></li>
                <li><button type='button'>SignUp</button></li>
                <li><button type='button'>Login</button></li>

            </ul>
        </nav>
    );
}

export default NavBar;