import '../style/app.sass'
import ContentContainer from '../components/ContentContainer/ContentContainer'
import Header from '../components/Header/Header'
import UpdateMessage from '../components/UpdateMessage/UpdateMessage'
import StatusSection from '../components/StatusSection/StatusSection'


function App() {

  return (
    <ContentContainer>
      <Header></Header>
      <UpdateMessage></UpdateMessage>
      <StatusSection></StatusSection>
    </ContentContainer>
  )
}

export default App
