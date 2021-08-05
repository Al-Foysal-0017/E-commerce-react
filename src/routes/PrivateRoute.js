import React, { useContext } from 'react'
import * as ROUTES from '../constants/routes'
import { Redirect, Route } from 'react-router-dom';
import { AppContext } from '../context';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(AppContext);
    return (<Route
        {...rest}
        component={(props) => {
            if (user) {
                return <Component {...props} />
            }
            return (
                <Redirect to={{
                    pathname: ROUTES.REGISTER,
                    state: { from: props.location }
                }}
                />
            )
        }}
    />
    )
}

export default PrivateRoute
