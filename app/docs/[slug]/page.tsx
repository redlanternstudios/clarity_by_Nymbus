import Link from 'next/link';
import { notFound } from 'next/navigation';

const docs = {
  'product-brief': {
    title: 'Product Brief',
    image: '/mockups/27-docs-product-brief.png',
    summary: 'The short executive summary for the Clarity concept.',
  },
  prd: {
    title: 'PRD',
    image: '/mockups/28-docs-prd.png',
    summary: 'The product requirements and scope overview.',
  },
  'technical-design': {
    title: 'Technical Design',
    image: '/mockups/29-docs-technical-design.png',
    summary: 'The system and implementation view for the POC.',
  },
  'release-plan': {
    title: 'Release Plan',
    image: '/mockups/30-docs-release-plan.png',
    summary: 'The launch sequence and release readiness view.',
  },
  'user-stories': {
    title: 'User Stories',
    image: '/mockups/31-docs-user-stories.png',
    summary: 'The role-based stories that guide the build.',
  },
  'risk-log': {
    title: 'Risk Log',
    image: '/mockups/32-docs-risk-log.png',
    summary: 'The risk inventory and why it matters.',
  },
  'ai-usage': {
    title: 'AI Usage',
    image: '/mockups/33-docs-ai-usage-notes.png',
    summary: 'The notes that explain how AI is used in the build.',
  },
} as const;

export default function DocsPage({ params }: { params: { slug: keyof typeof docs } }) {
  const doc = docs[params.slug];

  if (!doc) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-5xl">
      <Link href="/" className="text-accent text-sm inline-block">
        ← Back to Home
      </Link>

      <div>
        <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
          {doc.title}
        </h1>
        <p className="text-text-muted">{doc.summary}</p>
      </div>

      <div className="bg-surface border border-border rounded-lg p-4">
        <img src={doc.image} alt={doc.title} className="w-full h-auto rounded" />
      </div>
    </div>
  );
}
