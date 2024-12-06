---
layout: ../../layouts/Post.astro
title: "No password SSH Windows"
publishDate: "November 13 2023"
description: "Passwordless SSH Windows"
image: "src/images/blogimages/s2022.jpg"
alt: 
---

# How to establish a passwordless SSH Connection between Windows and Linux

Open your favourite terminal emulator like Windows Terminal

1. Use powershell: ```ssh-keygen -t ed25519```
2. Choose a save location with password or without your choice.
3. Change your current directory to your SSH folder ``` cd .\.ssh\```
4. Copy your public key to your Linux server ```scp .\id_ed25519.pub $name@192.168.1.173:~/```
5. press **CTRL + D** tells the terminal that it should register a EOF on standard input, which bash interprets as a desire to exit.
6. ```ssh $name@192.168.1.173```
7. You're in without a password.
