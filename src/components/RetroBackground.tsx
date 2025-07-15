"use client";
import { useState, useEffect } from "react";

interface RetroBackgroundProps {
  children: React.ReactNode;
}

export const RetroBackground = ({ children }: RetroBackgroundProps) => {
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const matrixCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?";

  // Matrix rain efekti
  useEffect(() => {
    const matrixInterval = setInterval(() => {
      const newChar =
        matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)];
      setMatrixChars((prev) => {
        const newChars = [...prev, newChar];
        if (newChars.length > 50) {
          return newChars.slice(1);
        }
        return newChars;
      });
    }, 100);
    return () => clearInterval(matrixInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0000AA] flex items-center justify-center p-4 relative overflow-hidden">
      {/* CRT Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div
          className="w-full h-full"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)",
            animation: "scanlines 0.1s linear infinite",
          }}
        ></div>
      </div>

      {/* CRT Flicker */}
      <div
        className="absolute inset-0 pointer-events-none z-15"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.1) 100%)",
          animation: "flicker 0.15s infinite",
        }}
      ></div>

      {/* Matrix Rain */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {matrixChars.map((char, index) => (
          <div
            key={index}
            className="absolute text-green-400 font-mono text-xs opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `matrixFall ${2 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {char}
          </div>
        ))}
      </div>

      {/* Arka Plan Efektleri */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-800/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-800/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-900/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gray-800/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
      {children}
    </div>
  );
};
