import './Offer.scss'
import { Frame } from '../Frame/Frame'

export const Offer = () => {
  return (
    <div className='content'>
        <Frame/>
        <div className='offer-container'>
            <h1>Эта услуга для Вас, если Вы:</h1>
            <div className='offer-container-flex'>
                <div className='offer-box'>
                    <div className='offer-box-text'>
                        <h2>Устали менять таргетологов</h2>
                    </div>
                    <div className='offer-box-list'>
                        <h3>Получите 6 digital специалистов по цене 1 таргетолога:</h3>
                        <ul>
                            <li>✓ Маркетолог</li>
                            <li>✓ Копирайтер</li>
                            <li>✓ Мобилограф</li>
                            <li>✓ Дизайнер</li>
                            <li>✓ Digital маркетолог</li>
                            <li>✓ Таргетолог</li> 
                            <span>+</span>
                            <p>Искусственный Интеллект</p>
                        </ul>
                    </div>
                </div>
                <div className='offer-box'>
                    <div className='offer-box-text'>
                        <h2>Клиенты пишут, но не покупают</h2>
                    </div>
                    <div className='offer-box-list'>
                        <h3>Получайте только качественные заявки, 
                            благодаря нашей собственной методике ультраточного 
                            таргетирования <span>Rocket Power</span>
                        </h3>
                    </div>
                </div>
                <div className='offer-box'>
                    <div className='offer-box-text'>
                        <h2>Цена за лид заоблочна</h2>
                    </div>
                    <div className='offer-box-list'>
                        <h3>Получите в 2 раза больше качественных 
                            лидов за тот же бюджет при помощи американских 
                            стратегий продвижения
                        </h3>
                    </div>
                </div>
            </div>
            <button className='button'>Запустить таргет</button>
        </div>
    </div>
  )
}
