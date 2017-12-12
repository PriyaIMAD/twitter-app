import React from 'react';
import Paper from 'material-ui/Paper';
import './App.css';
import WhoToFollowCard from './WhoToFollowCard';

const style = {  
  height: 50,
  width: 300,
  margin: 20,
  textAlign: 'left',
  display: 'inline-block',  
};

const styleRelatedSearches ={
  height: 150,
  width: 300,
  margin: 20,
  textAlign: 'left', 
}
const styleWhoToFollow = {
  height: 250,
  width: 300,
  margin: 20,
  textAlign: 'left', 
}

const styleTrendsForYou ={
  height: 350,
  width: 300,
  margin: 20,
  textAlign: 'left', 
}

const LeftPage = () => (
  <div>
  	<br/><br/>
    <Paper style={style} zDepth={1} children={
    	(
    		<div>
    			<h1 style={{display:'inline'}}>Search Filters </h1><a href="" >Show</a>
    		</div>
    	)
    } />
   
   <Paper style={styleRelatedSearches} zDepth={1} children={
    	(
    		<div>
    			<h1>Related Searches </h1>
    			<div >
	    			<a href="" className="aTag">puri</a><br/>
	    			<a href="" className="aTag">#congress</a><br/>
	    			<a href="" className="aTag">bitcoins</a><br/>
	    			<a href="" className="aTag">#cycloneochki</a><br/>
	    			<a href="" className="aTag">rs 200</a>
    			</div>

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