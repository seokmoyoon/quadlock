import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const baseURL = import.meta.env.BASE_URL; // GitHub Pages 경로 설정

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

console.log(`Base URL: ${baseURL}`); // 디버깅용 출력
