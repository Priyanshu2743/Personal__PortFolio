import { useEffect, useState } from "react";
// import "./Preloader.css"; // Ensure you have CSS for styling

const Preloader = () => {
  const [loading, setLoading] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const names = ["Priyanshu", "Mittal"]; // Alternating names
  const storageKey = "preloader-shown";
  const resetTime = 30* 60* 1000; // 30 minutes in milliseconds

  useEffect(() => {
    const lastShownTime = localStorage.getItem(storageKey);

    if (!lastShownTime || Date.now() - lastShownTime > resetTime) {
      setLoading(true);
      localStorage.setItem(storageKey, Date.now());
    }
  }, []);

  useEffect(() => {
    if (!loading) return;

    const textTimer = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 500); // Change name every 500ms

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    const completeTimer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loader disappears after 3 seconds

    return () => {
      clearInterval(textTimer);
      clearInterval(progressTimer);
      clearTimeout(completeTimer);
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="text-container">
        <h2>{names[textIndex]}</h2>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Preloader;
