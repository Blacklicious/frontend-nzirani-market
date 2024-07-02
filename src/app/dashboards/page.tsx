import React    from 'react'
import Navbar   from '../dashboards/navbars';
import Products from '../dashboards/products/page';
import Stores   from '../dashboards/stores/page';
import Accounts from '../dashboards/accounts/page';

const pages = () => {

  return (
    <div>
        welcome to the Dashboard of mister 
        < Products />
        < Stores />
        < Accounts />
    </div>
  )
}

export default pages;
