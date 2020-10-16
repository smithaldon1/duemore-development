import React from 'react';

import { withAuthorization } from '../session';

const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        <p>The Home Page is only accessible by users that are signed in.</p>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);