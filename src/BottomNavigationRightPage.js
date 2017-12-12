import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconMailOutline from 'material-ui/svg-icons/communication/mail-outline';
import IconHeart from 'material-ui/svg-icons/action/favorite-border';
import IconReply from 'material-ui/svg-icons/communication/chat-bubble-outline';
import IconRetweet from 'material-ui/svg-icons/av/repeat';

const mailIcon = <IconMailOutline/>;
const heartIcon = <IconHeart/>
const replyIcon = <IconReply/>
const retweetIcon = <IconRetweet/>

const BottomNavigationRightPage =() => { 
 
return (
	<BottomNavigation >
		
		<BottomNavigationItem		            
		icon={replyIcon}
		label="1"
		/>	
		<BottomNavigationItem		            
		icon={retweetIcon}
		label="11"
		/>		
		<BottomNavigationItem		            
		icon={heartIcon}
		label="6"
		/>		
		<BottomNavigationItem		            
		icon={mailIcon}
		
		/>
	</BottomNavigation>
	)
 
}

export default BottomNavigationRightPage;