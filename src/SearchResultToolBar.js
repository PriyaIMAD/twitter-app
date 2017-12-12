import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const style ={
 margin: '0 auto',
 maxWidth: 500
}

const SearchResultToolBar = () => (

  <Toolbar>
        <ToolbarGroup firstChild={true}> 
           <FlatButton
              href=""
              target="_blank"
              label="Top"
              secondary={true}
              style = {style}              
             />             
            <FlatButton
              href=""
              target="_blank"
              label="Latest"
              secondary={true} 
              style={style}            
            />        
            <FlatButton
              href=""
              target="_blank"
              label="People"
              secondary={true}  
              style={style}            
            />
            <FlatButton
              href=""
              target="_blank"
              label="Photos"
              secondary={true} 
              style={style}             
            />                 
            <FlatButton
              href=""
              target="_blank"
              label="Videos"
              secondary={true}   
              style={style}           
            />                 
            <FlatButton
              href=""
              target="_blank"
              label="Broadcasts"
              secondary={true} 
              style={style}             
            />         
        </ToolbarGroup>
    </Toolbar>
);

export default SearchResultToolBar;