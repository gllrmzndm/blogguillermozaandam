---
layout: ../../layouts/Post.astro

title: "Behind the scenes with Guillermo"

date: 12-31-2024
---

## Intro Blog will be updated later


## Coming from the automotive industry

##### I like efficiency

I'd take my work seriously and I like the solve problems as quickly as possible.
I'm fan of motorsports like Rally, Time-Attack and Gymkhana.
Every discipline has their own unique problems and so do we in IT and Software engineering.

In order to solve the problems that I'm facing in IT and software engineering, I've been experimenting with a lot of possible solutions in order to solve them.
This blogpost is one of them.

A small insight in what in what, how and why I do this.

My setup consist of a single screen, I can only focus on one screen at a time.
Things need to be clean and out of sight and out of mind basically.

## test


## Hardware that I use

I’m mostly (trying) to use business hardware as much as possible.

- **Lenovo Thinkstation** Intel 11 gen 32GB DDR4 3200mhz (Business PC)
- **HP Envy 15"** Ryzen 5700u 16Gb DDR4 3200mhz (Consumer PC with business perks)
- **Another HP Envy 15"** Ryzen 5700u 16Gb DDR4 3200mhz (Consumer PC with business perks)
- **Intel Nuc** with RealTek nic unfortunately (server) 16GB LPDDR4 3200mhz single channel memory (Consumer)
- **Raspberry Pi4**
- **Pixel 6A**
- **Pixel 7A**
- **One Plus 6**

---

I choose business hardware for several reasons and it has better capabilities than some of the consumer hardware.

**Pixel 7a** for private interactions (family and friends) and payments.

**Pixel 6a** for social media and stuff
Photo-editing and video-editing, Discord and basically most of the social media apps.
See it like a housephone. Also, I used two phones back in the day as MP3-player, because an iPod Touch was more expensive. (Unironcally I have the latest iPod Touch)

**One Plus 6** was used for Social media and stuff, I shoot mostly 4K videos with it.
Isn't needed anymore since the Pixel devices shoots better photos and videos.

Two Laptops for when the other breaks down, which already happened so I can stay productive.
Intel Nuc and raspberry pi are the servers.

---

### Peripherals

- Microsoft Pro Intellimouse Shadow White
- Microsoft Pro Intellimouse Shadow Black
- Logitech MX Master 3
- Logitech G502X

#### Microsoft Pro Intellimouse


##### Hardware with it's own memory

###### Microsoft Pro Intellimouse most of the time due

