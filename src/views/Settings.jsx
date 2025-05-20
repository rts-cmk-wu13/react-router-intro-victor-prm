import '../style/settings.sass'
import ContentContainer from '../components/ContentContainer/ContentContainer'
import scooter from '../assets/imgs/scooter.svg'
import Header from '../components/Header/Header'



function Settings() {

    return (
        <ContentContainer variant="purple">
            <img className='settings-background-img' src={scooter} alt="" />
            <Header variant="settings"></Header>
        </ContentContainer>
    )
}

export default Settings
