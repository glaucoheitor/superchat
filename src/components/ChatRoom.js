import { useRef, useState, useEffect } from "react";

import { auth, db } from "../firebase";

import {
  query,
  collection,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { useCollection } from "react-firebase-hooks/firestore";

import ChatMessage from "./ChatMessage";

export default function ChatRoom() {
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollection(q);
  const [formValue, setFormValue] = useState("");

  const dummy = useRef();

  useEffect(() => {
    if (messages) dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
  };

  return (
    <>
      <main>
        {messages?.docs.map((msg) => {
          return <ChatMessage key={msg.id} message={msg.data()} />;
        })}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          ➡️
        </button>
      </form>
    </>
  );
}
