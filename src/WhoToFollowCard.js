import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const WhoToFollowCard = () => (
  <Card>
  	<CardMedia>
          <img src="./" alt="" />
    </CardMedia>
    <CardHeader
      title="Hasura @HasuraHQ"      
      avatar="./Hasura.ico"
      size={50}
      
    />
    
    <CardActions>
      <FlatButton > 
        <span className="followBtnText">Follow</span>
      </FlatButton>   

    </CardActions>
</Card>
);

export default WhoToFollowCard;