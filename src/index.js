// var React = require('react');
// var ReactDOM = require('react-dom');
import React, { createElement } from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import Apps from './Apps';
import "./index.css"


ReactDOM.render(
    <>
        <Apps/>

    </>
    , document.getElementById("root"));














    

// Greeting Project
    
// to test we can set the date & time
// let currDate = new Date(2022, 3, 31s, 9);


// actual code
// let currDate = new Date();
// currDate = currDate.getHours()
// console.log(currDate); //12

// let greeting = " ";
// const cssStyle = {}
// const bgcssStyle = {}

// if (currDate >= 4 && currDate < 12) {
//     greeting = "Good Morning";
//     cssStyle.color = "green";
//     bgcssStyle.background = "green";
// } else if (currDate >= 12 && currDate <= 16) {
//     greeting = "Good Afternoon";
//     cssStyle.color = "darkgoldenrod";
//     bgcssStyle.background = "darkgoldenrod";
// } else if(currDate > 16 && currDate <= 19){
//     greeting = "Good Evening";
//     cssStyle.color = "orange";  
//     bgcssStyle.background = "orange";  
// } 
// else {
//     greeting = "Good Night"
//     cssStyle.color = "black";
//     bgcssStyle.background = "black";
// }

// ReactDOM.render(
//     <>
//         <div style={bgcssStyle}>

//             <h1>Hello ! <span style={cssStyle}> {greeting}</span></h1>


//         </div>

//     </>
//     , document.getElementById("root"));











// till vid 17

// const myname = "Vicky Gaikwad";
// const img1 = "https://picsum.photos/200/300"
// const img2 = "https://picsum.photos/250/300"
// const img3 = "https://picsum.photos/300/350"
// const links = "https://kshitijgaikwad.000webhostapp.com/resume/index.html"
// const img4 = "https://picsum.photos/300/300"

// const heading= {
//     color: '#fa9191',
//     textTransform: 'capitalize',
//     margin : '70px 0',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     textShadow: '0px 2px 4px #ffe9c5',
//     fontFamily: 'Poppins, sans-serif'
// }


// ReactDOM.render(
//     <>
//         <h1 style={heading}>Hello! My Name is {`${myname}`}</h1>
//         <div className="img_div">
//             <img src={img1} alt="random1" />

//             <img src={img2} alt="random2" />
//             <img src={img3} alt="random3" />
//             <a href={links} target="_kshitij">
//                 <img src={img4} alt="random4" />
//             </a>
//         </div>
//     </>
//     , document.getElementById("root"));





// till video 13

// const myname = "Vicky Gaikwad";
// const img1 = "https://picsum.photos/200/300"
// const img2 = "https://picsum.photos/250/300"
// const img3 = "https://picsum.photos/300/350"
// const links = "https://kshitijgaikwad.000webhostapp.com/resume/index.html"
// const img4 = "https://picsum.photos/300/300"


// ReactDOM.render(
//     <>
//         <h1 ContentEditable="true">Hello! My Name is {`${myname}`}</h1>
//         <img src={img1} alt="random1" />
//         <img src={img2} alt="random2" />
//         <img src={img3} alt="random3" />
//         <a href={links} target="_kshitij">
//             <img src={img4} alt="random4" />
//         </a>
//     </>
//     , document.getElementById("root"));






// Challenge 2 till 12
// const myname = "Vicky Gaikwad";
// const address = "I live in mumbai"

// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//     <>
//         <h1>Hello! My Name is {`${myname} & ${address}`}</h1>
//         <p>current Date is = {currDate}</p>
//         <p>current Date is = {currTime}</p>
//     </>
// , document.getElementById("root"));



// till video 11
// const filename = "Vicky Gaikwad";

// ReactDOM.render(
//     <>
//         <h1>Kshitij's Pet name is {filename}</h1>
//     </>
// , document.getElementById("root"));






// till video 9
// import React, { createElement } from 'react'
// import ReactDOM from 'react-dom'

// ReactDOM.render(
//     <>
//         <h1>Kshitij's Netflix Fav</h1>
//         <p>List of 5 Best Series</p>
//         <ol>
//             <li>Dark</li>
//             <li>Extra Curricular</li>
//             <li>My Holo Love</li>
//             <li>My first-2 Love</li>
//             <li>Mr Robot</li>
//         </ol>
//     </>
// , document.getElementById("root"));



















// pure js
// var h1Tag = document.createElement('h1');
// h1Tag.innerHTML = "Kshitij Gaikwad";
// document.getElementById('root');


// import React from 'react'

// const app = () => {
//   return (
//     <div>Welcome to React</div>
//   )
// }

// export default app