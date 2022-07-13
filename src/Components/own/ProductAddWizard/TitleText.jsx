import React from 'react'

const TitleText = () => {
  return (
    <div>
        <div className="input">
            <label htmlFor="">Title</label>
            <input type="text" />
        </div>
        <div className="input">
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      <div className="input">
        <label htmlFor="">Price</label>
      <div className="input_unit">
            <input type="text" />
            <div>
            €
            </div>
        </div>
      </div>
    </div>
  )
}

export default TitleText