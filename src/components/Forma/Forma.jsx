import './Forma.scss'
import { Frame } from '../Frame/Frame'

export const  Forma = ()  => {
  return (
    <div className='content'>
        <Frame/>
        <div className='forma-container'>
            <div className='forma-container-inner'>
                <form>
                    <h1>Еще остались сомнения?</h1>
                    <p>Оставь заявку и получи бесплатный чек-лист на проверку своего таргетолога</p>
                    <div className='forma-container-inner-input'>
                        <input type="text" name='name' placeholder='Имя' />
                        <input type="number" name='phone' placeholder='+7 (777) 777 77 77'/>
                    </div>
                    <button className='button' type='button'>Оставить заявку</button>
                </form>
            </div>
        </div>
    </div>
  )
}
