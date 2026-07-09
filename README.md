# Growth Review Staging (PUBLIC)

> **This is NOT the private AppFigures growth repository.**
>
> Private source of truth: the local growth command-center repo (kept separate)  
> Public review staging: this folder only

## Purpose

One durable GitHub Pages site for Ariel (and other reviewers) to open a single URL and review customer-facing copy + images. Same pattern as [onboarding-wireframes](https://sprfrkr.github.io/onboarding-wireframes/wireframes.html).

## Hard rules

1. **Never** clone, submodule, or copy the private growth repo into this folder.
2. **Never** publish runbooks, admin code specs, Google Ads audience IDs, redemption targets, CRM exports, credentials, or Working Logs.
3. Publish **only** via the allowlisted script in the private repo:
   `_docs/offers-and-promotions/summer-sale-2026/review-site/publish-to-growth-review.sh`
4. After each publish, run the security checklist in that script output before `git push`.
5. Prefer short-lived campaign folders; move closed reviews to `_archive/`.

## Intended remote (not created until Shannon approves)

- Suggested repo: `sprfrkr/growth-review` (PUBLIC)
- Suggested Pages URL: `https://sprfrkr.github.io/growth-review/`
- Do **not** push until Shannon explicitly approves

## Local preview

```bash
cd "/Users/ShannonSofield/Documents/growth-review"
timeout 30 python3 -m http.server 8770
```

Open http://localhost:8770/

## Active packages

| Package | Path | Status |
|---------|------|--------|
| Summer Sale 2026 | [summer-sale-2026/](./summer-sale-2026/) | In review |
| Onboarding wireframes | Separate repo today: [onboarding-wireframes](https://github.com/sprfrkr/onboarding-wireframes) | Live elsewhere; migrate later if desired |
