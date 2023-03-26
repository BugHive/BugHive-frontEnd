import React from 'react'

import Header from '../Header';
import Main from '../Main';
import SideBar from '../SideBar';



function Index({children}) {


  return (
    <div>
        <Header/>
        <Main>
            {children}
        </Main>
        <SideBar/>
    </div>
  )
}

export default Index;