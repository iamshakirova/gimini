import './Footer.scss'
import Logo from '../../images/logo.png'
import Instagram from '../../images/icon-inst.png'
import Whatsap from '../../images/icon-wh.png'
import Youtube from '../../images/icon-youtube.png'
import Telegram from '../../images/telegram.png'
import Dot from '../../images/dot.png'
import C from '../../images/c.png'
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className='content'>
        <div className='footer-container'>
            <div className='footer-container-flex'>
                <div className='footer-container-flex-logo'>
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    
                </div>
                <div className='footer-container-flex-navigation'>
                    <nav>
                        <ul>
                            <li><a href="#">Услуги</a></li>
                            <img src={Dot} alt="" />
                            <li><a href="#">Кейсы</a></li>
                            <img src={Dot} alt="" />
                            <li><Link to="/clients">Клиенты</Link></li>
                            <img src={Dot} alt="" />
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='footer-container-flex-media'>
                    <div>
                        <img src={Instagram} alt="" />
                    </div>
                    <div>
                        <img src={Whatsap} alt="" />
                    </div>
                    <div>
                        <img src={Youtube} alt="" />
                    </div>
                    <div>
                        <img src={Telegram} alt="" />
                    </div>  
                </div>
            </div>
            <div className='footer-container-rights'>
                <img src={C} alt="" />
                <p>2023 | Yellow day</p>
                <p>Все права защищены</p>
            </div>
        </div>
    </div>
  )
}
