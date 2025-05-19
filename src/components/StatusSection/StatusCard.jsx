import './StatusCard.sass'
import { getIcon } from '../../utils'

export default function StatusCard({ card, index }) {
    return (
        <article className={`status-card status-card--${1+index}`}>
            <h3 className='status-card__title'>{card.title}</h3>
            <img className='status-card__icon'src={getIcon(card.icon)} alt="" />
            <p className='status-card__text'>{card.text}</p>
        </article>
    )
}