import React from 'react';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from '../../Config/firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';

const LogIn = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {

        var googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;

                const { photoURL, displayName, email } = result.user;
                const signedInUser = { image: photoURL, name: displayName, email: email }
                setLoggedInUser(signedInUser);
                history.replace(from);
                // console.log(signedInUser);

                console.log(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    return (
        <div className="text-center mt-5">
            <h2>Hello!</h2>
            <Button onClick={handleGoogleSignIn} variant="outline-primary">Sign in using Google</Button>
        </div>
    );
};

export default LogIn;