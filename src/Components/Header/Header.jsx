import Avatar from '../Avatar/Avatar';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import './Header.scss';
import Button from '../Button/Button'
import upload from '../../assets/Icons/upload.svg';
import search from '../../assets/Icons/search.svg';

function Header() {
    const uploadLogo = upload;
    return (
        <header className='header'>
            <a className='header__logo' href=''><img src={logo} alt='site-logo'></img></a>
            <input type='text' className='header__searchBar'></input>
            <Avatar />
            <Button className='header__upload button' name='upload' src={uploadLogo} spanClass='button__text'/>  
        </header>
    )
}

export default Header 