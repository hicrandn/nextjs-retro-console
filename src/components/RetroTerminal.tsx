"use client";
import { useState, useEffect, useMemo } from "react";
import { useRetroSound } from "./RetroSound";

interface RetroTerminalProps {
  isActive: boolean;
}

export const RetroTerminal = ({ isActive }: RetroTerminalProps) => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const { playTypingSound, playBeepSound } = useRetroSound();

  // Terminal komutları - memoized
  const terminalCommands = useMemo(
    () => [
      "> INITIALIZING SYSTEM...",
      "> LOADING DEVELOPER PROFILE...",
      "> SCANNING SKILLS...",
      "> React: ██████████ 100%",
      "> Next.js: ██████████ 100%",
      "> TypeScript: ██████████ 100%",
      "> Node.js: ██████████ 100%",
      "> DATABASE: PostgreSQL, MongoDB",
      "> STATUS: READY FOR HIRE",
      "> CONTACT INFORMATION:",
      "> 📧 hicran.apaydin@gmail.com",
      "> 📱 +90 555 123 4567",
      "> 🌐 github.com/hicrandn",
      "> PRESS ANY KEY TO CONTINUE...",
    ],
    []
  );

  // Terminal komutları animasyonu
  useEffect(() => {
    if (!isActive) return;

    let lineIndex = 0;
    const terminalInterval = setInterval(() => {
      if (lineIndex < terminalCommands.length) {
        setTerminalLines((prev) => [...prev, terminalCommands[lineIndex]]);
        try {
          playTypingSound(); // Terminal typing sesi
        } catch (error) {
          console.warn("Terminal typing sesi çalınamadı:", error);
        }
        lineIndex++;
      } else {
        clearInterval(terminalInterval);
        try {
          playBeepSound(); // Terminal tamamlandı sesi
        } catch (error) {
          console.warn("Terminal beep sesi çalınamadı:", error);
        }
      }
    }, 800);
    return () => clearInterval(terminalInterval);
  }, [isActive, terminalCommands, playTypingSound, playBeepSound]);

  // isActive değiştiğinde terminal'i sıfırla
  useEffect(() => {
    if (!isActive) {
      setTerminalLines([]);
    }
  }, [isActive]);

  return (
    <div className="p-3">
      <div className="text-green-400 font-mono text-xs space-y-1">
        {terminalLines.map((line, index) => (
          <div
            key={`${line}-${index}`}
            className="animate-terminal-type"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};
