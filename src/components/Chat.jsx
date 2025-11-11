import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";

export default function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    await addDoc(collection(db, "messages"), {
      text: newMessage,
      createdAt: serverTimestamp(),
      uid: user.uid,
      email: user.email
    });
    setNewMessage("");
  };

  return (
    <div>
      <div style={{ maxHeight: "300px", overflowY: "scroll", border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
        {messages.map(msg => (
          <div key={msg.id}>
            <b>{msg.email}: </b> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
