import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const ProfileCard = () => (
  <Card>
  	<CardMedia>
          <img src="./" alt="" />
    </CardMedia>
    <CardHeader
      title="Priya HPDF"
      subtitle="@PriyaHPDF"
      avatar="./favicon.ico"
      size={50}
      
    />
    
    <CardActions>
      <FlatButton>
        <span className="profileCardBtnText">Tweets</span>
      </FlatButton>
      <FlatButton>
        <span className="profileCardBtnText">Following</span>
      </FlatButton>
      <FlatButton>
        <span className="profileCardBtnText">Followers</span>
      </FlatButton>
      <br/> 
      <pre className= "profileCardBtnText">   120         150          20 </pre>
            
      <br/><br/>
    </CardActions>
</Card>
);

export default ProfileCard;