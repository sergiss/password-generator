import React, { Fragment } from "react";

function PasswordView(props) {
  const { password, score, generate } = props;

  const getProgressBarStyle = (score) => {
    let bg;
    if (score > 75) bg = "bg-green";
    else if (score > 50) bg = "bg-blue";
    else if (score > 25) bg = "bg-yellow";
    else bg = "bg-red";
    return `progress-bar ${bg}`;
  };

  return (
    <Fragment>
      <div className="pwd-container">
        <div className="row">
          <h2 className="password">{password}</h2>
          <div className="row buttons">
            { window.isSecureContext ? 
              (<button className="btn btn-red" onClick={(e)=> {
                try {
                  navigator.clipboard.writeText(password); // copy
                } catch(e) {
                  alert("Function not allowed");
                }
              }}>Copy</button>):null
            }
            <button className="btn btn-blue" onClick={(e)=> {
              generate();
            }}>Generate</button>
          </div>
        </div>
        <div>
          <div className={getProgressBarStyle(score)} style={{width:`${score}%`}}></div>
        </div>
      </div>
    </Fragment>
  );
}

export default PasswordView;
