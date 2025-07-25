"use client";
import { useState, useEffect } from "react";
import { useRetroSound } from "@/components/RetroSound";
import clsx from "clsx";

interface RetroTypingProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  showCursor?: boolean;
}

export const RetroTyping = ({
  text,
  speed = 150,
  onComplete,
  className,
  showCursor = true,
}: RetroTypingProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const { playTypingSound } = useRetroSound();

  // Typing animasyonu
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        const newText = text.slice(0, currentIndex + 1);
        setDisplayText(newText);
        setCurrentIndex(currentIndex + 1);
        try {
          playTypingSound();
        } catch (error) {
          console.warn("Typing sesi çalınamadı:", error);
        }
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [currentIndex, text, speed, onComplete, playTypingSound]);

  // Cursor blink animasyonu
  useEffect(() => {
    if (!showCursor) return;

    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, [showCursor]);

  // Text değiştiğinde state'i sıfırla
  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span
          className={clsx(
            "transition-opacity duration-100",
            cursorVisible ? "opacity-100" : "opacity-0",
            "text-[#FFFF00]"
          )}
        >
          |
        </span>
      )}
    </span>
  );
};
