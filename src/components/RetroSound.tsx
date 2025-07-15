"use client";
import { useEffect, useRef, useCallback } from "react";

export const useRetroSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  // AudioContext'i başlat
  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      try {
        audioContextRef.current = new (window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext)();
      } catch (error) {
        console.log("AudioContext başlatılamadı:", error);
      }
    }
  }, []);

  // Typing sesi oluştur
  const playTypingSound = useCallback(() => {
    try {
      initAudioContext();
      if (!audioContextRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);

      oscillator.frequency.setValueAtTime(
        800,
        audioContextRef.current.currentTime
      );
      oscillator.type = "sine";

      gainNode.gain.setValueAtTime(0.08, audioContextRef.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContextRef.current.currentTime + 0.05
      );

      oscillator.start(audioContextRef.current.currentTime);
      oscillator.stop(audioContextRef.current.currentTime + 0.05);
    } catch (error) {
      console.log("Typing sesi çalınamadı:", error);
    }
  }, [initAudioContext]);

  // Beep sesi oluştur
  const playBeepSound = useCallback(() => {
    try {
      initAudioContext();
      if (!audioContextRef.current) return;

      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);

      oscillator.frequency.setValueAtTime(
        1200,
        audioContextRef.current.currentTime
      );
      oscillator.type = "square";

      gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContextRef.current.currentTime + 0.1
      );

      oscillator.start(audioContextRef.current.currentTime);
      oscillator.stop(audioContextRef.current.currentTime + 0.1);
    } catch (error) {
      console.log("Beep sesi çalınamadı:", error);
    }
  }, [initAudioContext]);

  useEffect(() => {
    // Kullanıcı etkileşimi gerekiyor, bu yüzden click event ile başlat
    const handleUserInteraction = () => {
      initAudioContext();
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, [initAudioContext]);

  return { playTypingSound, playBeepSound };
};
