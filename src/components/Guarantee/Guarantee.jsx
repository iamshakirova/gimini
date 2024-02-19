import './Guarantee.scss'
import Algoritms from '../../images/Group2361.png'
import Rocket from '../../images/Group2362.png'
import Strategy from '../../images/Group2363.png'
import { Frame } from '../Frame/Frame';

export const Guarantee = () => {
  return (
    <div className='content'>
        <Frame/>
        <div className="guarantee-container">
            <h1>Почему мы можем гарантировать Вам результат:</h1>
            <div className='guarantee-container-flex'>
                <div className='guarantee-container-flex-box'>
                    <img src={Algoritms} alt="" />
                    <p>Применяем алгоритмы Исскусственного 
                        Интеллекта для точного таргетинга</p>
                </div>
                <div className='guarantee-container-flex-box'>
                    <img src={Rocket} alt="" />
                    <p>Внедряем собственную методику продвижения
                        Rocket Power</p>
                </div>
                <div className='guarantee-container-flex-box'>
                    <img src={Strategy} alt="" />
                    <p>Используем проверенные американские стратегии</p>
                </div>
            </div>
            <button className='button'>Запустить таргет</button>
        </div>
    </div>
  )
}
