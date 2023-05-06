import React from  "react";
import  ReactDOM  from "react-dom/client";

const App=()=>{
    return(
        <div id="root">
            Hello brother
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
