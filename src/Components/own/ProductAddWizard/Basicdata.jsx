import React from "react";

const Basicdata = () => {
  return (
    <div className="flex">
      <div className="input">
        <label htmlFor="">Genre</label>
        <select name="" id="">
          <option value="">Select</option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>

      <div className="input">
        <label htmlFor="">Production Year</label>
        <input type="text" />
      </div>
      <div className="inputs" style={{justifyContent:"space-around"}} >
        <div className="flex align-items-center" >
        <input type="checkbox" />
        <label htmlFor="" className="label"  >Approximate Year</label>
        </div>
        <div className="flex align-items-center" >
        <input type="checkbox"/>
        <label htmlFor=""   className="label" >Not Available</label>
        </div>
        
      
      </div>
      <div className="inputs">
        <div className="input">
          <label htmlFor="">Diameter</label>
          <div className="input_unit">
            <input type="text" />
            <div>MM</div>
          </div>
        </div>
        <div className="input">
            <label htmlFor="">Water Resistance</label>
          <div className="input_unit">
            <input type="text" />
            <div>MT</div>
          </div>
        </div>
      </div>
     
      <div className="input">
        <label htmlFor="">Movement</label>
        <select name="" id="">
            <option value="">option</option>
            <option value="">option</option>
            <option value="">option</option>
        </select>
      </div>
      <h4>Details</h4>
     <p>These are optional data</p>
      <div className="input">
        <select className="optional" name="" id="">
            <option value="">Case material</option>
        </select>
      </div>
      <div className="input ">
        <select className="optional" name="" id="">
            <option value="">bracelet MATERIAL</option>
        </select>
      </div>
      <div className="input ">
        <select className="optional" name="" id="">
            <option value="">CRYSTAL</option>
        </select>
      </div>

      <div className="input ">
        <select className="optional" name="" id="">
            <option value="">DIAL COLOR AND FINISH</option>
        </select>
      </div>
      <div className="input ">
        <select className="optional" name="" id="">
            <option value=""> INDEXES AND HANDS</option>
        </select>
      </div>
    </div>
  );
};

export default Basicdata;