# Site audit — fixes needed before launch

**Date:** 2026-07-01  
**Status:** Open — pick up next session

---

## CRITICAL

### 1. Placeholder testimonials on home page
Social Proof section is live with unfilled dummy content:
> "[Name] [Title] · [Company]"

Three testimonials, all blank. Either remove the section entirely or fill with real quotes before launch.

### 2. Nav doesn't match spec
Current: `Building · Experience · Expertise · Insights · About · Connect`  
Required (per CLAUDE.md): `Work · Experience · Services · Insights · About · [Book a Call →]`

- "Work" is labelled "Building" — should link to `/work`
- "Services" link is missing entirely
- Primary CTA `[Book a Call →]` button is absent from nav
- Extra items "Expertise", "Ideas", "Research" not in spec

### 3. Services page — missing or redirecting
Fetching `/services` returns Insights content. Either the route doesn't exist or is misconfigured. Needs investigation.

---

## NOTABLE

### 4. Calendly embeds not wired up
`/book` and `/give-back` pages have copy but no embed renders. Waiting on Calendly event URLs from Payal before this can be completed.

### 5. Hero copy has diverged from spec
- **Current:** *"Building systems at the intersection of fintech, AI, and emerging technology."*
- **Spec:** *"Fintech & Payments Executive. AI-First Venture Builder."*

Confirm whether this is an intentional rewrite or drift — if intentional, update CLAUDE.md to reflect.

### 6. Stat band — AI ventures metric wrong
Spec says `6 AI Ventures Built`. Currently renders as `Multiple Builder Mindset AI-native products...`. Fix the number and label copy to match spec.

### 7. Portrait missing on About page
"Portrait coming soon" placeholder is visible. Not a launch blocker but needs a headshot asset before go-live.

---

## What's working (no action needed)

| Page | Status |
|------|--------|
| `/experience` | Complete — all roles, correct metrics |
| `/about` | Content solid and on-voice |
| `/give-back` | Two programmes, well-written |
| `/insights` | 10+ real published articles, categorised |
| `/work` | All 8 projects, correct status tags and stack |

---

## Suggested order of work next session

1. Investigate and fix `/services` route
2. Fix nav — rename Building→Work, add Services, add Book a Call button
3. Remove or replace placeholder testimonials
4. Fix stat band copy (number + label)
5. Wire Calendly embeds when URLs are available
6. Confirm hero copy intent with Payal — revert to spec or update spec
