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
      body: 'I led the internal push to standardize AI tools across a design and product organization skeptical of generative AI — shaping the process, running the workshops, and defining the strategic framework for how design operates when the interface thinks.',
    },
    {
      type: 'text',
      heading: 'The Dual Challenge',
      body: 'The company faced two problems at once. Tactically, leadership recognized the potential of AI for internal efficiency, but there was no standardized process for using generative AI to prototype and ship faster. Strategically, there was no shared understanding of how design\'s role changes when AI drives the interaction, not the user.\n\nI framed this as one initiative: adoption requires both hands-on enablement and alignment on principles like trust, transparency, and human oversight.',
    },
    {
      type: 'image',
      src: '/images/diagram.png',
      alt: 'Diagram showing the dual challenge — tactical tooling gap and strategic design control shift',
      placeholder: 'Diagram: tactical (tooling gap) on one side, strategic (design control shifting) on the other — showing how both were addressed as one initiative',
      aspect: '16:9',
    },
    {
      type: 'text',
      heading: 'Building the Playbook',
      body: 'I shared a repeatable 6-step workflow: Define, Scope, Plan, Build, Test, Iterate, that made AI prototyping accessible to any curious mind with no coding background. The training positioned the LLM as an "Expert Developer" the creator directs, emphasizing that success depends on one\'s judgment, not the tool\'s output.',
    },
    {
      type: 'image',
      src: '/images/process.png',
      alt: 'The 6-step AI prototyping workflow: Define, Scope, Plan, Build, Test, Iterate',
      placeholder: 'Process diagram: Define -> Scope -> Plan -> Build -> Test -> Iterate — the repeatable AI prototyping workflow taught in workshops',
      aspect: '16:9',
    },
    {
      type: 'image',
      src: '/images/anyone-can-do-it.png',
      alt: 'Workshop title slide: Building with AI Tools — Anyone Can Do It',
      placeholder: '"Building with AI Tools — Anyone Can Do It" — title slide from the AI workshop training deck',
      aspect: '16:9',
    },
    {
      type: 'text',
      heading: 'Demonstrating Output',
      body: 'The workshops produced tangible prototypes — not theory decks. Designers built working apps (habit trackers, Kanban tools, internal dashboards) using Gemini and Subframe, proving that AI-assisted prototyping could compress weeks of concept work into hours. This directly contributed to a later winning AI Hackathon project using Replit.',
    },
    {
      type: 'image',
      src: '/images/outcomes.png',
      alt: 'Grid of prototype screenshots built during AI workshops — habit tracker, Pomodoro timer with Kanban',
      placeholder: 'Composed grid: 2-3 prototype screenshots from workshops — Daily Habit Tracker, Pomodoro Timer with Kanban, internal dashboard',
      aspect: '16:9',
    },
    {
      type: 'text',
      heading: 'Strategic Vision — The Big Flip',
      body: 'Beyond tooling, I shared a strategic critique of the industry\'s approach to AI product design. The core insight: most enterprise AI products are "draping a modern brain in an 80s UI" — wrapping powerful models in menus and buttons designed for a pre-AI era. This Big Flip is the shift from designer-controlled interfaces to AI-driven interactions where the designer\'s role becomes defining guardrails, not layouts.\n\nThis framework directly shaped product requirements for our AI lending tools, embedding principles like decision versioning, escape hatches, and transparent confidence scoring.',
    },
    {
      type: 'image',
      src: '/images/big-flip.png',
      alt: 'The Big Flip diagram — showing the reduction of designer control as AI agency increases',
      placeholder: 'Conceptual diagram: "The Big Flip" — designer control decreasing as AI agency increases, with the new role being guardrail definition',
      aspect: '16:9',
    },
    {
      type: 'metrics',
      heading: 'Results',
      items: [
        { value: '100%', label: 'Team AI tool adoption' },
        { value: 'Permanent', label: 'AI tool subscriptions secured' },
        { value: '#1', label: 'AI Design & Engineer nerd' },
      ],
    },
    {
      type: 'text',
      body: 'The work translated directly into business action: permanent AI tool subscriptions, a repeatable prototyping process now iterating in the team\'s workflow, and a strategic framework that informed product requirements for our two flagship AI products. I became the go-to resource for AI strategy across design, product, and engineering.',
    },
  ],

  // =============================================
  // 2. INSTANT SOW / REHAB CO-PILOT
  // =============================================
  'instant-sow': [
    {
      type: 'text',
      body: 'I redesigned the scope of work experience for our loan origination flow, replacing a painful 42-field manual form with an AI-powered toolbox that lets borrowers upload documents, describe their project in natural language, or recycle previous submissions.',
    },
    {
      type: 'text',
      heading: 'The Problem',
      body: 'The existing SOW process was one of the single biggest friction points in the borrower journey. Completing the manual form took 20 minutes on average across 42+ fields. Over half of all submissions (54%) were flagged for errors or missing information, creating rework cycles that delayed loan processing and eroded customer satisfaction.\n\nThe pain point was obvious. The company\'s H2 strategic goal was clear: 100% of customers should have the option to use GenAI to assist in scope of work completion. The team set out on a plan to release our vision incrementally.',
    },
    {
      type: 'comparison',
      heading: 'Before & After',
      before: {
        label: 'Before',
        image: {
          src: '/images/legacy-sow.png',
          alt: '42-field manual SOW entry form',
          placeholder: 'Legacy SOW form — 42 fields, manual entry, no guidance or intelligence',
        },
        description: '42-field manual entry form. Borrower fills every field by hand. No guidance, no intelligence.',
      },
      after: {
        label: 'After',
        image: {
          src: '/images/tool-box.png',
          alt: 'My SOW Toolbox interface with three AI-assisted paths',
          placeholder: '"My SOW Toolbox" — three AI-assisted paths: Upload Files, Describe Your Project, Select Previous SOW',
        },
        description: '"My SOW Toolbox" — three AI-assisted paths: Upload Files, Describe Your Project, Select Previous SOW.',
      },
    },
    {
      type: 'text',
      heading: 'The Solution — Choose Your Path',
      body: 'Rather than replacing the manual form outright, I designed a "toolbox" approach that gave borrowers three progressively smarter ways to complete their SOW but also worked with their existing ways of working. Each path feeds into the same underlying data structure, pre-filling fields with AI-extracted data while keeping the borrower in control of the final submission.\n\n**Release 1 — Upload Files:** AI extracts line items from uploaded bids, plans, or spreadsheets (Excel, PDF) and pre-fills the SOW form. The borrower reviews and confirms.\n\n**Release 2 — Describe Your Project:** Borrowers describe their renovation in plain language (typed or dictated). The AI generates a structured SOW from the description, with the borrower validating each section.\n\n**Release 3 — SOW Recycle:** Repeat borrowers (often experienced pros) can select a previous SOW and adapt it for a new property — the fastest path for experienced users. While not AI powered, it rounds out the toolbox by giving borrowers a way to quickly reuse their previous work — a key feature for high volume borrowers.',
    },
    {
      type: 'image',
      src: '/images/sow-flow-diagram.png',
      alt: 'Flow diagram showing three SOW paths converging into the same review form',
      placeholder: 'Flow diagram: three paths (Upload, Describe, Recycle) converging into the same SOW form -> human review -> submission',
      aspect: '16:9',
    },
    {
      type: 'image',
      src: '/images/feature-flow.png',
      alt: 'Document upload UI showing file selection, extraction progress, and pre-filled results',
      placeholder: 'UI: document upload experience — file selection -> extraction progress indicator -> pre-filled SOW fields with confidence indicators',
      aspect: '16:9',
    },
    {
      type: 'text',
      heading: 'Human Oversight Built In',
      body: 'Every AI-generated SOW is flagged in the operations system so the internal team knows it was machine-assisted. For our incremental rollout, I worked with our assisted data science team to design a feedback loop between the feasibility team and the AI pipeline; if extraction accuracy drops, the team can flag patterns and adjust the rollout. The validation criteria was explicit: AI-extracted data must be no worse than manually entered data, and condition rates must not increase.',
    },
    {
      type: 'image',
      src: '/images/detail-ops.png',
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
        { value: '31%', label: 'Eligible loans used SOW Recycle' },
        { value: '45%', label: 'Condition rate (down from 54%)' },
        { value: '20 min -> <10 min', label: 'Target SOW completion time' },
        { value: '25%', label: 'Borrower opt-in target for AI path' },
      ],
    },
    {
      type: 'text',
      body: 'The initial SOW Recycle release for professional borrowers showed strong adoption — 31% of eligible loans used the feature, and the overall condition rate dropped to 45% from a historical average above 50%. The document extraction and natural language paths have completed their staged rollout. The longer-term vision is to surface potential issues during entry so borrowers can self-remediate before submission, using the patterns started in the Instant Review Document Review projects.',
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
      body: 'The initial AI document review system (IDR MVP) proved the concept worked — AI could extract and validate data from purchase sale agreements (PSAs) and other loan documents. But the implementation was "quick and scrappy," built into a monolithic codebase with no way for ops users to see what the AI did, why it flagged something, or how to correct it. Reviewing a single PSA still took 20 minutes because analysts had to cross-reference the AI\'s output against original documents in separate systems.\n\nThe MVP was a black box. Analysts either trusted it blindly or ignored it entirely — neither outcome was acceptable for regulated financial operations.',
    },
    {
      type: 'image',
      src: '/images/before-flow.png',
      alt: 'Diagram showing the fragmented before-state workflow for document review',
      placeholder: 'Before-state flow: analyst jumping between AI output -> separate document viewer -> conditions system -> manual cross-referencing. Pain points annotated.',
      aspect: '16:9',
    },
    {
      type: 'text',
      heading: 'The Solution — Property Admin Page',
      body: 'I designed the Property Admin Page as a single source of truth for AI-assisted document review. The core principle: move from rigid automation to intelligent augmentation. The analyst\'s expertise is the product — the AI just does the grunt work of extraction so they can focus on judgment calls.\n\n**V1 shipped three critical capabilities:**\n\n**Extracted data view** — all AI-extracted fields visible in a structured layout, organized by document section, so the analyst can scan without hunting.\n\n**Inline document viewer** — the original document loads side-by-side with the extracted data. No tab-switching, no context loss. The analyst can verify any field against the source in one glance.\n\n**Escape hatch with audit trail** — if the AI got it wrong or the analyst needs to revert to the manual process, they can — but they must provide a justification note. This creates accountability without blocking the workflow.',
    },
    {
      type: 'image',
      src: '/images/admin-page-tasks.png',
      alt: 'IDR Admin Page showing extracted data, document viewer, and conditions panel',
      placeholder: 'Property Admin Page — three-panel layout: extracted data fields (left), inline document viewer (right), consolidated conditions summary (below)',
      aspect: '16:9',
    },
    {
      type: 'image',
      src: '/images/detail-mvp-work.png',
      alt: 'Close-up of inline document viewer with highlighted field comparison',
      placeholder: 'Detail: inline document viewer with a data field highlighted, showing analyst comparing extracted value to source document',
      aspect: '4:3',
    },
    {
      type: 'text',
      heading: 'V2 — Borrower Self-Service',
      body: 'V2 shifted work that once belonged to loan analysts directly to borrowers. AI now generates actionable tasks — starting with borrower name and entity corrections — and delivers them to the borrower automatically. The borrower uploads a corrected document, gets immediate feedback, resubmits if needed, and moves forward without waiting for an analyst to intervene. It\'s a loop: AI reviews, borrower acts, AI confirms. Loans close faster, analysts focus on higher-value exceptions, and borrowers get the agency and control they\'ve been missing.\n\nThis is the first task type, but the pattern is designed to expand. Anything an analyst currently does that\'s routine, repeatable, and document-driven is a candidate for borrower self-service — and each new task type compounds the efficiency gains on both sides.\n\nThe longer-term vision is an Instant Review Hub — a unified interface that extends this AI-driven review and task generation pattern beyond property documents to any domain in the loan lifecycle. Member entities, borrower information, property data, title, appraisal — each domain gets the same treatment: AI extracts and validates, analysts audit in a single view with granular escape hatches per data source, and borrowers receive self-service tasks to resolve issues on their own. One pattern, applied everywhere.',
    },
    {
      type: 'image',
      src: '/images/borrower-flow.png',
      alt: 'Borrower self-service task flow — AI generates task, borrower uploads corrected document, AI confirms',
      placeholder: 'UI flow: AI generates task -> borrower receives notification -> uploads corrected document -> AI reviews -> confirms or requests again',
      aspect: '16:9',
    },
    {
      type: 'image',
      src: '/images/future-vision.png',
      alt: 'Instant Review Hub concept showing multiple document domains in unified view',
      placeholder: 'Future vision: Instant Review Hub — multiple domains (Property, Member/Entities, Title, Appraisal) feeding into one review interface with per-source escape hatches',
      aspect: '16:9',
    },
    {
      type: 'metrics',
      heading: 'Results',
      items: [
        { value: '20 min -> 5-7 min', label: 'Document review time' },
        { value: '16% -> 30%', label: 'PSA auto-complete rate target' },
        { value: '100%', label: 'Decision audit trail coverage' },
      ],
    },
    {
      type: 'text',
      body: 'The redesigned review process cut analyst time from 20 minutes to 5-7 minutes per document — they\'re verifying the AI\'s work, not redoing it. Every decision is versioned, giving compliance reviewers a clear audit trail. V2 then took it further: AI-generated tasks now shift routine work directly to borrowers, starting with borrower name and entity corrections. Borrowers get agency, analysts get their time back, and loans close faster. The pattern is built to scale — any routine, data-driven task across any loan domain is a candidate for self-service.',
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
      heading: 'Process Snapshot',
      body: 'This site was built from tokens first, then componentized into reusable layout, content, and interaction primitives. AI tooling accelerated scaffolding and iteration speed, while final quality, accessibility, and narrative accuracy were handled through manual review.\n\nThe next pass of this case study will publish the complete build log: token decisions, prompt-output pairs, correction loops, and final launch metrics.',
    },
  ],
};
