# Advanced Playwright with TypeScript — Day 1 Starter

This is the project you build the three Day 1 labs into. Uses two public sandboxes —
`the-internet.herokuapp.com` for UI, `reqres.in` for API — so there is nothing confidential
in it and it is safe to push to any repo.

## Setup

```bash
npm install
npx playwright install --with-deps
```

There's nothing to run yet — `npm test` will report "no tests found" until you've built
something in one of the labs. That's expected.

## What's already here, and why

| File | Status | Why |
|---|---|---|
| `pages/LoginPage.ts` | Pre-built | Referenced as a given in Lab 2's prerequisites — Lab 1 doesn't use it (Lab 1 is raw locators, on purpose, before Page Object Model is introduced in Topic 4) |
| `playwright.config.ts` | Pre-built, but `globalSetup` line is commented out | Lab 3 (Topic 7) has you add it yourself |
| everything else in `pages/`, `fixtures/`, `tests/` | **Empty — you build these** | That's the labs |

## What each lab adds

* **Lab 1** (Topic 3.2) — `tests/ui/login.spec.ts`, written with raw locators, no Page Objects yet.
* **Lab 2** (Topic 5.2) — `pages/SecureAreaPage.ts`, then a test wiring it together with `LoginPage`.
* **Lab 3** (Topic 7.2) — `global-setup.ts`, `fixtures/base.ts` (the `authenticatedPage` fixture chain), then a test that uses it.

Follow the GitBook Lab Guide pages for step-by-step instructions — this repo intentionally
doesn't hand you the answers up front.

## Project structure

```
pages/                 Page Object Model classes — LoginPage.ts given, you add the rest
fixtures/               Typed custom fixtures — empty until Lab 3
tests/ui/               UI specs — empty until Lab 1
utils/                  Shared test-data generation (used from Day 2 onward)
playwright.config.ts    Config — globalSetup wired in during Lab 3
azure-pipelines.yml     CI pipeline (Day 3 material)
```

Day 2 and Day 3 add their own test directories and fixtures on top of this as the
programme progresses.
