import FeatherIcon from "feather-icons-react";
import { useState, useEffect } from "react";

const getGreeting = () => {
  const hours = new Date().getHours();

  if (hours < 12) {
    return "Good Morning";
  } else if (hours < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Success is not final, failure is not fatal, It is the courage to continue that counts.",
  "Don't watch the clock, do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The only limit to our realization of tomorrow is our doubts of today.",
];

const Greeting = () => {
  const [greeting, setGreeting] = useState("");
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const quoteDuration = 5000; // 4 seconds for each quote

  useEffect(() => {
    setGreeting(getGreeting());

    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setProgress(0); // Reset progress when the quote changes
    }, quoteDuration); // Change quote every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 100 / (quoteDuration / 100));
    }, 100); // Update progress every 100ms

    return () => clearInterval(progressInterval);
  }, [currentQuoteIndex]);

  console.log(greeting?.toLowerCase());
  return (
    <div className="bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-lg shadow-lg p-6 max-w-full md:max-w-sm w-full">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            {greeting}
          </h2>
          {greeting?.toLowerCase() === "good morning" ? (
            <FeatherIcon icon="sunrise" size="30" className="text-yellow-500" />
          ) : greeting?.toLowerCase() === "good afternoon" ? (
            <FeatherIcon icon="sun" size="30" className="text-yellow-500" />
          ) : (
            <FeatherIcon icon="moon" size="30" className="text-yellow-500" />
          )}
        </div>
        <p
          key={currentQuoteIndex}
          className="mt-3 text-gray-600 dark:text-gray-300"
        >
          {quotes[currentQuoteIndex]}
        </p>
        <div className="w-full flex items-center justify-center">
          <div className="w-1/4 h-2 mt-4 bg-gray-300 dark:bg-gray-600 rounded">
            <div
              className="h-2 bg-secondary rounded"
              style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
