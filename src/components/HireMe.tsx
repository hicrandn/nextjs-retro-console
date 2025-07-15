"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import clsx from "clsx";
import { useRetroSound } from "@/components/RetroSound";
import { RetroTerminal } from "./RetroTerminal";
import { RetroTyping } from "./RetroTyping";
import { RetroBackground } from "./RetroBackground";
import { Heart } from "lucide-react";

export const HireMe = () => {
  const [isTitleComplete, setIsTitleComplete] = useState(false);
  const [isSubtitleComplete, setIsSubtitleComplete] = useState(false);
  const [dinoPosition, setDinoPosition] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const { playTypingSound: _playTypingSound } = useRetroSound();

  // Glitch efekti
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, []);

  // T-Rex pozisyonunu güncelle
  useEffect(() => {
    if (isSubtitleComplete) {
      const interval = setInterval(() => {
        setDinoPosition((prev) => Math.min(prev + 1, 120));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isSubtitleComplete]);

  return (
    <RetroBackground>
      {/* HIRE ME Kartı - Glassmorphism */}
      <div className="relative z-10">
        <Card
          className={clsx(
            "w-120 min-h-[18rem] bg-black/60 backdrop-blur-xl border-green-400/30 relative overflow-hidden transition-all duration-200"
          )}
        >
          {/* Glassmorphism İç Katman */}
          <div className="absolute inset-0 rounded-2xl"></div>

          <CardHeader className="relative z-10 pb-2">
            <div className="flex items-center gap-3">
              <h1
                className={clsx(
                  "text-2xl font-bold text-[#CCCCCC] tracking-wider drop-shadow-lg transition-all duration-200",
                  "font-press-start-2p",
                  glitchActive && "animate-pulse"
                )}
              >
                <RetroTyping
                  text="HIRE ME"
                  speed={150}
                  onComplete={() => setIsTitleComplete(true)}
                  className="text-2xl font-bold text-[#CCCCCC] tracking-wider drop-shadow-lg font-press-start-2p"
                />
              </h1>
              <span
                className={clsx(
                  "text-2xl transition-all duration-200 drop-shadow-lg",
                  isSubtitleComplete ? "animate-bounce" : ""
                )}
                style={{
                  transform: `translateX(${dinoPosition}px)`,
                  animationDelay: isSubtitleComplete ? "0.5s" : "0s",
                }}
              >
                🦖
              </span>
            </div>
            <p
              className={clsx(
                "text-[#CCCCCC] text-sm drop-shadow-md tracking-wide",
                "font-press-start-2p"
              )}
            >
              <RetroTyping
                text="FULL-STACK DEVELOPER"
                speed={100}
                onComplete={() => setIsSubtitleComplete(true)}
                className="text-[#CCCCCC] text-sm drop-shadow-md tracking-wide font-press-start-2p"
                showCursor={isTitleComplete}
              />
            </p>
          </CardHeader>

          <CardContent className="relative z-10 space-y-4">
            <RetroTerminal isActive={isSubtitleComplete} />
          </CardContent>

          {/* Glassmorphism Border Efekti */}
          <div className="absolute inset-0 rounded-2xl border border-green-400/30 pointer-events-none"></div>
        </Card>
        <div className="absolute bottom-2 right-4 z-10">
          <div className="flex items-center gap-2 text-green-400 font-press-start-2p text-xs">
            <Heart
              size={16}
              className="text-red-500"
              fill="none"
              strokeWidth={2}
            />
            <span className="font-press-start-2p tracking-wide">BY ME</span>
          </div>
        </div>
      </div>
    </RetroBackground>
  );
};
