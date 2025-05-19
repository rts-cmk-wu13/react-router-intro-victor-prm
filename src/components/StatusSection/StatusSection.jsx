import './StatusSection.sass'
import lockIcon from '../../assets/icons/lock.svg'
import { useEffect, useState } from 'react'
import StatusCard from './StatusCard'

export default function StatusSection() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/StatusCards.json")
      .then(response => response.json())
      .then(result => setData(result))
  }, [])

  return (
    <>
      <section className='status-section'>
        <div className='scooter-lock'>
          <div className='scooter-lock__text-wrapper'>
            <h2>Whitney’s Scooter</h2>
            <p>Locked</p>
          </div>
          <button className='scooter-lock__button'>
            <img className='scooter-lock__icon' src={lockIcon} alt="" />
          </button>
        </div>

        {data?.cards.map((card, index) => (
          <StatusCard key={index} card={card} index={index} />
        ))}

      </section>
    </>
  )
}