- Mouse has it's own memory
- No gamer look
- Bigger and better adjusted for my hands
- Has 1000Mhz (I'm behind I guess)
- Macros
- Adjusting Lift off distance
- Angle snapping
- Logitech TKL Mechanical Keyboard (Red Switches American ANSI-layout small enter)
- Logitech TKL Mechanical Keyboard (Blue Switches American ANSI-layout small enter)

---

###### Logitech G502X



Has it's own memory biggest irony that I still need to run the software to disable the side button.

---

###### Logitech 835 TKL

Bare bones keyboard with switches, nothing special.
Best part of it, no special drivers or software is needed or included, keeping my system clean and mean.

---

##### Keyboard shortcuts and other Windows things

Keyboard shortcuts are important and my favourite one is CTRL+SHIFT and program of choice.
It will open the program in **elevated mode**

<kbd>Ctrl</kbd> + <kbd>SHIFT</kbd> `<program of choice>`

For the example <kbd>Ctrl</kbd> + <kbd>SHIFT</kbd> **Windows Terminal**

---

### Fedora (Linux it's so much more than that.)



Main OS across all my devices, one of the trikier Linux distributions in my opinion, especially SELLinux and DNF
From top of my head and better defaults then Ubuntu:

- Sane firewall defaults, you have to open port 443 (https) yourself.
- The same `firewalld`, works better with Docker or Podman for example. Read here more about it: [Firewall (Firewalld) intergration with Docker](https://docs.docker.com/network/packet-filtering-firewalls/#integration-with-firewalld)
- SELinux (don't turn that off) [Seriously, stop disabling SELinux.
  Learn how to use it before you shut it off.](https://stopdisablingselinux.com/)
- `Podman` (Running rootless containers) I think `docker-compose` (`podman-compose`) and `docker-swarm` are supported.
- Toolbox, toolbx utility, which uses containers to provide an environment where development tools and libraries can be installed and used, so you don't really need to use Docker or Podman
- Ananaconda (Name of the installer) so you have a kickstart file and with this file you can actually do unattenended installations of Fedora, CentOS, RHEL, Rocky- and Alma-Linux. [Checkout my github](https://github.com/gllrmzndm/RHELRHCSA)
- And the best study material.

For the NVIDIA with Intel 2th, 3th, 4th or 5h gen processor out there:


---

#### DNF (Before YUM)

Stable package manager compared to `apt` and `apt-get`
Slightly better support for plugins and more, an excerpt what dnf can do:

```bash
debug-restore      restore packages recorded in debug-dump file
debuginfo-install  install debuginfo packages
download           Download package to current directory
groups-manager     create and edit groups metadata file
needs-restarting   determine updated binaries that need restarting
offline-distrosync Prepare offline distrosync of the system
offline-upgrade    Prepare offline upgrade of the system
playground         Interact with Playground repository.
repoclosure        Display a list of unresolved dependencies for repositories
repodiff           List differences between two sets of repositories
repograph          Output a full package dependency graph in dot format
repomanage         Manage a directory of rpm packages
reposync           download all packages from remote repo
system-upgrade     Prepare system for upgrade to a new release
```

And there's a lot more you can read this over here at:

https://dnf-plugins-core.readthedocs.io/en/latest/index.html#

https://docs.fedoraproject.org/en-US/quick-docs/dnf/

---

#### Virtual machine manager & virsh

`virsh` CLI program for managing your virtrual machines

Managing my vitual

#### Ansible (Post installation configuring the server.)

Too lazy to configure the server everytime I change, which happened a lot, since I always want to check out everyting on bare metal.
But I choose RHEL/CentOS/Rocky/Alma -Linux as default Operating System.

---

---

---

### Windows 11 Pro Programs and modifications

#### Windows terminal Emulators

**Windows Terminal preview** Just with slightly newer features, if anything doesn’t work properly I go back to using the normal one.
Not the main terminal emulator, but it's getting used enough alongside another terminal emulator.

---

#### Windterm & MobaXterm (3rd party Terminal emulator)

<!-- ![mobaxterm](../assets/blogassets/behind_the_scenes/mobaxterm.png) -->

Windterm is the actual terminal emulator that I use.
Both have their con and pros, but the explain every feature is a bit to much, since I don't really use all the features.
I just need to remeber the ip addreses and most of the time I remember them from the top of my head, so I use the Windows Terminal Preview.
Advanced terminal emulator, there so a lot of things to say about this software, but I only use it copy or download files easily when I’m in a rush and don’t want to use use `rsync`, `scp` or `ssh`

---

#### Windows PowerShell

Most of the time it used to install Chocolatey and to add/update Powershell.

There are differences in Windows Powershell and Powershell which I’m not going to cover, but you can read it over here:

[Why move to PowerShell 7 from Windows PowerShell?](https://www.techtarget.com/searchwindowsserver/tip/Why-move-to-PowerShell-7-from-Windows-PowerShell)

[Differences between Windows PowerShell 5.1 and PowerShell 7.x](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/differences-from-windows-powershell?view=powershell-7.4)

---

#### Powershell

“Enhanced version” of Windows Powershell more can be found [here](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/differences-from-windows-powershell?view=powershell-7.4)

---

#### Chocolatey (consumer)Ansible

---
title: "Behind the scenes with Guillermo"

template: blog-post.html

date: 12-31-2024
---

## Intro Blog will be updated later



## Coming from the automotive industry

##### I like efficiency

I'd take my work seriously and I like the solve problems as quickly as possible.
I'm fan of motorsports like Rally, Time-Attack and Gymkhana.
Every discipline has their own unique problems and so do we in IT and Software engineering.

In order to solve the problems that I'm facing in IT and software engineering, I've been experimenting with a lot of possible solutions in order to solve them.
This blogpost is one of them.

A small insight in what in what, how and why I do this.

My setup consist of a single screen, I can only focus on one screen at a time.
Things need to be clean and out of sight and out of mind basically.

---

## Hardware that I use

I’m mostly (trying) to use business hardware as much as possible.

- **Lenovo Thinkstation** Intel 11 gen 32GB DDR4 3200mhz (Business PC)
- **HP Envy 15"** Ryzen 5700u 16Gb DDR4 3200mhz (Consumer PC with business perks)
- **Another HP Envy 15"** Ryzen 5700u 16Gb DDR4 3200mhz (Consumer PC with business perks)
- **Intel Nuc** with RealTek nic unfortunately (server) 16GB LPDDR4 3200mhz single channel memory (Consumer)
- **Raspberry Pi4**
- **Pixel 6A**
- **Pixel 7A**
- **One Plus 6**

---

I choose business hardware for several reasons and it has better capabilities than some of the consumer hardware.

**Pixel 7a** for private interactions (family and friends) and payments.

**Pixel 6a** for social media and stuff
Photo-editing and video-editing, Discord and basically most of the social media apps.
See it like a housephone. Also, I used two phones back in the day as MP3-player, because an iPod Touch was more expensive. (Unironcally I have the latest iPod Touch)

**One Plus 6** was used for Social media and stuff, I shoot mostly 4K videos with it.
Isn't needed anymore since the Pixel devices shoots better photos and videos.

Two Laptops for when the other breaks down, which already happened so I can stay productive.
Intel Nuc and raspberry pi are the servers.

---

### Peripherals

<!-- ![guillermo's_peripherals](../assets/blogassets/behind_the_scenes/Guillermo's_Peripherals.png) -->

- Microsoft Pro Intellimouse Shadow White
- Microsoft Pro Intellimouse Shadow Black
- Logitech MX Master 3
- Logitech G502X

#### Microsoft Pro Intellimouse

<!-- <video controls autoplay muted loop>
     <source src="../assets/blogassets/behind_the_scenes/microsoft_intelli.mp4"
         type='video/mp4'>
</video> -->

##### Hardware with it's own memory

###### Microsoft Pro Intellimouse most of the time due

- Mouse has it's own memory
- No gamer look
- Bigger and better adjusted for my hands
- Has 1000Mhz (I'm behind I guess)
- Macros
- Adjusting Lift off distance
- Angle snapping
- Logitech TKL Mechanical Keyboard (Red Switches American ANSI-layout small enter)
- Logitech TKL Mechanical Keyboard (Blue Switches American ANSI-layout small enter)

---

###### Logitech G502X



Has it's own memory biggest irony that I still need to run the software to disable the side button.

---

###### Logitech 835 TKL

Bare bones keyboard with switches, nothing special.
Best part of it, no special drivers or software is needed or included, keeping my system clean and mean.

---

##### Keyboard shortcuts and other Windows things

Keyboard shortcuts are important and my favourite one is CTRL+SHIFT and program of choice.
It will open the program in **elevated mode**

<kbd>Ctrl</kbd> + <kbd>SHIFT</kbd> `<program of choice>`

For the example <kbd>Ctrl</kbd> + <kbd>SHIFT</kbd> **Windows Terminal**

---

### Fedora (Linux it's so much more than that.)


Main OS across all my devices, one of the trikier Linux distributions in my opinion, especially SELLinux and DNF
From top of my head and better defaults then Ubuntu:

- Sane firewall defaults, you have to open port 443 (https) yourself.
- The same `firewalld`, works better with Docker or Podman for example. Read here more about it: [Firewall (Firewalld) intergration with Docker](https://docs.docker.com/network/packet-filtering-firewalls/#integration-with-firewalld)
- SELinux (don't turn that off) [Seriously, stop disabling SELinux.
  Learn how to use it before you shut it off.](https://stopdisablingselinux.com/)
- `Podman` (Running rootless containers) I think `docker-compose` (`podman-compose`) and `docker-swarm` are supported.
- Toolbox, toolbx utility, which uses containers to provide an environment where development tools and libraries can be installed and used, so you don't really need to use Docker or Podman
- Ananaconda (Name of the installer) so you have a kickstart file and with this file you can actually do unattenended installations of Fedora, CentOS, RHEL, Rocky- and Alma-Linux. [Checkout my github](https://github.com/gllrmzndm/RHELRHCSA)
- And the best study material.

For the NVIDIA with Intel 2th, 3th, 4th or 5h gen processor out there:
[Blackscreen with NVIDIA graphics](https://github.com/gllrmzndm/MYLAPTOP/blob/master/Fedora.sh)

---

#### DNF (Before YUM)

Stable package manager compared to `apt` and `apt-get`
Slightly better support for plugins and more, an excerpt what dnf can do:

```bash
debug-restore             restore packages recorded in debug-dump file
debuginfo-install         install debuginfo packages
download                  Download package to current directory
groups-manager            create and edit groups metadata file
needs-restarting          determine updated binaries that need restarting
offline-distrosync        Prepare offline distrosync of the system
offline-upgrade           Prepare offline upgrade of the system
playground                Interact with Playground repository.
repoclosure               Display a list of unresolved dependencies for repositories
repodiff                  List differences between two sets of repositories
repograph                 Output a full package dependency graph in dot format
repomanage                Manage a directory of rpm packages
reposync                  download all packages from remote repo
system-upgrade            Prepare system for upgrade to a new release
```

And there's a lot more you can read this over here at:

https://dnf-plugins-core.readthedocs.io/en/latest/index.html#

https://docs.fedoraproject.org/en-US/quick-docs/dnf/

---

#### Virtual machine manager & virsh

`virsh` CLI program for managing your virtrual machines

Managing my vitual

#### Ansible (Post installation configuring the server.)

Too lazy to configure the server everytime I change, which happened a lot, since I always want to check out everyting on bare metal.
But I choose RHEL/CentOS/Rocky/Alma -Linux as default Operating System.

---

---

---

### Windows 11 Pro Programs and modifications

#### Windows terminal Emulators

**Windows Terminal preview** Just with slightly newer features, if anything doesn’t work properly I go back to using the normal one.
Not the main terminal emulator, but it's getting used enough alongside another terminal emulator.

---

#### Windterm & MobaXterm (3rd party Terminal emulator)

Windterm is the actual terminal emulator that I use.
Both have their con and pros, but the explain every feature is a bit to much, since I don't really use all the features.
I just need to remeber the ip addreses and most of the time I remember them from the top of my head, so I use the Windows Terminal Preview.
Advanced terminal emulator, there so a lot of things to say about this software, but I only use it copy or download files easily when I’m in a rush and don’t want to use use `rsync`, `scp` or `ssh`

---

#### Windows PowerShell

Most of the time it used to install Chocolatey and to add/update Powershell.

There are differences in Windows Powershell and Powershell which I’m not going to cover, but you can read it over here:

[Why move to PowerShell 7 from Windows PowerShell?](https://www.techtarget.com/searchwindowsserver/tip/Why-move-to-PowerShell-7-from-Windows-PowerShell)

[Differences between Windows PowerShell 5.1 and PowerShell 7.x](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/differences-from-windows-powershell?view=powershell-7.4)

---

#### Powershell

“Enhanced version” of Windows Powershell more can be found [here](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/differences-from-windows-powershell?view=powershell-7.4)

---

#### Chocolatey (consumer)Ansible



Chocolatey for installing programs unattended, upgrading and removing for Windows.
My own GitHub repository for installing unattended installations can be found over [here](https://github.com/gllrmzndm/Advanced_Engine_Management_Guillermo)
And the older version of of it over [here](https://github.com/gllrmzndm/MYLAPTOP)

---

#### Nanazip for Windows 11



Basically another ZIP program, but full integrated into the context menu.

---

#### Googler

Command-line program to quickly search any thing



#### Miscellaneous

---

#### Ansible (Post installation configuring the server.)

Too lazy to configure the server everytime I change, which happened a lot, since I always want to check out everyting on bare metal.
But I choose RHEL/CentOS/Rocky/Alma -Linux as default Operating System.

---

#### Collaborating

Actually my website was made in mind of these people and I “collaborate” with people.

---

#### Discord



Better Slack alternative talking to people that are interested in I.T. and software engineering.
Sharing a lot of knowledge with somebody else. Like Twitter a really chill place to talk about tech.

---

### IRC

#### Reddit

We share knowledge with each other and there are dedicated Discord servers for DevOps, Software Engineering and System Engineer.

#### Websites

```
Linus Tech Tips forum
https://abarrak.gitbook.io/linux-sysops-handbook
```

---

## books

A very small part of the books the I have.

```
    Mastering Windows Server 2016 Hyper-V.pdf
    Mastering_Windows_Server_2022_-_Fourth_Edition.pdf
    Mastering-Windows-Server-2016.pdf
    MCSA-Windows-Server-2016-Complete-Study-Guide-Exam-70-740-Exam-70-741-Exam-70-742-and-Exam-70-743-by-Panek-William-z-li
```

---

Chocolatey for installing programs unattended, upgrading and removing for Windows.
My own GitHub repository for installing unattended installations can be found over [here](https://github.com/gllrmzndm/Advanced_Engine_Management_Guillermo)
And the older version of of it over [here](https://github.com/gllrmzndm/MYLAPTOP)

---

#### Nanazip for Windows 11



Basically another ZIP program, but full integrated into the context menu.

---

#### Googler

Command-line program to quickly search any thing



#### Miscellaneous

---

#### Ansible (Post installation configuring the server.)

Too lazy to configure the server everytime I change, which happened a lot, since I always want to check out everyting on bare metal.
But I choose RHEL/CentOS/Rocky/Alma -Linux as default Operating System.

---

#### Collaborating

Actually my website was made in mind of these people and I “collaborate” with people.

---

#### Discord


Better Slack alternative talking to people that are interested in I.T. and software engineering.
Sharing a lot of knowledge with somebody else. Like Twitter a really chill place to talk about tech.

---

### IRC

#### Reddit

We share knowledge with each other and there are dedicated Discord servers for DevOps, Software Engineering and System Engineer.

#### Websites

```
Linus Tech Tips forum
https://abarrak.gitbook.io/linux-sysops-handbook
```

---

## books

A very small part of the books the I have.

```
    Mastering Windows Server 2016 Hyper-V.pdf
    Mastering_Windows_Server_2022_-_Fourth_Edition.pdf
    Mastering-Windows-Server-2016.pdf
    MCSA-Windows-Server-2016-Complete-Study-Guide-Exam-70-740-Exam-70-741-Exam-70-742-and-Exam-70-743-by-Panek-William-z-li
```

---
