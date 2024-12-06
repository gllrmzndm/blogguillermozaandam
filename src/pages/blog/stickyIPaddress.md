---
layout: ../../layouts/Post.astro
title: "Sticky IP Address Guest VMS"
publishDate: "July 16 2024"
description: "Sticky IP adress Linux based VMS"
image: "/assets/s2022.jpg"
alt: 
---

## Update

This problem has been solved by making a new `external switch` in Hyper-V. IP stays sticky.

## Intro
Had an issue with static IP addresses using Hyper-V, Virtualbox and VMWare. that the DHCP leases is too short to be comfortable. 

After every restart or shutdown of my host, my guest IP address would change.
Many times people (Including me) blame Hyper-V or Virtualbox but that isn't the case, but KVM/QEMU doesn't really have this problem as the seem to utlise sticky ip addresses.

The irony is that I wanted have a fool proof configuration of any setting(s) regardless which OS I'm running to avoid this exact mistake.

To make it short, there isn't really a `visudo` for this. [0]

---
## Scope of the problem

Any one that is using a plain setup like:

- Virtualbox/Hyper-V/Vmware/KVM
- No Vagrant
- No Proxmox or anything like that

For the developer or anyone else that want the minimal setup or learn anything.

---
## Setting a static ip address manually

According to Debian: [https://wiki.debian.org/NetworkConfiguration](https://wiki.debian.org/NetworkConfiguration)
To configure the interface manually, the following needs to be done:

```
/etc/network/interfaces

    auto eth0
    iface eth0 inet static
        address 192.0.2.7/24
        gateway 192.0.2.254
```

Many times we forget the `static` part in Windows and Rocky Linux you're being forced to set the interface to manual, but this isn't the case when editing files manually apart from `visudo` which I mentioned earlier. So when `static` isn't being applied, you will not get the ip address that is configured and the problem of not having a static ip address, despite configuring it "properly", `sudo systemctl status networking` doesn't show any configurations errors at all.
## Reinitialize new network setup

If you make more fundamental network changes e.g. adding new virtual interfaces (e.g. bridge) in `/etc/network/interfaces` you can reinitialize the network configuration by restarting the networking daemon:

```
# systemctl status networking
# systemctl restart networking
```

And that's basically that's it, a basic mistake, a mistake that shouldn't be made and validated by anything to avoid this.

---

[0] The `visudo` command opens a text editor like normal, but it validates the syntax of the file upon saving. This prevents configuration errors from blocking `sudo` operations, which may be your only way of obtaining **root** privileges.
