import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/scss/pages/home.scss';

import axios from 'axios';

declare const API_URL: string;

class Home extends React.Component<Record<string, never>, { isLoggedIn: boolean }> {
    render = (): React.ReactNode => (
        <main className="tw-text-dark tw-text-center container">
            <br />
            <br />
            <br />
            <br />

            <h1 className="tw-text-6xl mt-5">Welcome to Alma!</h1>
            <p className="desc tw-mt-4">
                It&apos;s like Moodle, but better...
            </p>

            <br />
            <br />
            <br />

            <a href={`https://discord.com/api/oauth2/authorize?client_id=1025798600053248090&redirect_uri=${API_URL}/auth/discord&response_type=code&scope=identify%20email`} className="btn btn-lg btn-primary btn-sign-in">
                <span className="me-1">Sign In</span>
                <FontAwesomeIcon icon={faSignInAlt} />
            </a>
        </main>
    );

    componentDidMount = async (): Promise<void> => {
        await axios.get(`${API_URL}/auth/authenticated`, { withCredentials: true }).then(res => {
            const data: { authenticated: boolean, username?: string } = res.data;
            if (data.authenticated) window.location.href = `${window.location.protocol}//${window.location.host}/dashboard`;
        });
    };
}

export default Home;
