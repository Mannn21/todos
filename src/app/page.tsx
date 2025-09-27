'use client'

import { useState } from "react";
import Header from "@/components/Header";
import Lists from "@/components/Lists";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleOnAdd = () => {
    if(!input.trim()) return;
    setTodos([...todos, input.trim()]);
    setInput("");
  }

  return (
    <div className="w-screen h-screen px-3 py-10 flex justify-center items-start bg-[var(--background-page)]">
      <div className="w-4/5 h-auto rounded-xl flex flex-col justify-center items-center bg-[var(--background-todo)] text-[var(--foreground)] border border-[var(--todo-border)] shadow-[0_4px_10px_var(--todo-shadow)] md:w-3/5 overflow-hidden">
        <Header input={input} setInput={setInput} onAdd={handleOnAdd} />
        <Lists todos={todos} />
      </div>
    </div>
  );
}
