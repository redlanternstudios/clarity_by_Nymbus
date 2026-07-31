'use client';

import { suggestedQuestions } from '@/lib/data';
import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function AskClarity() {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const hasAnswer = !!answer;

  const handleSuggestedQuestion = (question: string) => {
    setSelectedQuestion(question);
    setInput(question);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setError('');
    setAnswer('');

    try {
      const response = await fetch('/api/ask-clarity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) throw new Error('Failed to get answer');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response body');

      let fullText = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        fullText += new TextDecoder().decode(value);
      }

      setAnswer(fullText);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get answer');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Link href="/borrower" className="text-accent text-sm mb-4 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
        Ask Clarity
      </h1>
      <p className="text-text-muted mb-8">
        Get answers about your loan, payments, notices, and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Questions */}
        <div>
          <div className="bg-surface border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Suggested questions
            </h3>
            <div className="space-y-3">
              {suggestedQuestions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleSuggestedQuestion(q.text)}
                  className="w-full text-left p-3 bg-elevated border border-border rounded hover:border-accent transition-colors"
                >
                  <p className="text-text-primary font-medium">{q.text}</p>
                  <p className="text-xs text-text-muted mt-1">{q.category}</p>
                </button>
              ))}

              {/* Custom Input */}
              <form onSubmit={handleSubmit} className="mt-6">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Or ask your own question..."
                  className="w-full bg-elevated border border-border rounded p-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent resize-none"
                  rows={4}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="mt-3 w-full bg-accent hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed text-background font-semibold py-2 px-4 rounded transition-colors"
                >
                  {isLoading ? 'Asking Clarity...' : 'Send'}
                </button>
                {error && (
                  <p className="mt-2 text-red-400 text-sm">{error}</p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Right Column - Answer */}
        <div>
          <div className="bg-surface border border-border rounded-lg p-6 h-full flex flex-col">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Answer
            </h3>

            {!hasAnswer ? (
              <div className="flex-1 flex items-center justify-center text-center">
                <p className="text-text-muted">
                  Your answer will appear here
                </p>
              </div>
            ) : (
              <div className="flex-1">
                <div className="mb-6">
                  <p className="text-sm text-text-muted mb-3">Your question:</p>
                  <p className="text-text-primary font-medium">
                    {input}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-text-muted mb-3">Clarity's answer:</p>
                  <div className="text-text-primary leading-relaxed">
                    <p>{answer}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-border">
                  <p className="text-xs text-text-muted mb-3">Powered by AI</p>
                  <div className="space-y-2">
                    <Link href="/borrower/notice/NT-7821">
                      <button className="w-full bg-accent hover:bg-accent-dark text-background font-semibold py-2 px-4 rounded transition-colors">
                        Review notice
                      </button>
                    </Link>
                    <Link href="/borrower/escalate">
                      <button className="w-full bg-elevated hover:bg-surface border border-border text-text-primary font-semibold py-2 px-4 rounded transition-colors">
                        Request help
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
