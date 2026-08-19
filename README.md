# MamaCare Kenya

**MamaCare Kenya helps expecting and new mothers access organized,
trustworthy maternal and newborn information, and find appropriate
healthcare services when they need professional care.**

**Author:** Favour Kirema

A Phase 1 React frontend project (external API integration, React Router,
state management, UI/UX). The app was created from observing the practical
information and support needs that pregnant women and new mothers can face
through pregnancy, childbirth, and the early months of caring for a baby.
MamaCare Kenya is designed around a mother's actual journey — what she
needs to know, what to do next, how to keep track of important things, and
where to get help when she needs professional care.

## Background

Kenya's healthcare system faces well-documented access challenges: a
shortage of doctors relative to WHO benchmarks, an urban–rural gap in
facility quality, and complexity in the newer national health insurance
scheme's coverage for informal-sector workers. Telehealth and
information-first tools are already being piloted as one way to help close
this gap, particularly for maternal and newborn health. MamaCare Kenya sits
in that space: not a replacement for a clinician, but a trustworthy,
welcoming first stop for a mother trying to figure out what's normal, what
to prepare for, how to keep track of her day-to-day experience, and when
it's time to seek care.

## Design direction

The app's palette is white/cream with a confident lavender-purple brand
color, warm pink and peach accents for personality, and mint/purple used
for content variety. Get Help deliberately keeps its own distinct
raspberry-red so its warning tone stays meaningful against an otherwise
all-purple palette. Type pairs a rounded, friendly display face (Fredoka)
with a warm body sans (Nunito). The project uses a combination of original
SVG illustrations and image assets selected for specific sections of the
experience, including Guide, Find Care, Get Help, and tracking features.

The design is intentionally warm, approachable, and easy to navigate rather
than clinical or intimidating. The goal is to make important maternal and
newborn information feel organized and accessible while keeping clear
visual distinctions between everyday guidance, tracking tools, healthcare
services, and situations that may require urgent professional attention.

The pregnancy journey includes week-by-week fruit-size comparisons to give
mothers an approachable visual way to understand fetal growth. These
comparisons appear across Journey, the Dashboard, and the scrollable
week-by-week section on Home, using original wording and presentation.

The Journey page also includes a horizontally scrollable stage picker,
allowing a mother to preview content for other pregnancy weeks or newborn
ages while maintaining a clear indication of her current stage.

## Features

