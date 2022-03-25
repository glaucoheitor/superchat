import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    )
  );
}
