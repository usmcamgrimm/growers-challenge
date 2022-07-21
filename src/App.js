import { useState } from 'react'
import './App.css';
import '@fontsource/inter'
import './styles.css'

function App() {
  const [searchString, setSearchString] = useState('');
  const [stringValue, setStringValue] = useState('');

  const searchInput = (e) => {
    const lowerCase = e.target.vaslue.toLowerCase()
    setStringValue(lowerCase)
  }

  const replaceValue = (e) => {
    const lowerCase = e.target.vaslue.toLowerCase()
    setStringValue(lowerCase)
  } 

  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <header>
        <h1>
          Growers Code Challenge
        </h1>
      </header>
      <div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Urna porttitor rhoncus dolor purus non. Sagittis purus sit amet volutpat consequat mauris. Eget nullam non nisi est sit amet facilisis. Elementum pulvinar etiam non quam lacus suspendisse. Posuere urna nec tincidunt praesent. Maecenas pharetra convallis posuere morbi leo. Orci eu lobortis elementum nibh. Aliquet nec ullamcorper sit amet risus. Eget magna fermentum iaculis eu. Ut faucibus pulvinar elementum integer enim.
        </p>
      </div>
      <form>
        <div>
          <label>Replace </label>
          <input className="searchString" />
          {' '}with{' '}
          <label>this string: </label>
          <input className="stringValue" />
        </div>
        <button 
          onClick={handleClick}
          className="replaceButton">
            Replace Strings
        </button>
      </form>
      <div className="stringList">
        <p>{stringValue}</p>
      </div>
    </div>
  )
}

export default App