| Page | What it does |
|---|---|
| **Home** | Hero illustration, "I'm pregnant" / "My baby is here" entry choice, a scrollable week-by-week fruit strip, and shortcut cards |
| **Dashboard** | Tracks **both mother and baby progress** in one place: live stats (current week/age, trimester, days to go, baby's size), the shared journey-path visual, and an interactive, checkable "this week's focus" checklist that persists across visits. The dashboard also provides stage-specific tracking tools for pregnancy and the postpartum/newborn stage. |
| **Journey** | Full content for any pregnancy week or baby age — what's happening, what to learn, what to prepare, and a focus checklist — with a scrollable stage picker to preview other weeks |
| **Guide** | 7 browsable categories (Pregnancy, Newborn, Mother Care, Feeding, Sleep, Hygiene, Development) with ~30 short articles in a magazine-style card grid, each source-tagged. Medication Information is nested here. |
| **Medication Information** | Search a medicine by name and see label data — active ingredient, warnings, pregnancy/lactation info when present — pulled live from the **openFDA** API |
| **Track** | Stage-specific daily tracking. Pregnancy tracking covers symptoms, weight, sleep, mood, and a copyable health-worker summary, while the Baby Is Here tracker focuses on feeding, sleep, diapers, and mood. Tracking data is saved locally on the user's device. |
| **Find Care** | Search a curated list of real Kenyan maternal/newborn facilities by name, county, service, or Linda Mama coverage — no API key required |
| **Get Help** | Kenya emergency numbers, and Mother/Newborn warning-sign lists that say when to seek professional care — visually distinct from the rest of the app on purpose |

## Tech stack

- React 19 + Vite
- React Router v7
- Tailwind CSS v4 (custom design tokens — see `src/index.css`)
- Fredoka (display), Nunito (body), IBM Plex Mono (labels/data)

## Setup instructions

```bash
npm install
npm run dev       # start the dev server
npm run build      # production build
npm run lint        # oxlint
```

That's it — every feature, including Find Care and the local tracking
features, works immediately with no API keys or environment setup
required. Medication Information requires an internet connection for live
openFDA lookups.

## APIs used

### openFDA Drug Label API

- `GET https://api.fda.gov/drug/label.json?search=openfda.brand_name:"..."+OR+openfda.generic_name:"..."&limit=5`
- No key required
- Powers Medication Information. **Important:** openFDA's own documentation
  states this data should not be relied on for medical care decisions and
  hasn't all been validated for clinical use — this app surfaces label data,
  it never renders a "this is safe" verdict, and carries a persistent
  disclaimer on every result.

### Find Care — curated dataset, not a live API call

Find Care deliberately does **not** require a live external API in this
phase. It filters a curated, static list of 30 real, named Kenyan
maternal/newborn facilities (`src/data/facilities.js`) across 14 counties,
each flagged for Linda Mama (Kenya's free maternity insurance) coverage.
This was a conscious trade against requiring every user to bring their own
Google Places API key just to see results — see "Known limitations" below
for the reasoning and what a live version would look like.

## Content sourcing & an honest note on gaps

Journey and Guide content is written from WHO's 8-contact antenatal care
model and general WHO/UNICEF newborn care guidance — curated by hand, not
fetched from an API, since no reliable free "pregnancy content" API exists.

The **Get Help** warning-sign lists are sourced differently on each side,
and that's disclosed directly in the app:
- **Newborn** warning signs are grounded in Kenya's own Ministry of Health
  MCH-booklet danger-sign framework.
- **Mother** warning signs are adapted from international clinical
  guidance (ACOG/AWHONN) — no equivalent Kenya-specific public list was
  found during research, so this is noted honestly rather than
  overclaiming a single authoritative source.

The **Find Care** facility list was hand-curated for this project rather
than pulled from a verified live registry — contact numbers and details
should be confirmed directly with the facility before relying on them,
especially in an emergency. This is stated in the app itself, not just here.

This app is informational only and is not a substitute for professional
medical advice, diagnosis, or treatment.

## Known limitations / possible next steps

- Find Care uses curated static data rather than a live lookup — by design,
  so the feature works for every user with zero setup. Google Places
  integration exists in the codebase (`src/hooks/useFacilitySearch.js`,
  clearly marked as unused) as a ready-to-wire-in option for a live
  version. Kenya's own facility registry (KMHFL) was evaluated too, but
  requires OAuth2 credentials even for public read access, which isn't a
  good fit for a pure client-side app — a strong candidate to revisit once
  Phase 2 adds a Flask backend that can hold credentials safely.
- The Dashboard's checklist and daily tracking data are saved to the
  browser's localStorage only — they won't follow a mother to a different
  device, and clearing browser data resets them. This is the clearest, most
  natural piece of Phase 1 to move to a real account in Phase 3.
- A Research feature (PubMed/NCBI) was discussed in planning as a stretch
  goal and is not built in this phase.
- Journey/Guide content is static, curated data for Phase 1. Phase 2 will
  move it to a database with a Flask API; Phase 3 will add accounts so a
  mother's chosen stage, saved facilities, medication lookups, tracking
  data, and checklist progress persist and become personal — the
  Dashboard's shape is designed to make that transition straightforward.

## Project structure

```text
src/
├── components/
│   ├── layout/       # Navbar, Footer, PageWrapper
│   ├── home/         # Journey entry choice, summary card, week ticker
│   ├── guide/        # Guide category cards
│   ├── medication/  # Medication search, result, disclaimer
│   ├── facility/     # Facility search/filter, result card
│   ├── help/         # Mother / Newborn warning signs
│   ├── track/        # Pregnancy and Baby Is Here tracking tools
│   └── shared/       # LoadingSpinner, ErrorMessage, EmptyState,
│                       # SourceTag, StageScrubber, JourneyPathSignature,
│                       # and the app's original SVG illustrations
├── data/             # journeyContent.js, guideData.js, getHelpData.js,
│                       # facilities.js
├── hooks/            # useMedicationLookup, useFacilityFilter,
│                       # useJourneyProfile, useChecklist, useTracker
│                       # (all custom hooks wrap their own fetch/loading/error
│                       # or persistence logic, kept out of page components)
├── lib/              # stageCalculator.js — pure date/stage math
└── pages/             # One page component per route, including
                        # DashboardPage and TrackPage
```

State management deliberately stays to `useState`, `useEffect`, custom
hooks, and props for Phase 1 — no React Context. Focused localStorage-backed
hooks (`useJourneyProfile`, `useChecklist`, and `useTracker`) handle the
mother's stage/dates, checklist progress, and daily tracking data. This is
simpler than Context for this scale and maps naturally onto what Phase 3's
real accounts will replace.

Code is commented throughout — especially in the hooks, data helpers, and
anywhere the logic isn't obvious at a glance (e.g. why Find Care doesn't
call a live API, why one particular React hook has to be called before an
early return, why the openFDA search query uses an explicit OR).
