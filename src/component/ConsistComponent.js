import React from 'react';

let FancyBorder =(props) => {
    return(
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent: 'center', marginTop: 15}}>
            <div style={{backgroundColor: 'grey', width: 500, height: 400, borderRadius: 10}}>
                {props.children}
                {props.left}
                {props.right}
            </div>
        </div>
    )
}

let SideBarLeft =() => {
    return(
        <div style={{float: 'left',height: 300, width: 150, backgroundColor: 'green'}}>
            <h4>This is left side</h4>
        </div>
    )
}

let SideBarRight = () => {
    return(
        <div style={{float: 'right',height: 300, width: 150, backgroundColor: 'pink' }}>
            <h4>This is right side</h4>
        </div>
    )
}

let WelcomeDialog =() => {
    return(
        <FancyBorder left={<SideBarLeft/>} right={<SideBarRight/>}>
            <div>
                <h3>Welcome to Consist Components</h3>
            </div>
        </FancyBorder>
    )
}

export default WelcomeDialog;