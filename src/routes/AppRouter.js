import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router'
// import Navbar from '../Components/ui/Navbar'
import * as ROUTES from '../constants/routes'
import Dashboard from '../pages/admin/dashboard'
import AddNewProduct from '../pages/admin/dashboard/AddNewProduct'
import Register from '../pages/auth'
import Checkout from '../pages/checkout'
import Home from '../pages/home'
import Shop from '../pages/shop'
import AdminRoute from './AdminRoute'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    component={Home}
                    exact
                    path={ROUTES.HOME}
                />
                <Route
                    component={Shop}
                    path={ROUTES.SHOP}
                />
                <PublicRoute
                    component={Register}
                    path={ROUTES.REGISTER}
                />
                <PrivateRoute
                    component={Checkout}
                    path={ROUTES.CHECKOUT}
                />
                <AdminRoute
                    exact
                    component={Dashboard}
                    path={ROUTES.ADMIN_DASHBOARD}
                />
                <AdminRoute
                    component={AddNewProduct}
                    path={ROUTES.ADD_NEW_PRODUCT}
                />
            </Switch>
        </Router>
    )
}

export default AppRouter
