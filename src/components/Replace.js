import { useState } from 'react'

export const updateInput = () => {}

function Replace() {
  const handleChange={}

  return (
    <form>
      <div>
        <label>Search</label>
        <input placeholder="Search strings..." />
      </div>
      <div>
        <label>Replace</label>
        <input placeholder="Replace strings..." />
      </div>
      <button onClick={handleChange}>Replace Strings</button>
    </form>
  )
}

export default Replace