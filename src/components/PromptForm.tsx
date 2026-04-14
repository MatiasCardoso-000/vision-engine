import { useState } from "react";

export default function PromptForm({
  onSubmit,
  isLoading,
}: {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
}) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isLoading && prompt.trim()) onSubmit(prompt);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label className="form-label" htmlFor="prompt-input">
          Prompt
        </label>
        <input
          id="prompt-input"
          className="form-input"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="a futuristic city at dusk..."
          disabled={isLoading}
          autoComplete="off"
        />
      </div>

      <button className="form-button" type="submit" disabled={isLoading || !prompt.trim()}>
        <span>{isLoading ? "GENERATING..." : "GENERATE IMAGE"}</span>
      </button>
    </form>
  );
}
