import React from 'react';
import Paper from 'material-ui/Paper';
import './App.css';
import MyAvatar from './MyAvatar.js';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import BottomNavigationRightPage from './BottomNavigationRightPage.js'

const style = {  
  height: 2000,
  width: 700,
  margin: 20,
  textAlign: 'left',
  display: 'inline-block',  
};

const RightPage = () => (
  <div>
  	<br/><br/>
    <Paper style={style} zDepth={1} children={
    	(
    		<div>
    			<MyAvatar/>
    			Some Name  @SomeTwitterId . 12 min<br/>
    			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    			This is a sample aadhar search page.
    			<br/><br/><br/>
		       <BottomNavigationRightPage/>
		       <hr/>
    		</div>
    	)
    } />
   </div>
);


export default RightPage;