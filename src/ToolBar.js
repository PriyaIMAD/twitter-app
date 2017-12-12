import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SearchBar from 'material-ui-search-bar';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlashon from 'material-ui/svg-icons/image/flash-on';
import ActionNotificationsnone from 'material-ui/svg-icons/social/notifications-none';
import ActionMail from 'material-ui/svg-icons/content/mail';
import Avatar from 'material-ui/Avatar';
import MyAvatar from './MyAvatar.js';

const style ={
 margin: '0 auto',
 maxWidth: 500 
}

const iconStyles = {
  marginRight: 0,
};


const ToolBar = () => (

  <Toolbar >        
        <ToolbarGroup firstChild={true}> 
          <ActionHome style={iconStyles} />
           <FlatButton
              href=""
              target="_blank"
              label="Home"              
              style={style} 
                  
            />        
        <ActionFlashon style={iconStyles} />        
            <FlatButton
              href=""
              target="_blank"
              label="Moments"
              secondary={true}  
              style={style}            
            />        
        <ActionNotificationsnone style={iconStyles} />        
        <FlatButton
          href=""
          target="_blank"
          label="Notifications"
          secondary={true}  
          style={style}            
        />        
        <ActionMail  />       
        <FlatButton
          href=""
          target="_blank"
          label="Messages"
          secondary={true}
          style={style}              
        />
        </ToolbarGroup>
        <ToolbarGroup>            
               <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}            
                style={{
                  margin: '0 auto',
                  marginRight:10,
                  maxWidth: 800
                }}
           />        
          <MyAvatar/>                   
              <RaisedButton>
                <span  className="tweetBtnText">Tweet</span>
              </RaisedButton>
        </ToolbarGroup>
      </Toolbar> 
);

export default ToolBar;