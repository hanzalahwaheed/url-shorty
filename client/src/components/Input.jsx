import React from 'react'

const Input = () => {
  return (
    <div className='container'>
      <form>
        <label>Long Url:</label>
        <input type="text" name="long-url" id="long-url" />
        <button type="submit">Shorty</button>
      </form>
      <form>
        <label>Short Url:</label>
        <input type="text" name="long-url" id="long-url" />
        <button>Copy</button>
      </form>
    </div>
  )
}

export default Input