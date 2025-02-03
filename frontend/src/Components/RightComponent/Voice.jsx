import React, { useState, useRef, useEffect } from "react";

const NoteCreator = ({ SetSpeechData }) => {

  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(60);
  const recognitionRef = useRef(null);
  const intervalRef = useRef(null);

  const startRecording = () => {
  
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support the Web Speech API.");
      return;
    }

    setTimer(60); 
    setIsRecording(true);

    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(intervalRef.current); // Stop timer at 0
          stopRecording();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    const SpeechRecognition = window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
    
      SetSpeechData((prev) => ({
        ...prev,
        description: transcript,
      }));
    };

    recognitionRef.current.onerror = (event) => {
     
      alert("An error occurred during recording: " + event.error);
      stopRecording(); // Ensure recording stops on error
    };

    recognitionRef.current.onend = () => {
      setIsRecording(false);
      clearInterval(intervalRef.current); // Ensure timer stops
    };

    recognitionRef.current.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
    clearInterval(intervalRef.current); // Ensure interval is cleared
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="mt-3">
      <button
        className={`btn text-white ${isRecording ? "btn-danger" : "btn-primary"}`}
        onClick={isRecording ? stopRecording : startRecording}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <p className="ml-4 text-gray-600 italic">Time Remaining: {timer} seconds</p>
    </div>
  );
};

export default NoteCreator;
