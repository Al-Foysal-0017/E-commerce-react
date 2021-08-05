import React, { useContext } from 'react'
import * as ROUTES from '../constants/routes'
import { Redirect, Route } from 'react-router-dom';
import { AppContext } from '../context';

const PublicRoute = ({ component: Component, path, ...rest }) => {
    const { user } = useContext(AppContext);
    return (<Route
        {...rest}
        component={(props) => {
            const { from } = props.location.state || { from: { pathname: '/' } }
            if (user && path === ROUTES.REGISTER) {
                return <Redirect to={from} />
            }
            return (
                <Component {...props} />
            )
        }}
    />
    )
}

export default PublicRoute