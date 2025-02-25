import React, { useState } from "react";
import Loader from "./components/Loader/Loader";
import MainPage from "./components/Hello"; // Import your main page component

const App = () => {
  const [loading, setLoading] = useState(true); // Track loading state

  return loading ? <Loader setLoading={setLoading} /> : <MainPage />;

  
};

export default App;
