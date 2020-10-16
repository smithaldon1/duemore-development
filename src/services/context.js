import React, { Component } from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;

/* 
createContext() creates two components:
1. FirebaseContext.Provider --> used to provide a Firebase Instance once at the top-level
of the React Component Tree
    - Follows the Singleton design pattern (Gang of Four)
2. FirebaseContext.Consumer --> used to retrieve the Firebase Instance if it is needed

*/