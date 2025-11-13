"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { trainingFlow } from "./training";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));


type ChatMessage = {
  sender: "bot" | "user";
  text: string;
};

type HistoryEntry = {
  key: string;
  response?: string;
};

export default function Page() {
  const [currentKey, setCurrentKey] = useState("start");
  const [userInput, setUserInput] = useState("");
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [displayedText, setDisplayedText] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const currentStep = trainingFlow[currentKey];

  // auto-scroll when chat updates
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatLog, displayedText]);

  useEffect(() => {
    const firstMsg = Array.isArray(currentStep.message)
      ? currentStep.message[0]
      : currentStep.message;
    setChatLog([{ sender: "bot", text: firstMsg }]);
  }, []);



  const handleNext = async (nextKey: string, userResponse?: string) => {
    // Save step in history
    setHistory((prev) => [...prev, { key: currentKey, response: userResponse }]);

    const nextStep = trainingFlow[nextKey];
    const messages = Array.isArray(nextStep.message)
      ? nextStep.message
      : [nextStep.message];

    // add user message first
    if (userResponse) {
      setChatLog((prev) => [...prev, { sender: "user", text: userResponse }]);
      await delay(300); // slight pause after user message
    }

    // sequentially add bot messages with typing animation
    for (let i = 0; i < messages.length; i++) {
      const msg = messages[i];
      setDisplayedText("");
      setChatLog((prev) => [...prev, { sender: "bot", text: "" }]);

      for (let j = 0; j < msg.length; j++) {
        await delay(15); // typing speed
        setDisplayedText(msg.slice(0, j + 1));
        setChatLog((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { sender: "bot", text: msg.slice(0, j + 1) };
          return updated;
        });
      }

      await delay(400); // short pause before next message
    }

    setUserInput("");
    setCurrentKey(nextKey);
    setDisplayedText("");
  };
  const handleReset = () => {
    const firstMsg = Array.isArray(trainingFlow.start.message)
      ? trainingFlow.start.message[0]
      : trainingFlow.start.message;

    setCurrentKey("start");
    setUserInput("");
    setChatLog([{ sender: "bot", text: firstMsg }]);
    setDisplayedText("");
    setHistory([]);
  };

  const handleBack = () => {
    if (history.length === 0) return;

    const prevHistory = [...history];
    const last = prevHistory.pop()!;
    const prevStep = trainingFlow[last.key];

    // Rebuild chat log up to previous step
    const truncatedLog = [...chatLog];
    // Remove last two messages (user + bot)
    truncatedLog.splice(-2);

    setChatLog(truncatedLog);
    setHistory(prevHistory);
    setCurrentKey(last.key);
    setUserInput(last.response || "");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Center horizontally, align top vertically */}
      <div className="flex-1 flex flex-col items-center justify-start pt-6 px-4">
        <Card className="w-full max-w-5xl h-[85vh] flex flex-col border border-gray-200 shadow-xl rounded-2xl bg-white overflow-hidden">
          {/* Sticky Header */}
          <div className="sticky top-0 z-10 flex justify-between items-center bg-white border-b border-gray-200 px-6 py-3 shadow-sm">
            <h1 className="text-xl font-semibold text-indigo-600 tracking-tight">
              Trainer
            </h1>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="text-sm border-indigo-200 hover:bg-indigo-50"
                onClick={handleBack}
                disabled={history.length === 0}
              >
                Back
              </Button>
              <Button
                variant="outline"
                className="text-sm border-indigo-200 hover:bg-indigo-50"
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          </div>

          <CardContent className="flex flex-col flex-1 overflow-hidden p-6">
            {/* Scrollable chat */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto space-y-4 pb-4 scroll-smooth"
            >
              <AnimatePresence>
                {chatLog.map((msg, i) => {
                  const isLastBot = i === chatLog.length - 1 && msg.sender === "bot";
                  const textToDisplay =
                    isLastBot && displayedText ? displayedText : msg.text;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                    >
                      <div
                        className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm md:text-base shadow-sm ${msg.sender === "user"
                          ? "bg-indigo-500 text-white"
                          : "bg-indigo-100 text-gray-900"
                          }`}
                      >
                        {textToDisplay}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              {currentStep.extraInfo && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="mt-3 text-sm border-indigo-300 hover:bg-indigo-50"
                    >
                      More Info
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>{currentStep.extraInfo.title}</DialogTitle>

                      {/* Use a div wrapper instead of <DialogDescription> for flexible content */}
                      <div className="mt-4 space-y-3 text-gray-700 text-sm leading-relaxed">
                        {Array.isArray(currentStep.extraInfo.content)
                          ? currentStep.extraInfo.content.map((line, i) => (
                            <div key={i}>{line}</div>
                          ))
                          : currentStep.extraInfo.content}
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              )}
            </div>


            {/* Input / options */}
            <div className="border-t border-gray-200 pt-4">
              {currentStep.allowFreeInput && (
                <div className="flex gap-2 mb-3">
                  <Input
                    value={userInput}
                    placeholder="Type your answer..."
                    onChange={(e) => setUserInput(e.target.value)}
                    className="bg-gray-100 border-gray-300 focus:ring-indigo-500"
                  />
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {currentStep.options?.map((opt) => (
                  <Button
                    key={opt.label}
                    onClick={() =>
                      handleNext(opt.next, userInput || opt.label)
                    }
                    className="bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
                    disabled={
                      currentStep.allowFreeInput &&
                      !userInput.trim() &&
                      opt.next !== "start"
                    }
                  >
                    {opt.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
