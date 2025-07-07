import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface AskAIModalProps {
  open: boolean;
  onClose: () => void;
}

const PLACEHOLDER_QUESTION = "Brief me about Rakesh Vardan's technical skills";
const API_URL = import.meta.env.VITE_ASK_API_URL || "http://127.0.0.1:8000/ask";

const AskAIModal: React.FC<AskAIModalProps> = ({ open, onClose }) => {
  const [question, setQuestion] = useState(PLACEHOLDER_QUESTION);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  // Reset modal state when opened
  useEffect(() => {
    if (open) {
      setQuestion("");
      setAnswer("");
      setLoading(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = 'hidden'; // Prevent background scroll
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAnswer("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      if (res.status === 429) {
        setAnswer("You have reached the maximum number of allowed requests. Please try again later.");
      } else if (!res.ok) {
        setAnswer("Sorry, something went wrong.");
      } else {
        const data = await res.json();
        setAnswer(data.answer);
      }
    } catch {
      setAnswer("Sorry, something went wrong.");
    }
    setLoading(false);
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-emerald-700 shadow-2xl rounded-xl p-8 w-full max-w-xl relative transition-colors duration-300 flex flex-col items-stretch">
        <button
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white text-2xl"
          onClick={onClose}
          aria-label="Close"
        >×</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Ask about Rakesh Vardan</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="ask-ai-input" className="font-semibold">Your question</label>
          <input
            id="ask-ai-input"
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder={PLACEHOLDER_QUESTION}
            required
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-60 mt-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Asking..." : "Ask"}
          </button>
        </form>
        {answer && (
          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded text-base border border-gray-200 dark:border-gray-700 max-h-60 md:max-h-80 overflow-auto text-gray-900 dark:text-white">
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskAIModal;
