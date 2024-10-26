// RedirectIfEmpty.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const RedirectIfEmpty = ({ children }) => {
    const isEmpty = React.Children.count(children) === 0;

    if (isEmpty) {
        return <Navigate to="/notfound" />;
    }

    return <>{children}</>;
};

export default RedirectIfEmpty;
