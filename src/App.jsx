import React, { useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Loader from "./components/Loader/Loader";
import MainPage from "./components/Hello"; // Import your main page component

const App = () => {
  const [loading, setLoading] = useState(true); // Track loading state

  useLenis(({ scroll }) => {
    // Called every scroll
  });

  return (
    <ReactLenis root>
      {loading ? <Loader setLoading={setLoading} /> : <MainPage />}
    </ReactLenis>
  );
};

export default App;
