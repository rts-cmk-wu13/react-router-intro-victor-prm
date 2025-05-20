import './SettingsItem.sass'
import { NavLink } from 'react-router';

export default function SettingsItem({data}) {

    return (
       <li className='settings-menu__item'>
           <NavLink to={data.href}>{data.title}</NavLink>
       </li>
    )
}