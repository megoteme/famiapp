// src/App.jsx

import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Chat from "./components/Chat";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar />
      {!user ? (
        <>
          <Login onLogin={() => {}} />
          <Register />
        </>
      ) : (
        <>
          <Hero />
          <About />
          <Contact />
          <Chat user={user} />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
