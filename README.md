# Kense website

This repository publishes the [Kense organization website](https://kense-labs.github.io/). The site source, component documentation and release build live in [kense-labs/KUI](https://github.com/kense-labs/KUI).

The [publishing workflow](.github/workflows/publish.yml) checks for a new KUI release every five minutes and verifies its SHA-256 checksum before deploying it to GitHub Pages.

## `/krun` docs

Static krun / Runtime docs are published at **https://kense-labs.github.io/krun/** (path `/krun`, not part of the KUI app router).

- Content branch: `krun-docs` (docs root)
- Refresh workflow: [publish-krun.yml](.github/workflows/publish-krun.yml)
- Source builds from [kense-labs/inkstone](https://github.com/kense-labs/inkstone) (`runtime/docs`)
