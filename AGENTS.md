# AGENTS.md

## Project Overview

- Project: SIGNAL SCANNER 2.0
- Purpose: A pure static Chinese interactive webpage that lets visitors light up signal nodes and receive a playful local-only daily signal report.
- Current Goals:
  - Keep the page easy to open directly from `index.html`.
  - Preserve the privacy promise: no backend, no external API calls, no personal data collection, and no permission requests.
  - Maintain desktop and mobile portrait usability for the signal-node interaction and result card.

## Tech Stack

- Language: HTML, CSS, JavaScript
- Framework: None
- Package Manager: None
- Key Libraries: None; browser-native DOM, CSS, and SVG only
- Keep this project as pure static HTML/CSS/JavaScript unless the user explicitly confirms otherwise.

## Commands

- Run: Open `index.html` directly in a browser.
- Build: None; this project has no build step.
- Test: None configured; verify manually in a browser.
- Lint: None configured.
- Typecheck: None configured.

## Run Commands

- Open `index.html` directly in a browser.
- A local static server is optional and not required for normal use.

## Build Commands

- No build command is available or required.
- GitHub Pages can deploy the root files directly.

## Test Commands

- No automated test command is configured.
- For UI changes, manually verify desktop and mobile portrait behavior in a browser.

## Important Directories

- Source: Repository root
- UI: `index.html`, `style.css`, `script.js`
- Tests: None
- Docs: `README.md`
- Config: `.gitignore`
- Local tools: `.tools/` is ignored and should not be treated as app source.
- Agent/workbench files: `.agents/` is ignored and should not be treated as app source.

## Do Not Modify

- Do not edit without confirmation: `index.html`, `style.css`, `script.js`, `README.md`
- Generated files: None identified
- Secrets / env files: None identified; do not add or expose secrets
- Do not change the privacy behavior by adding external calls, storage, analytics, trackers, or browser permission requests without explicit confirmation.
- Do not introduce Node, bundlers, frameworks, external APIs, or unnecessary dependencies without explicit confirmation.

## Working Rules

- Use Chinese for communication.
- Start with the conclusion, then explain reasons.
- Read project structure, README, config, and relevant files before important changes.
- Keep changes small and consistent with existing patterns.
- Ask before large rewrites, architecture changes, new dependencies, or config changes.
- Do not install unknown or unclear-source tools.
- Do not read secrets, API keys, tokens, or credentials unless explicitly required and approved.
- Do not print, expose, or commit API keys, tokens, secrets, or private credentials.
- State uncertainty clearly and explain how to verify it.

## Autonomous Research

Trigger this flow for UI/UX, architecture, complex features, unfamiliar libraries/APIs, open-source reference work, performance, or security tasks:

1. Understand the project and task.
2. Check whether external references are needed.
3. Prefer official docs, high-quality GitHub projects, mature implementations, and best practices.
4. Compare 2-3 practical options.
5. Recommend the best fit for this project.
6. Wait for confirmation before major changes, new dependencies, or architecture changes.
7. Implement after confirmation.
8. Verify with project commands or browser checks.
9. Summarize result, risk, and reusable lessons.

Skip this flow for small bug fixes, copy edits, simple style tweaks, or explicitly scoped quick changes.

## UI/UX Rules

- Reference mature products or strong open-source examples before major UI work.
- Prioritize structure, usability, accessibility, and consistency.
- Avoid decorative complexity that does not improve the user experience.
- Check responsive behavior when UI changes are made.
- Keep UI/UX changes lightweight and preserve the soft nighttime signal-scanner feeling unless the user asks for a different direction.
- Mobile guidance must be clear without relying on hover.
- Motion must respect `prefers-reduced-motion`.

## Verification

Run the relevant checks after changes:

- Build: Not applicable unless the project gains a build step.
- Test: Not applicable unless tests are added.
- Lint: Not applicable unless linting is added.
- Typecheck: Not applicable unless typed tooling is added.
- Local run: Open `index.html` in a browser.
- Browser verification: Check desktop, mobile portrait, keyboard focus, reduced-motion behavior, signal nodes, result card, and decode/reset buttons.

If verification cannot be run, explain why and list remaining risk.
If screenshot verification fails, state the reason and do not claim visual verification is complete.

## Learning Capture

At the end of substantial tasks, decide whether any lesson should be saved:

- Current task only: keep in the conversation.
- Project-specific: suggest updating this `AGENTS.md`.
- Cross-project: suggest updating Codex Working Profile.
- Repeated workflow: suggest creating a Skill.
- Needs external capability: suggest plugin / MCP research.

Do not write long-term rules without user confirmation.

## Codex Workbench Trigger

If this project uses Codex Workbench, when the user says "超级codex启动", read the Workbench and follow `workflows/new-project-onboarding.md` to onboard the project before making changes.
