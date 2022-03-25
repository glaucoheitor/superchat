import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>Do not violate the community guidelines or you will be banned!</p>
    </>
  );
}
