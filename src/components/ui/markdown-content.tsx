"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <>
      <style>{`
        .markdown-content {
          font-size: 1rem;
          line-height: 1.625;
          color: hsl(var(--foreground));
        }

        .markdown-content > * + * {
          margin-top: 1.5rem;
        }

        .markdown-content h1 {
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          margin-top: 4rem;
          margin-bottom: 2rem;
        }

        .markdown-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }

        .markdown-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: -0.025em;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .markdown-content h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .markdown-content p {
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.625;
        }

        .markdown-content ul,
        .markdown-content ol {
          margin-top: 1rem;
          margin-bottom: 1rem;
          margin-left: 1.5rem;
        }

        .markdown-content li {
          line-height: 1.625;
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;
        }

        .markdown-content ul li {
          list-style-type: disc;
          padding-left: 0.5rem;
        }

        .markdown-content ol li {
          list-style-type: decimal;
          padding-left: 0.5rem;
        }

        .markdown-content a {
          color: hsl(var(--primary));
          text-decoration: none;
        }

        .markdown-content a:hover {
          text-decoration: underline;
        }

        .markdown-content strong {
          font-weight: 600;
        }

        .markdown-content code {
          color: hsl(var(--primary));
          background-color: hsl(var(--primary) / 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
        }

        .markdown-content pre {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background-color: hsl(var(--muted));
          border: 1px solid hsl(var(--border));
          border-radius: 0.5rem;
          overflow-x: auto;
        }

        .markdown-content pre code {
          background-color: transparent;
          padding: 0;
        }

        .markdown-content blockquote {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          padding-left: 1rem;
          border-left: 4px solid hsl(var(--primary));
          font-style: italic;
          color: hsl(var(--muted-foreground));
        }

        .markdown-content hr {
          margin-top: 2rem;
          margin-bottom: 2rem;
          border-color: hsl(var(--border));
        }
      `}</style>
      <article className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </>
  );
}
