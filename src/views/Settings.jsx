import '../style/settings.sass'
import ContentContainer from '../components/ContentContainer/ContentContainer'
import scooter from '../assets/imgs/scooter.svg'
import Header from '../components/Header/Header'
import SettingsMenu from '../components/SettingsMenu/SettingsMenu'



function Settings() {

    return (
        <ContentContainer variant="purple">
            <img className='settings-background-img' src={scooter} alt="" />
            <Header variant="settings"></Header>
            <SettingsMenu />
            <p className='version'>Version 10.0.1</p>
        </ContentContainer>
    )
}

export default Settings
