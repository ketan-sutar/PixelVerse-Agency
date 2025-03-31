import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Base weights
import '@fontsource/jersey-25'; // Only has 400 weight
import '@fontsource/kanit/400.css'; // Regular
import '@fontsource/barlow/400.css'; // Regular

// Additional weights (if needed)
import '@fontsource/kanit/700.css'; // Bold
import '@fontsource/barlow/500.css'; // Medium
import '@fontsource/barlow/600.css'; // Semi-bold

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
