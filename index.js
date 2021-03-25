import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
var curr=new Date();
var curr_time;
// const header={
//     textTransform:"capitalize",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     textAlign: "center",
//     verticalAlign:"middle",
// }
const head={};
if(curr.getHours()>=1&&curr.getHours()<=11)
  { curr_time="Good Morning";
   head.color="green";
  }
   else if(curr.getHours()>=12&&curr.getHours()<19)
  { curr_time="Good AfterNoon";
  head.color="orange";
}
   else if(curr.getHours()>=19&&curr.getHours()<=24)
    {curr_time="Good Night";
    head.color="orange";
}

   
ReactDom.render(
    <>
    <div>
         <h1>Hello Guys,<span style={head}>{curr_time}</span>  </h1>
         </div>
    </>
    ,document.getElementById('root'));