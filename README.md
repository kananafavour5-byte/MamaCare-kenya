# MamaCare Kenya

**MamaCare Kenya helps expecting and new mothers access organized,
trustworthy maternal and newborn information, and find appropriate
healthcare services when they need professional care.**

A Phase 1 React frontend project (external API integration, React Router,
state management, UI/UX). The app is organized around a mother's actual
journey — what she needs to know, what to do next, and where to get help —
with a warm, playful purple-and-white visual identity inspired by
editorial pregnancy/parenting sites like The Bump.

## Background

Kenya's healthcare system faces well-documented access challenges: a
shortage of doctors relative to WHO benchmarks, an urban–rural gap in
facility quality, and complexity in the newer national health insurance
scheme's coverage for informal-sector workers. Telehealth and
information-first tools are already being piloted as one way to help close
this gap, particularly for maternal and newborn health. MamaCare Kenya sits
in that space: not a replacement for a clinician, but a trustworthy,
welcoming first stop for a mother trying to figure out what's normal, what
to prepare for, and when it's time to seek care.

## Design direction

The app's palette is white/cream with a confident lavender-purple brand
color, warm pink and peach accents for personality, and mint/purple used
for content variety. Get Help deliberately keeps its own distinct
raspberry-red so its warning tone stays meaningful against an otherwise
all-purple palette. Type pairs a rounded, friendly display face (Fredoka)
with a warm body sans (Nunito). All imagery is original SVG illustration
built for this app — no stock photography is embedded in the codebase,
to avoid shipping images without clear usage rights in a project meant
for a public GitHub repo.

**An original take on The Bump's most iconic feature:** every pregnancy
week band carries a "baby is about the size of a ___" fruit comparison,
shown as a badge on Journey, the Dashboard, and as a scrollable "week by
week" strip on Home — written in our own words, not reused copy.

**An original take on The Bump's "browse any week" pattern:** the Journey
page has a horizontally scrollable stage picker, so a mother can preview
any week/age's content, not just her current one — with a clear banner and
one-tap way back to "today" so she never loses track of where she actually
is.

## Features

| Page | What it does |
|---|---|
| **Home** | Hero illustration, "I'm pregnant" / "My baby is here" entry choice, a scrollable week-by-week fruit strip, and shortcut cards |
| **Dashboard** | Tracks **both mother and baby progress** in one place: live stats (current week/age, trimester, days to go, baby's size), the shared journey-path visual, and an interactive, checkable "this week's focus" checklist that persists across visits |
| **Journey** | Full content for any pregnancy week or baby age — what's happening, what to learn, what to prepare, and a focus checklist — with a scrollable stage picker to preview other weeks |
| **Guide** | 7 browsable categories (Pregnancy, Newborn, Mother Care, Feeding, Sleep, Hygiene, Development) with ~30 short articles in a magazine-style card grid, each source-tagged. Medication Information is nested here. |
| **Medication Information** | Search a medicine by name and see label data — active ingredient, warnings, pregnancy/lactation info when present — pulled live from the **openFDA** API |
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

That's it — every feature, including Find Care, works immediately with no
API keys or environment setup required.

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
- The Dashboard's checklist is saved to the browser's localStorage only —
  it won't follow a mother to a different device, and clearing browser
  data resets it. This is the clearest, most natural piece of Phase 1 to
  move to a real account in Phase 3.
- A Research feature (PubMed/NCBI) was discussed in planning as a stretch
  goal and is not built in this phase.
- Journey/Guide content is static, curated data for Phase 1. Phase 2 will
  move it to a database with a Flask API; Phase 3 will add accounts so a
  mother's chosen stage, saved facilities, medication lookups, and
  checklist progress persist and become personal — the Dashboard's shape
  is designed to make that transition straightforward.

## Project structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, PageWrapper
│   ├── home/          # Journey entry choice, summary card, week ticker
│   ├── guide/           # Guide category cards
│   ├── medication/       # Medication search, result, disclaimer
│   ├── facility/          # Facility search/filter, result card
│   ├── help/                # Mother / Newborn warning signs
│   └── shared/                # LoadingSpinner, ErrorMessage, EmptyState,
│                                 SourceTag, StageScrubber, JourneyPathSignature,
│                                 and the app's original SVG illustrations
├── data/               # journeyContent.js, guideData.js, getHelpData.js,
│                          facilities.js
├── hooks/               # useMedicationLookup, useFacilityFilter,
│                          useJourneyProfile, useChecklist (all custom
│                          hooks wrap their own fetch/loading/error or
│                          persistence logic, kept out of page components)
├── lib/                  # stageCalculator.js — pure date/stage math
└── pages/                 # One page component per route, including
                              DashboardPage
```

State management deliberately stays to `useState`, `useEffect`, custom
hooks, and props for Phase 1 — no React Context. Three small, focused
localStorage-backed hooks (`useJourneyProfile`, `useChecklist`) handle the
only genuinely cross-page state (the mother's stage/dates, and her
checklist progress), which is simpler than Context for this scale and
maps naturally onto what Phase 3's real accounts will replace.

Code is commented throughout — especially in the hooks, data helpers, and
anywhere the logic isn't obvious at a glance (e.g. why Find Care doesn't
call a live API, why one particular React hook has to be called before an
early return, why the openFDA search query uses an explicit OR).
