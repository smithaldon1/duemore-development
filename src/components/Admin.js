import React from 'react';

import * as ROLES from '../constants/roles';
import { withAuthorization } from '../session';

const AdminPage = () => (
    <div>
        <h1>Admin Page</h1>
        <p>Restricted Area! Only users with the admin role are authorized.</p>
    </div>
);

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

export default withAuthorization(condition)(AdminPage);