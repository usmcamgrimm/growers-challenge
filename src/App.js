import './App.css';
import '@fontsource/inter'
import './styles.css'
import Text from './components/Text'
import Replace from './components/Replace'

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Growers Code Challenge
        </h1>
      </header>
      <Text />
      <Replace />
    </div>
  )
}

export default App
