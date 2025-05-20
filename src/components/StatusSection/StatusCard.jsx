import './StatusCard.sass'
import { getIcon } from '../../utils'

export default function StatusCard({ data, index }) {
    return (
        <article className={`status-card status-card--${1+index}`}>
            <h3 className='status-card__title'>{data.title}</h3>
            <img className='status-card__icon'src={getIcon(data.icon)} alt="" />
            <p className='status-card__text'>{data.text}</p>
        </article>
    )
}