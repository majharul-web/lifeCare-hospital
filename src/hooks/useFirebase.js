import {
    getAuth,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Pages/Login/Firebase/firebase.init";

// call auth init function
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    // all state here
    const [user, setUser] = useState({});

    // google sing in
    const singInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    };

    // user resister
    const userRegister = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                // verifyEmail();
                setUserName(name);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    // user login
    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    // // verify email
    // const verifyEmail = () => {
    //     sendEmailVerification(auth.currentUser)
    //         .then(result => {
    //             console.log(result);
    //         });
    // }

    // set user name
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => { }
            )
            .catch((error) => {
                console.log(error.message);
            });
    }


    // logout
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {
                console.log(error);
            })
    };

    // observe user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, []);

    return {
        user,
        singInUsingGoogle,
        userRegister,
        userLogin,
        logOut
    }
};

export default useFirebase;