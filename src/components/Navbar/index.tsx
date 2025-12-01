import './index.css'
import Website from '../../assets/icons/website.svg'
import Linkedin from '../../assets/icons/linkedin.svg'

const Header = () => {
    return (
            <nav className="navbar">
                <div className='container'>
                    <div className='navbar-container'>
                        <span className='app-title'>Analisador de Texto</span>
                        <ul className='navbar-links'>
                            <li>
                                <a 
                                    href="https://github.com/" 
                                    target='_blank' 
                                    rel='noreferrer'>
                                    <img src={Website} alt="github icon"/>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://www.linkedin.com/in/andrelluna011000/" 
                                    target='_blank' 
                                    rel='noreferrer'>
                                    <img src={Linkedin} alt="linkedin icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Header;