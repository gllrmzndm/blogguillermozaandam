---
layout: ../../layouts/Post.astro
title: "Firefox Dev edition"
publishDate: "January 2 2025"
description: "How to easily install Firefox Dev Edtion (Fedora)"
image: "/assets/Firefox_dev_edition/firefox_dev_edition.png"
alt: "Firefox logo"
---

### Intro

Preferences tailored for web developers: Browser and remote debugging are enabled by default, as are the dark theme and developer toolbar button.
You know why to use it.

---

### How to install Firefox Developer Edition on Linux Fedora

0. Make sure the `dnf-plugins-core` package is installed.

```bash
sudo dnf install dnf-plugins-core
```

1. Enable the `the4runner/firefox-dev` [Copr](https://copr.fedorainfracloud.org/) repository:

   ```bash
   sudo dnf copr enable the4runner/firefox-dev`
   ```

2. Install `Firefox Developer Edition`:
   ```bash
   sudo dnf check-update
   sudo dnf upgrade -y

   sudo dnf install firefox-dev -y
   ```
---