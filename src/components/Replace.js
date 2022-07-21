import { useState } from 'react'

export const updateInput = () => {}

function Replace() {
  const [stringValue, setStringValue] = useState('');

  

  return (
    <form>
      <div>
        <label>Search</label>
        <input placeholder="Search strings..." value={stringValue} />
      </div>
      <div>
        <label>Replace</label>
        <input placeholder="Replace strings..." value={stringValue} />
      </div>
      <button></button>
    </form>
  )
}

export default Replace