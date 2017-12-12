import React from 'react';
import Paper from 'material-ui/Paper';
import './App.css';
import MyAvatar from './MyAvatar.js';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import BottomNavigationRightPage from './BottomNavigationRightPage.js'
import Avatar from 'material-ui/Avatar';

const happeningStyle={
  height: 100,
  width: 700,
  margin: 20,
  textAlign: 'left',
  display: 'inline-block',

};

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

   <Paper style={happeningStyle} zDepth={1} children={
        (
          <div >
              <section >             
                <MyAvatar/>              
                <input
                  className="TweetBox"
                  type="text"
                  name="Tweet"
                  value="What's happening?"
                  width="400px"                
                 />                 
              </section>          
          </div>
        )
      } />
 

    <Paper style={style} zDepth={1} children={
    	(
        <div >
    			 <Avatar
              src="./Hasura.ico"
              size={40}               
              
            />
      			Hasura HPDF @HasuraHQ . 12 min<br/>
      			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      			This message is for Hasura HPDF fellows.
      			<br/><br/><br/>
  		       <BottomNavigationRightPage/>
  		       <hr/>
      		</div>
    	)
    } />
   </div>
);


export default RightPage;