import { useEffect, useState } from "react";
import { 
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut 
    } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
        //setLoading(false);
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user=>{
           user ? setUser(user) : setUser({});
           setLoading(false);
        })
        return () => unsubscribed;
    },[]);

    const logOut = () => {
        signOut(auth)
            .then(()=>setUser({}))
            .finally(()=>setLoading(false))
    }
    return {
        user,
        signInUsingGoogle,
        logOut,
        loading
    }

}
export default useFirebase;