// ============================================
// CASE STUDY CONTENT — Flat typed sections
// Keyed by slug, rendered by the case study template
// Content lives here; design system lives in tokens.ts
// ============================================

// --- Section Types ---

type TextSection = {
  type: 'text';
  heading?: string;        // optional section heading (renders as SectionHeading)
  body: string;            // prose content — paragraphs separated by \n\n
};

type ImageSection = {
  type: 'image';
  src: string;
  alt: string;
  placeholder: string;     // description shown in placeholder div
  caption?: string;
  aspect?: '16:9' | '4:3' | 'auto';
};

type MetricsSection = {
  type: 'metrics';
  heading?: string;
  items: { value: string; label: string; accent?: 'brass' | 'magenta' }[];
};

type ComparisonSection = {
  type: 'comparison';
  heading?: string;
  before: {
    label: string;
    image: { src: string; alt: string; placeholder: string };
    description?: string;
  };
  after: {
    label: string;
    image: { src: string; alt: string; placeholder: string };
    description?: string;
  };
};

type QuoteSection = {
  type: 'quote';
  text: string;
  attribution: string;
  role?: string;
};

export type CaseStudySection =
  | TextSection
  | ImageSection
  | MetricsSection
  | ComparisonSection
  | QuoteSection;

// --- Content by slug ---

