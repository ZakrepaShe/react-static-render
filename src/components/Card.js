import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 220,
  },
  media: {
    height: 200,
  },
};

function MediaCard(
  {
    classes,
    imgUrl,
    name,
    login,
    company,
    location,
    repositories,
    following,
    followers
  }
) {
  console.log(name);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {
          imgUrl
            ? <CardMedia
              className={classes.media}
              image={imgUrl}
              title="Avatar"
            />
            : ''
        }
        <CardContent>
          {
            name
              ? <Typography gutterBottom variant="headline" component="h1">
                {name}
              </Typography>
              : ''
          }
          {
            login
              ? <Typography gutterBottom variant="title">
                {login}
              </Typography>
              : ''
          }
          {
            company
              ? <Typography variant="subheading">
                {company}
              </Typography>
              : ''
          }
          {
            location
              ? <Typography variant="subheading">
                {location}
              </Typography>
              : ''
          }
          {
            (repositories || following || followers)
              ? <Typography variant="body2">
                Statistics:
              </Typography>
              : ''
          }
          {
            repositories
              ? <Typography component="p">
                Repositories: {repositories}
              </Typography>
              : ''
          }
          {
            following
              ? <Typography component="p">
                Following: {following}
              </Typography>
              : ''
          }
          {
            followers
              ? <Typography component="p">
                Followers: {followers}
              </Typography>
              : ''
          }
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(MediaCard);