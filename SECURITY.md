# What may never enter this repository

This folder is intended to become a **public** GitHub Pages site. Treat every file as world-readable.

## Blocked (never copy here)

- Anything from the private growth repo except an **allowlisted** publish
- `Insights.md`, `_docs/plans/`, `_docs/reports/`, metrics exports
- Admin / billing specs (`admin-code-spec.md`, plan config dumps)
- Launch runbooks, redemption logs, post-promo scorecards with revenue
- Google Ads / LinkedIn / Meta audience IDs and Customer Match lists
- Exclusion strategy docs with list IDs
- Credentials, `.env`, tokens, Pipedrive exports, email lists
- Internal Notion task IDs used as private working notes
- Agent transcripts, Cursor plans, `.cursor/` rules
- Source HTML/CSS build scripts that reference private absolute paths (optional; prefer baked assets)

## Allowed (customer-facing review only)

- Review homepage HTML/CSS for this staging site
- Campaign review gallery HTML
- Image assets Ariel must see (PNG/JPG/WebP)
- Customer-facing copy embedded in the gallery (subjects, bodies, social captions, ad lines, banners)
- Short “asks for Ariel” checklist without internal repo paths

## Separation checklist before every push

- [ ] Working directory is this public staging folder, not the private growth command-center repo
- [ ] `git remote -v` does **not** point at the private growth repo
- [ ] Campaign package contains HTML/CSS/PNG only (no markdown dumps, no env, no CSV)
- [ ] Publish script security scan passed
- [ ] Shannon approved the push
