import React from 'react';

function Apps() {

    let currDate = new Date(2022, 3, 31, 12);
    currDate = currDate.getHours()
    console.log(currDate); 

    let greeting = " ";
    const cssStyle = {}
    const bgcssStyle = {}

    if (currDate >= 4 && currDate < 12) {
        greeting = "Good Morning";
        cssStyle.color = "green";
        bgcssStyle.background = "green";
    } else if (currDate >= 12 && currDate <= 16) {
        greeting = "Good Afternoon";
        cssStyle.color = "darkgoldenrod";
        bgcssStyle.background = "darkgoldenrod";
    } else if (currDate > 16 && currDate <= 19) {
        greeting = "Good Evening";
        cssStyle.color = "orange";
        bgcssStyle.background = "orange";
    }
    else {
        greeting = "Good Night"
        cssStyle.color = "black";
        bgcssStyle.background = "black";
    }


    return(

        <div style={bgcssStyle}>

            <h1>Hello ! <span style={cssStyle}> {greeting}</span></h1>


        </div>
    )
}

export default Apps
























// to test we can set the date & time
// let currDate = new Date(2022, 3, 31s, 9);


// actual code


