import './StatusSection.sass'
import lockIcon from '../../assets/icons/lock.svg'

export default function StatusSection() {
    return (
        <>
            <section className='status-section'>
                <div className='scooter-lock'>
                    <div className='scooter-lock__text-wrapper'>
                        <h2>Whitney’s Scooter</h2>
                        <p>Locked</p>
                    </div>
                    <button className='scooter-lock__button'><img  className='scooter-lock__icon' src={lockIcon} alt="" /></button>
                </div>
            </section>
        </>
    )
}