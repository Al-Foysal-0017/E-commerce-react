import React from 'react';

import { Route } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => (

   <Route
      {...rest}
      component={(props) => {
         return (
            <>
               {/* Admin Navigation here */}
               <Component {...props} />
            </>
         )
      }}
   />
)

export default AdminRoute