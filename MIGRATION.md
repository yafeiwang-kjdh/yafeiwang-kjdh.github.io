# Yafei Wang — al-folio / Jekyll

This is a separate, genuine al-folio v1 site using the official `al_folio_core` gem and Jekyll. It is not a Hugo restyling.

## Preservation

The original `../academic-WYF` repository is untouched. Its branches and history are also preserved in `../academic-WYF-preserved-20261128.bundle`. The preceding Hugo design preview remains in that repository's separate branch.

## Content

- `_pages/about.md`: biography, selected publications, collaborator section.
- `_bibliography/papers.bib`: all 48 source website publications; source-confirmed years/months and author order preserved.
- `_pages/publications.md`, `_pages/first-author.md`: full publications and 12 first/co-first-author items, grouped with co-first-author entries following first-author entries.
- `_pages/paper-*.md`: original individual publication permalinks.
- `_data/coauthors.yml`: original Google Scholar author links.
- `_data/collaborators.yml`: original order, supervisor labels, IEEE evidence and historical caveat.
- `_pages/experience.md`, `_pages/projects.md`, `_pages/cv.md`: personal pages.
- `uploads/CV_Yafei.pdf`: unchanged original website CV download URL.
- `PERSONAL_SITE_RULES.md`: original ordering policy. Adapt its Hugo-specific paths to `_data/collaborators.yml` and `_includes/collaborators.liquid`.

Original metadata is archived locally in `migration/hugo-content` and `migration/hugo-data`; `migration/manifest.json` records all migrated paper routes. Sample content is stored in `_demo_archive`, excluded from builds and version control.

## Local development

Run `./preview.ps1`, then open http://127.0.0.1:4000/ . Ruby is installed separately under D:/tools/ruby-academic. On another machine, install Ruby 3.3 and Node.js, then run `bundle install` and `bundle exec jekyll serve --baseurl ''`.

## Deployment

`origin` is the personal GitHub Pages repository. Pushes to `main` build this Jekyll site and deploy with GitHub Actions. The pre-migration main is preserved in the remote branch `archive/hugo-before-al-folio-20261128`, as well as the original local repository and Git bundle. No force push is used.

## Overrides

Local overrides customize the about layout, bibliography links, navigation alignment, and color palette. Reviewed upstream checksums are recorded in `.al-folio-overrides.yml`.

The local `_layouts/bib.liquid` keeps the upstream layout and adds root-relative HTML/PDF URL support for migrated links.
