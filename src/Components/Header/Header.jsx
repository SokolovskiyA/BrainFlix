import Avatar from '../Avatar/Avatar';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import './Header.scss';
import upload from '../../assets/Icons/upload.svg';
import { Link } from 'react-router-dom'
import avatar from '../../assets/Images/Mohan-muruge.jpg'



function Header() {
    return (
        <header className='header'>
            <Link className='header__logo' to='/'><img className='header__logo-img' src={logo} alt='site-logo'/></Link>
            <input type='text' className='header__searchBar' placeholder='Search'></input>
            <Avatar className='header__avo-container' avatar={avatar}/>
            <Link className='header__upload button' to='/upload'><img alt='button-logo' src={upload}/><span className="button__text">Upload</span></Link>
        </header>
    )
}

export default Header 