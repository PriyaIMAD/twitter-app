import React from 'react';
import Paper from 'material-ui/Paper';
import './App.css';
import WhoToFollowCard from './WhoToFollowCard';
import ProfileCard from'./ProfileCard.js';

const styleProfileCard = {  
  height: 250,
  width: 350,
  margin: 20,
  textAlign: 'left',
  display: 'inline-block',  
};

const styleWhoToFollow = {
  height: 250,
  width: 350,
  margin: 20,
  textAlign: 'left', 
}

const styleTrendsForYou ={
  height: 350,
  width: 350,
  margin: 20,
  textAlign: 'left', 
}

const LeftPage = () => (
  <div>
  	<br/><br/>
    <Paper style={styleProfileCard} zDepth={1} children={
    	(
    		<div>                       
            <ProfileCard/>     
        </div>
    	)
    } />
   
     
    <Paper style={styleWhoToFollow} zDepth={1} children={
    	(
    		<div>
    			<h1 style={{display:'inline'}}>Who To Follow </h1>
    			<a href="" >Refresh</a> &nbsp;
    			<a href="" >View all</a>
    			<WhoToFollowCard/>
    		</div>
    	)
    } />

    <Paper style={styleTrendsForYou} zDepth={1} children={
    	(
    		<div>
    			<h1 style={{display:'inline'}}>Trends For You </h1><a href="" >Change</a><br/><br/>
    			<div >
	    			<a href="" className="aTag">#MondayMotivation</a><br/>
	    			125 Tweets
	    			<br/><br/>
	    			<a href="" className="aTag">##NASASocial</a>
	    			<br/><br/>
	    			<a href="" className="aTag">New York City</a>
	    			<br/><br/>
	    			<a href="" className="aTag">#Yankees</a>
	    			<br/><br/>
	    			<a href="" className="aTag">Giancario Stanton</a><br/>
	    			25.8K Tweets
	    			<br/>
    			</div>

    		</div>
    	)
    } />
  </div>
);

export default LeftPage;