import React from "react";

function PasswordForm(props) {

  const {options, setOptions} = props;

  const handleCheckboxChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: e.target.checked
    });
  }

  const handleChange = (e) => {
    if(e.target.value < 1) {
      e.target.value = 1;
      return;
    }

    if(e.target.value > 50) {
      e.target.value = 50;
      return;
    }
    setOptions({
      ...options,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form">
      <h2 className="border-bottom">Configuration</h2>
      <div className="column">
          <div className="row" >            
            <label style={{width:'75%'}}>Length</label>
            <input type="number" value={options.length} onChange={handleChange} name='length' style={{width:'25%'}} />
          </div>
          <input
            type="range"
            min ="1" max="50"
            value={options.length}
            onChange={handleChange}
            name='length'
          />
        </div>
      <div className="row">
        
        <div className="column">
          <label>
            <input type="checkbox" checked = {options.lowercase} name='lowercase' onChange={handleCheckboxChange}/>
            Lowercase
          </label>
          <label>
            <input type="checkbox" checked = {options.uppercase} name='uppercase' onChange={handleCheckboxChange}/>
            Uppercase
          </label>
        </div>

        <div className="column">
          <label>
            <input type="checkbox" checked = {options.numbers} name='numbers' onChange={handleCheckboxChange}/>
            Numbers
          </label>
          <label>
            <input type="checkbox" checked = {options.symbols} name='symbols' onChange={handleCheckboxChange}/>
            Symbols
          </label>
        </div>
        
      </div>
    </div>
  );
}

export default PasswordForm;
