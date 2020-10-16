import React from 'react';

import { AuthUserContext, withAuthorization } from '../session';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Account: {authUser.email}</h1>
                <br/>
                <PasswordForgetForm />
                <br/>
                <PasswordChangeForm />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);