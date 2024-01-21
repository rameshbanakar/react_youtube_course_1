import React from "react";

function ConditionalRendering() {
  let login = false;
  // if(login){
  //     return (
  //         <div>welcome Ramesh</div>
  //     )
  // }else{
  //     return <div>welcome guest</div>
  // }

  return login ? <div>welcome Ramesh</div> : <div>welcome guest</div>;
}

export default ConditionalRendering;
