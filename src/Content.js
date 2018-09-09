import React, {Component} from 'react';
import Card from './components/Card';
import user from './user';

const Content = () => {
const {
  avatar_url: imgUrl,
  name,
  login,
  company,
  location,
  public_repos: repositories,
  following,
  followers
} = user;
return (
  <Card
    imgUrl={imgUrl}
    name={name}
    login={login}
    company={company}
    location={location}
    repositories={repositories}
    following={following}
    followers={followers}
  />
  )
};
export default Content;
