
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Example: Shift + A
      if (e.shiftKey && e.key.toLowerCase() === "a") {
        navigate("/admin");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div className="App">
      <h1>Welcome to my portfolio 🚀</h1>
    </div>
  );
}
