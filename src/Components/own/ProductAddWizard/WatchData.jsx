import React from "react";

const WatchData = () => {
  return (
    <div>
      <div className="input">
        <label htmlFor="">Brand</label>
        <select name="" id="">
          <option value="">Rolex</option>
          <option value="">Cartier</option>
        </select>
      </div>
      <div className="input">
        <label htmlFor="">Model</label>
        <select name="" id="">
          <option value="">Select</option>
        </select>
      </div>
      <div className="input">
        <label htmlFor="">Reference Number</label>
        <input type="text" />
      </div>
      <div className="input">
        <label htmlFor="">Condition</label>
        <select name="" id="">
          <option value="">Excellent</option>
        </select>
      </div>
      <div className="input">
        <label htmlFor="">Delivered With</label>
        <select name="" id="">
          <option value="">Full Box</option>
        </select>
      </div>
    </div>
  );
};

export default WatchData;
