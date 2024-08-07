---
layout: ../../layouts/Post.astro
title: "Passwordless SSH"
publishDate: "July 14 2024"
description: "SSH Windows to Linux"
image: "/assets/U24.jpg"
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


You're done, way easier than [this medium article](https://medium.com/@ramon.solodezaldivar/how-to-establish-a-passwordless-ssh-s-connection-between-windows-and-linux-c75a948513b2)