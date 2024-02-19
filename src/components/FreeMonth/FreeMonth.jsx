import './FreeMonth.scss';
import { Frame } from '../Frame/Frame';

export const FreeMonth = () => {
  return (
    <div className='content'>
      <Frame/>
        <div className='freeMonth-container'>
          <div className='freeMonth-container-blur'></div>
            <div className='freeMonth-container-blur-text'>
                <h1>ПОЛУЧИТЕ 1 МЕСЯЦ УСЛУГИ БЕСПЛАТНО!</h1>
                <p>Если мы не достигнем установленных <br /> результатов за 2 месяца</p>
            </div>
        </div>
    </div>
  )
}
