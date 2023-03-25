import React from 'react';

//components
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import Avatar from '../Avatar';

//style
import {Header , Container} from './style';

function index() {
  return (
    <Header>
      <Container>
        <Logo width={'6%'} height="80%"/>
        <SearchBar id={"search"}/>
        <Avatar id={"avatar"}/>
      </Container>
    </Header>
  )
}

export default index;