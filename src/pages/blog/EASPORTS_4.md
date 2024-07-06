---
layout: ../../layouts/Post.astro
title: Easportssss
description: Really?
publishDate: Saturday, July 31 2021
author: "Jaydan Urwin"
image: "/assets/blog/example-blog/alex-bertha-7VAXeUIn3tI-unsplash.jpg"
alt: Trees in the mountains
---

# Table of content

# Intro

![Giulia Green](/src/images_and_videos/Giulia_Green_Front.jpeg)

<video controls width="250">
  <source src="/src/images_and_videos/uhuh.mp4" type="video/mp4" />

How do I manage six-thousand bookmarks? To be honest, I had no clue how many bookmarks I had, since I don’t count them. I had to use an extension to figure this out on Edge and Chrome on Firefox it’s easier I think, Firefox isn’t my main main-browser right now.

## Firefox tags

Back when I used Firefox as my main browser, you could tag your bookmarks with your words and separate them with commas. Other browsers don’t support this, so relying on tags isn’t an option.
I am relying on my own “tags” to quickly search my bookmarks without opening the bookmarks page with the help of an extension called Vimium.

## Using an extension (Vimium)

I’m using an extension to make it seamlessly and it’s called Vimium and it’s available for most popular browsers.

## Getting creative with tags

![Giulia Green](/assets/blog/uhuh.mp4)

Whenever I need to save a bookmark a website I need come up with severals words (tags) to get back whenever I need to visit the website again, in general I come up with some random words the correspond to the website itself. For example we have a website talking about The performance of NTFS on Windows. [Over here](https://github.com/Microsoft/WSL/issues/873#issuecomment-425272829)

So my tag(s) are: " #windowsntfsperformance" behind the url itself. So actually it´s:

## My experience

One of the things that I don't like about Windows is the standard back-up solution provided by Windows.
In my experience with customers, the tool wasn't reliable enough to use it widely with customers.

Especially the restore function didn't do well, the same is true Timemachine on MacOS.

## Backup and Restore improvements Windows 10 and Windows 11

But they are working on new back-up feature in both [Windows](https://twitter.com/PhantomOfEarth/status/1690143092224266244?s=20) 10 and [Windows 11](https://blogs.windows.com/windows-insider/2023/05/24/announcing-windows-11-insider-preview-build-23466/).

_Building on the app restore feature we announced last year, we are introducing additional backup and restore capabilities in this build to make moving to a new PC easier than ever and to help app developers retain users across this new PC transition. The goal of these changes is to land users on a desktop that feels familiar to them and get them back to productivity within minutes on their new PC._

## My own solution

My own solution that is manual and not can be used on any systems where is `rsync` available.

I first that with the files and folders that I don't want to back-up and these are...

One of the files called `rsyncexclude.txt`.

And it looks like this:

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

!!! Note

    You can make a text file called `rsyncexlude.txt` and copy the excluded files and folders into the text editor.

The next one is my powershell script.

Called: rsync.ps1

```
rsync -ahv --exclude-from="/cygdrive/c/Users/guill/rsyncexclude.txt" "/cygdrive/c/Users/guill/" "/cygdrive/D/GUILLERMO/EXTERNALDEVICE/SAMSUNGSHIELDT7"
```

It's easier since I don't need the type the whole command over and over again.

From the top of my head -ahvp meaning on rsync is, Archive, Human readable and Verbose.
The external the device that I'm using is a Samsung SSD T7 Shield 1TB with NTFS.
And I can use it directly on Linux (Fedora/Debian) without any issue. Even Bitlocker is supported.
The files that have been copied to the external device can be used directly without unpacking anything[0].
That's a win in my eyes.

[0] Of course the smallers that I being zipped (using Tar, but you know what I mean) for a better transfer speed in general.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </body>
</html>
```

!!! success "Done"