export const caseStudyContent: Record<string, CaseStudySection[]> = {

  // =============================================
  // 1. AI LEADERSHIP & ORGANIZATIONAL VELOCITY
  // =============================================
  'ai-leadership': [
    {
      type: 'text',
      body: 'I led the internal push to standardize AI tools across a design and product organization skeptical of generative AI — building the process, running the workshops, and defining the strategic framework for how design operates when the interface thinks.',
    },
    {
      type: 'text',
      heading: 'The Dual Challenge',
      body: 'The company faced two problems at once. Tactically, there was no standardized process for using generative AI to prototype and ship faster. Strategically, there was no shared understanding of how design\'s role changes when AI drives the interaction — not the user.\n\nI framed this as one initiative: adoption requires both hands-on enablement and alignment on principles like trust, transparency, and human oversight.',
    },
    {
      type: 'image',
      src: '/images/placeholder-challenge-diagram.jpg',
      alt: 'Diagram showing the dual challenge — tactical tooling gap and strategic design control shift',
      placeholder: 'Diagram: tactical (tooling gap) on one side, strategic (design control shifting) on the other — showing how both were addressed as one initiative',
      aspect: '16:9',
    },
    {
      type: 'text',
      heading: 'Building the Playbook',
      body: 'I created a repeatable 6-step workflow — Define, Scope, Plan, Build, Test, Iterate — that made AI prototyping accessible to designers with no coding background. The training positioned the LLM as an "Expert Developer" the designer directs, emphasizing that success depends on the designer\'s judgment, not the tool\'s output.',
    },
    {
      type: 'image',
      src: '/images/placeholder-six-step-workflow.jpg',
      alt: 'The 6-step AI prototyping workflow: Define, Scope, Plan, Build, Test, Iterate',
      placeholder: 'Process diagram: Define → Scope → Plan → Build → Test → Iterate — the repeatable AI prototyping workflow taught in workshops',
      aspect: '16:9',
    },
    {
      type: 'image',
      src: '/images/placeholder-training-slide.jpg',
      alt: 'Workshop title slide: Building with AI Tools — Anyone Can Do It',
      placeholder: '"Building with AI Tools — Anyone Can Do It" — title slide from the AI workshop training deck',
      aspect: '16:9',
    },
    {
      type: 'text',
      heading: 'Demonstrating Output',
      body: 'The workshops produced tangible prototypes — not theory decks. Designers built working apps (habit trackers, Kanban tools, internal dashboards) using Gemini and Subframe, proving that AI-assisted prototyping could compress weeks of concept work into hours. This directly contributed to a winning AI Hackathon project.',
    },
    {
      type: 'image',
      src: '/images/placeholder-prototype-examples.jpg',
      alt: 'Grid of prototype screenshots built during AI workshops — habit tracker, Pomodoro timer with Kanban',
      placeholder: 'Composed grid: 2-3 prototype screenshots from workshops — Daily Habit Tracker, Pomodoro Timer with Kanban, internal dashboard',
      aspect: '16:9',
    },
    {
      type: 'text',
      heading: 'The Great Inversion',
      body: 'Beyond tooling, I developed a strategic critique of the industry\'s approach to AI product design. The core insight: most enterprise AI products are "draping a modern brain in an 80s UI" — wrapping powerful models in menus and buttons designed for a pre-AI era.\n\nI called this "The Great Inversion" — the shift from designer-controlled interfaces to AI-driven interactions where the designer\'s role becomes defining guardrails, not layouts. This framework directly shaped product requirements for our AI lending tools, embedding principles like decision versioning, escape hatches, and transparent confidence scoring.',
    },
    {
      type: 'image',
      src: '/images/placeholder-great-inversion.jpg',
      alt: 'The Great Inversion diagram — showing the reduction of designer control as AI agency increases',
      placeholder: 'Conceptual diagram: "The Great Inversion" — designer control decreasing as AI agency increases, with the new role being guardrail definition',
      aspect: '16:9',
    },
    {
      type: 'metrics',
      heading: 'Results',
      items: [
        { value: '100%', label: 'Team AI tool adoption' },
        { value: 'Permanent', label: 'AI tool subscriptions secured' },
        { value: '#1', label: 'Recognized org-wide as AI design lead' },
      ],
    },
    {
      type: 'text',
      body: 'The work translated directly into business action: permanent AI tool subscriptions, a repeatable prototyping process now embedded in the team\'s workflow, and a strategic framework that informed product requirements for our two flagship AI products. I became the go-to resource for AI strategy across design, product, and engineering.',
    },
  ],

  // =============================================
  // 2. INSTANT SOW / REHAB CO-PILOT
  // =============================================
  'instant-sow': [
    {
      type: 'text',
      body: 'I redesigned the scope of work experience for a renovation lending platform, replacing a painful 42-field manual form with an AI-powered toolbox that lets borrowers upload documents, describe their project in natural language, or recycle previous submissions.',
    },
    {
      type: 'text',
      heading: 'The Problem',
      body: 'The existing SOW process was the single biggest friction point in the borrower journey. Completing the manual form took over 30 minutes on average across 42+ fields. Over half of all submissions were conditioned — flagged for errors or missing information — creating rework cycles that delayed loan processing and eroded customer satisfaction.\n\nThe company\'s strategic mandate was clear: 100% of customers should have the option to use GenAI to assist in scope of work completion.',
    },
    {
      type: 'comparison',
      heading: 'Before & After',
      before: {
        label: 'Before',
        image: {
          src: '/images/placeholder-sow-manual.jpg',
          alt: '42-field manual SOW entry form',
          placeholder: 'Legacy SOW form — 42 fields, manual entry, no guidance or intelligence',
        },
        description: '42-field manual entry. No guidance, no intelligence. Average completion: 32 minutes.',
      },
      after: {
        label: 'After',
        image: {
          src: '/images/placeholder-sow-toolbox.jpg',
          alt: 'My SOW Toolbox interface with three AI-assisted paths',
          placeholder: '"My SOW Toolbox" — three AI-assisted paths: Upload Files, Describe Your Project, Select Previous SOW',
        },
        description: 'AI-powered toolbox with three paths. 23% of users chose the AI-assisted flow.',
      },
    },
    {
      type: 'text',
      heading: 'Choose Your Path',
      body: 'Rather than replacing the manual form outright, I designed a "toolbox" approach that gave borrowers three progressively smarter ways to complete their SOW. Each path feeds into the same underlying form, pre-filling fields with AI-extracted data while keeping the borrower in control of the final submission.\n\n**Release 1 — Upload Files:** AI extracts line items from uploaded bids, plans, or spreadsheets and pre-fills the SOW form. The borrower reviews and confirms.\n\n**Release 2 — Describe Your Project:** Borrowers describe their renovation in plain language (typed or dictated). The AI generates a structured SOW from the description.\n\n**Release 3 — SOW Recycle:** Repeat borrowers can select a previous SOW and adapt it for a new property — the fastest path for experienced users.',
    },
    {
      type: 'image',
      src: '/images/placeholder-sow-flow.jpg',
      alt: 'Flow diagram showing three SOW paths converging into the same review form',
      placeholder: 'Flow diagram: three paths (Upload, Describe, Recycle) converging into the same SOW form → human review → submission',
      aspect: '16:9',
    },
    {
      type: 'image',
      src: '/images/placeholder-sow-upload.jpg',
      alt: 'Document upload UI showing file selection, extraction progress, and pre-filled results',
      placeholder: 'UI: document upload experience — file selection → extraction progress indicator → pre-filled SOW fields with confidence indicators',
      aspect: '16:9',
    },
    {
      type: 'text',
      heading: 'Human Oversight Built In',
      body: 'Every AI-generated SOW is flagged in the operations system so the internal team knows it was machine-assisted. I designed a feedback loop between the field assessment team and the AI pipeline — if extraction accuracy drops, the team can flag patterns and adjust the rollout. The validation criteria was explicit: AI-extracted data must be no worse than manually entered data, and condition rates must not increase.',
    },
    {
      type: 'image',
      src: '/images/placeholder-sow-ops-flag.jpg',
      alt: 'Operations view showing AI-generated flag on submitted SOW',
      placeholder: 'Ops-side view: SOW submission with "AI-generated" flag visible, feedback mechanism for accuracy reporting',
      aspect: '16:9',
    },
    {
      type: 'quote',
      text: 'A task that used to take 20 minutes now takes about 2 minutes.',
      attribution: 'Tyler',
      role: 'Kiavi Borrower',
    },
    {
      type: 'metrics',
      heading: 'Results',
      items: [
        { value: '1,223', label: 'SOW documents processed by AI' },
        { value: '23%', label: 'Users chose AI-assisted flow' },
        { value: '31%', label: 'Eligible loans used SOW Recycle' },
        { value: '12.5%', label: 'Time reduction achieved' },
      ],
    },
    {
      type: 'text',
      body: 'The document extraction and natural language paths are in staged rollout, with a longer-term vision to surface potential conditions during entry so borrowers can self-remediate before submission. This was Kiavi\'s first borrower-facing generative AI feature — proof that AI augmentation could work in a regulated lending environment with real compliance constraints.',
    },
  ],

  // =============================================
  // 3. INSTANT DOCUMENT REVIEW (IDR)
  // =============================================
  'instant-doc-review': [
    {
      type: 'text',
      body: 'I redesigned the internal document review experience from a black-box AI system into a transparent, auditable interface where loan analysts can verify, override, and trust the AI\'s work — with every decision versioned for compliance.',
    },
    {
      type: 'text',
      heading: 'The Problem',
      body: 'The initial AI document review system proved the concept worked — AI could extract and validate data from purchase sale agreements and other loan documents. But the implementation was "quick and scrappy," built into a monolithic codebase with no way for ops users to see what the AI did, why it flagged something, or how to correct it.\n\nReviewing a single PSA still took 20 minutes because analysts had to cross-reference the AI\'s output against original documents in separate systems. The MVP was a black box. Analysts either trusted it blindly or ignored it entirely — neither outcome was acceptable for regulated financial operations.',
    },
    {
      type: 'image',
      src: '/images/placeholder-idr-before.jpg',
      alt: 'Diagram showing the fragmented before-state workflow for document review',
      placeholder: 'Before-state flow: analyst jumping between AI output → separate document viewer → conditions system → manual cross-referencing. Pain points annotated.',
      aspect: '16:9',
    },
    {
      type: 'text',
      heading: 'The Solution: Instant Review Admin Page',
      body: 'I designed the IR Admin Page as a single source of truth for AI-assisted document review. The core principle: move from rigid automation to intelligent augmentation. The analyst\'s expertise is the product — the AI just does the grunt work of extraction so they can focus on judgment calls.\n\nV1 shipped three critical capabilities:\n\n**Extracted data view** — all AI-extracted fields visible in a structured layout, organized by document section, so the analyst can scan without hunting.\n\n**Inline document viewer** — the original document loads side-by-side with the extracted data. No tab-switching, no context loss. The analyst can verify any field against the source in one glance.\n\n**Escape hatch with audit trail** — if the AI got it wrong or the analyst needs to revert to the manual process, they can — but they must provide a justification note. This creates accountability without blocking the workflow.',
    },
    {
      type: 'image',
      src: '/images/placeholder-idr-admin-page.jpg',
      alt: 'IDR Admin Page showing extracted data, document viewer, and conditions panel',
      placeholder: 'Property Admin Page — three-panel layout: extracted data fields (left), inline document viewer (right), consolidated conditions summary (below)',
      aspect: '16:9',
    },
    {
      type: 'image',
      src: '/images/placeholder-idr-doc-viewer.jpg',
      alt: 'Close-up of inline document viewer with highlighted field comparison',
      placeholder: 'Detail: inline document viewer with a data field highlighted, showing analyst comparing extracted value to source document',
      aspect: '4:3',
    },
    {
      type: 'text',
      heading: 'V2 — Feedback Loops and Control',
      body: 'V2 introduced rule overrides — the ability for an analyst to disagree with the AI\'s decision on a specific rule and provide corrected data with a reason. Every override feeds back into the model training pipeline, creating a virtuous cycle: the more analysts correct the AI, the fewer corrections it needs over time.\n\nThe longer-term vision extends this pattern to a "Property Asset Hub" — a unified view where analysts can audit documents across PSA, title, and appraisal data in a single interface, with granular escape hatches per data source.',
    },
    {
      type: 'image',
      src: '/images/placeholder-idr-override.jpg',
      alt: 'Rule override interaction showing analyst changing an AI decision with reason field',
      placeholder: 'UI detail: rule override modal — analyst selects "Override", enters corrected value and justification reason, audit trail updates in real time',
      aspect: '16:9',
    },
    {
      type: 'image',
      src: '/images/placeholder-idr-hub-vision.jpg',
      alt: 'Property Asset Hub concept showing PSA, Title, and Appraisal data in unified view',
      placeholder: 'Future vision: Property Asset Hub — PSA, Title, and Appraisal documents feeding into one review interface with per-source escape hatches',
      aspect: '16:9',
    },
    {
      type: 'metrics',
      heading: 'Results',
      items: [
        { value: '75%', label: 'Reduction in document review time' },
        { value: '30%', label: 'PSA auto-complete rate target' },
        { value: '100%', label: 'Decision audit trail coverage' },
      ],
    },
    {
      type: 'text',
      body: 'The redesigned review process cut analyst time from 20 minutes to 5–7 minutes per document — they\'re verifying the AI\'s work, not redoing it. Every rule outcome, override, and correction is versioned, giving compliance reviewers a clear audit trail. The next milestone is borrower-facing self-remediation: asynchronous, actionable feedback delivered immediately after document upload so borrowers can fix issues before an analyst ever sees the file.',
    },
  ],

  // =============================================
  // 4. META — BUILDING THIS PORTFOLIO
  // =============================================
  'building-this-portfolio': [
    {
      type: 'text',
      body: 'This portfolio is itself a case study in AI-augmented design and development. I designed a token system, built a component library, wrote the content, and shipped to production in a 48-hour sprint — documenting every AI interaction along the way.',
    },
    {
      type: 'text',
      heading: 'Coming Soon',
      body: 'This case study is being documented in real time as I build. Check back soon for the full story — including the token system decisions, AI prompt/output pairs, what needed human correction, and final Lighthouse scores.\n\nIn the meantime, you\'re looking at the result.',
    },
  ],
};
