import './Result.scss'
import { Frame } from '../Frame/Frame'


export const Results = () => {
  return (
    <div className='content'>
        <Frame/>
        <div className='result-container'>
            <h1>Для быстрого и качественного результата Вы получите:</h1>
            <div className='result-container-flex'>
                <div className='result-container-flex-box'>
                    <p>Ежедневный мониторинг Ваших показателей</p>
                </div>
                <div className='result-container-flex-box'>
                    <p>Ежемесячный отчет о проделанной работе и результатах</p>
                </div>
                <div className='result-container-flex-box'>
                    <p>Медиа - план под Ваш бюджет: прогнозирование количества заявок</p>
                </div>
                <div className='result-container-flex-box'>
                    <p>97%-ное улучшение точности рекламы с помощью алгоритмов Искусственного Интеллекта</p>
                </div>
                <div className='result-container-flex-box'>
                    <p>Реальный результат, благодаря применению американских стратегий продвижения</p>
                </div>
            </div>
        </div>
    </div>
  )
}
