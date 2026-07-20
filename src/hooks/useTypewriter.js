/* ============================================================
   HOOK — useTypewriter
   Typing animation with configurable speed and loop
   ============================================================ */

import { useState, useEffect, useRef } from 'react';

/**
 * @param {string[]} words    — Array of words to type
 * @param {number}   typeSpeed  — ms per character typed
 * @param {number}   deleteSpeed — ms per character deleted
 * @param {number}   pauseTime — ms to pause after full word
 * @returns {{ displayText: string, isTyping: boolean }}
 */
export function useTypewriter(
  words = [],
  typeSpeed   = 80,
  deleteSpeed = 50,
  pauseTime   = 1800
) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex,   setWordIndex]   = useState(0);
  const [isDeleting,  setIsDeleting]  = useState(false);
  const [isTyping,    setIsTyping]    = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];

    const tick = () => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        setIsTyping(true);

        if (displayText.length + 1 === currentWord.length) {
          // Finished typing — pause then delete
          setIsTyping(false);
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        // Deleting
        setDisplayText(currentWord.slice(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    timeoutRef.current = setTimeout(tick, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return { displayText, isTyping };
}
