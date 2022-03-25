import { auth, analytics } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { logEvent } from "firebase/analytics";

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then((result) => {
      logEvent(analytics, "login");
    });
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
