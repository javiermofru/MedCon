import React from 'react';


const boxStyle = {
  width: "500px",
  height: "200px",
  background:"rgb(245,245,245)",
  textAlign:"center",
  color:"#262626",
  top: 0,
  left: 0,
  lineHeight:"190px",
  borderRadius:"10px"
}


const Welcome = (props) => {
    return(
      <div>
            <h2 style={boxStyle}>Bienvenid@ {props.uName}</h2>
            <div>
                
            </div>
            <button className="btn btn-success" >
                Volver
            </button>

      </div>
  )
}

export default Welcome;