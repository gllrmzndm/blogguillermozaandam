---
layout: ../../layouts/Post.astro
title: "Windows Hello for Linux (Facial Recognition)"
publishDate: "January 8 2025"
description: "Login-in with your IR camera on Linux with a workaround..."
image: "/assets/linux_hello/linux_hello.jpg"
alt: ""
---

# Intro

Howdy provides Windows Hello™ style authentication for Linux. Use your built-in IR emitters and camera in combination with facial recognition to prove who you are.
Using the central authentication system (PAM), this works everywhere you would otherwise need your password: Login, lock screen, sudo, su, etc.

---

## Debian or Ubuntu

Run the installer by pasting (ctrl+shift+V) the following commands into the terminal one at a time:

``` bash
sudo add-apt-repository ppa:boltgolt/howdy
sudo apt update -y
sudo apt install howdy -y && sudo apt install ffmpeg -y
```

## Fedora

Maintainer: @luyatshimbalanga

The howdy package is available as a Fedora COPR repository, install it by simply executing the following commands in a terminal:

```bash
sudo dnf copr enable principis/howdy
sudo dnf --refresh install howdy
```

---

## Installation and configuration

Search for your IR camera (IR camera is black and white only)

example commands:

```bash
ffplay /dev/video0
ffplay /dev/video1
ffplay /dev/video2
ffplay /dev/video3
```
Use these commands until you find the camera

```bash
sudo howdy config
```
Edit:

```bash
device_path = /dev/video2 #For example
```

Next:

```bash
sudo howdy add
```

---

## Workaround Unsupported image type error #928

Error:

```bash
Traceback (most recent call last):
  File "/usr/local/bin/howdy", line 95, in <module>
    import cli.add
  File "/usr/lib/security/howdy/cli/add.py", line 157, in <module>
    face_locations = face_detector(gsframe, 1)
RuntimeError: Unsupported image type, must be 8bit gray or RGB image.
```

Workaround for now:

```bash
sudo pip install --upgrade numpy==1.26.4
```

----