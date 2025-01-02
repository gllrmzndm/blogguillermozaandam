---
layout: ../../layouts/Post.astro
title: "Ghostty Terminal"
publishDate: "January 2 2025"
description: "It's just better than the others for me."
image: "/assets/ghostty/Ghostty.webp"
alt: "Image of a spinning ghost."
---

# Intro

[Ghostty](https://ghostty.org/) is a fast, feature-rich, and cross-platform terminal emulator that uses platform-native UI and GPU acceleration.
Like [Kitty](https://sw.kovidgoyal.net/kitty/) and [Alacritty](Alacritty) Kitty supports images out of the box and Alacritty doesn't.

---

### Other terminal emulators

Gnome terminal, [Windows terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=US) or [Tabby](https://github.com/Eugeny/tabby)
Are the ones that I used before, tabby is very heavy and the text rendering isn't the best, especially if you use [vifm](https://vifm.info/).
```bash
# Explaining vifm
Vifm is a file manager with curses interface, which provides Vim-like environment for managing objects within file systems, extended with some useful ideas from mutt.
If you use vi, Vifm gives you complete keyboard control over your files without having to learn a new set of commands. 
```
---

### Ghostty

What do I need to say?

```markdown
- Easy config, easier than Kitty which I installed before Ghostty. My go to was Gnome terminal.
- Respects my neovim theme out of the box.
- Fast
- And a couple of more things that I didn't found out yet or aren't supported on my operating system.
```
---

### Config

The config file, can be easily added to my GitHub dotfiles, that don't exist (yet).

``` bash
# The syntax is "key = value". The whitespace around the
# equals doesn't matter.
# background = ffffff 
# foreground = 282c34

# Comments start with a `#` and are only valid on their own line.
# Blank lines are ignored!

# Themes command ghostty +list-themes
theme = dark:Andromeda,light:AtomOneLight

# Empty values reset the configuration to the default value
font-family =

# shell-integrations
shell-integration = detect
shell-integration-features = true

#other
copy-on-select = clipboard
window-save-state = always
gtk-adwaita = true
desktop-notifications = true
auto-update-channel = stable
```
---