import './Home.scss'
import { Frame } from '../Frame/Frame'

export const Home = () => {
  return (
    <div className='content'>
      <Frame/>
      <div className="home-container">
        <div className='home-container-blur'>
          <div className='home-container-blur-text'>
            <h1>ГАРАНТИРОВАННЫЙ РОСТ ПРОДАЖ ЗА 2 МЕСЯЦА</h1>
            <p>или следующий месяц БЕСПЛАТНО</p>
            <button>GO!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

