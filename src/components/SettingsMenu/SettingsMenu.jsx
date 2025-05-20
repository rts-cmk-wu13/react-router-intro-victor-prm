import './SettingsMenu.sass'
import SettingsItem from './SettingsItem'
import { useEffect, useState } from 'react'

export default function SettingsMenu(props) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("/SettingsItems.json")
            .then(response => response.json())
            .then(result => setData(result))
    }, [])

    return (
        <nav className='settings-menu'>
            <ul className='settings-menu__list'>
                {data?.settingsItems.map((obj, index) => (
                    <SettingsItem key={index} data={obj} index={index} />
                ))}
            </ul >
        </nav>

    )
}