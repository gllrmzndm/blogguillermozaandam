---
layout: ../../layouts/Post.astro
title: "Rsync back-ups"
publishDate: "November 13 2023"
description: "Easy Rsync back-ups"
image: "src/images/blogimages/pwsh.jpg"
alt: 
---

rsync -- a fast, versatile, remote (and local) file-copying tool


Some of the additional features of rsync are:

- support for copying links, devices, owners, groups, and permissions
- exclude and exclude-from options similar to GNU tar
- a CVS exclude mode for ignoring the same files that CVS would ignore
- can use any transparent remote shell, including ssh or rsh
- does not require super-user privileges
- pipelining of file transfers to minimize latency costs
- support for anonymous or authenticated rsync daemons (ideal for mirroring)


Rsync copies files either to or from a remote host, or locally on the current host (it does not support copying files between two remote hosts).
More info at: https://linux.die.net/man/1/rsync

---

## Story
After many back-up solutions, I've found the best one that suits my needs.
One that copy the "raw" files instead of making of compressing it with non-standard tools. (my assumption) so when I need to get those files back, I can open the File Explorer and copy it right back, without installing the back-up program itself.

The way I use Rsync is very simple... let me explain the explain the options.

- a is for archiving [0]
- v is for verbosity
- h is human readable
- p is preserve permission


```bash
rsync -avhp --exclude-from="/home/guillermo/rsyncexclude.txt" /home/guillermo/ /media/guillermo/SAMSUNG_256_NVME/MAGGIERAW
```

The reason why I increase verbosity is to exclude files and folders I don't need back-up. I don't need to back-up `.cache` so that directory is going on the exclude list.

And also it's easier to keep up which files and directories to exclude instead of typing everything in the terminal emulator.

### Rsyncexclude.txt

An example what to exclude:

```
node_modules
.cache
.config
.local
.npm
.nvm
```

---

## For Windows

### rynsc.ps1 (Powershell executable)

Slightly different for Windows utilizing Cygwin

*Cygwin is a collection of open source tools that allows Unix or Linux applications to be compiled and run on a Microsoft Windows operating system (OS) from within a Linux-like interface.*

And is required to run Rsync.

https://www.cygwin.com/install.html

https://community.chocolatey.org/packages/Cygwin

You can copy the command or copy the command in a file.

```powershell
﻿rsync -ahvp --exclude-from="/cygdrive/c/Users/guill/rsyncexclude.txt" "/cygdrive/c/Users/guill/" "/cygdrive/D/GUILLERMO_LATEST"
```

--

### Rsyncexclude.txt (Windows)

An example what to exclude:

```
AppData/Local/Packages
AppData/Local/
"C:\Users\guill\VirtualBox VMs"
.vscode/extensions/*
AppData/Roaming/Code/
AppData/Roaming/EaseUS/*
AppData/Roaming/*
AppData/LocalLow/*
VirtualBox VMs/
.vagrant.d/*
.config/
.vscode
```

---

[0] [What is archive mode in Rsync](https://serverfault.com/questions/141773/what-is-archive-mode-in-rsync)

Simple and stupid, but it works flawlessly, no time to waste.