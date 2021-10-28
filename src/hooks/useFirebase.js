import {
    getAuth,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // sendEmailVerification,
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
    const [isLoading, setIsLoading] = useState(true);

    // google sing in
    const singInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    };

    // user resister
    const userRegister = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // user login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
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
            .then(() => {

                const newUser = { ...user, displayName: name } // recommend
                setUser(newUser)

                // window.location.reload()
            }
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
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    return {
        user,
        setUser,
        singInUsingGoogle,
        userRegister,
        userLogin,
        logOut,
        setIsLoading,
        isLoading,
        setUserName
    }
};

export default useFirebase;