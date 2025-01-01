---
layout: ../../layouts/Post.astro
title: "Virtual machines as small as possible"
publishDate: "January 1 2025"
description: "How to make my Virtual Machine Guests as small as possible"
image: "/assets/qemu_img/qemu_img_cover.jpg"
alt: "stock image, purple background with a laptop"
---

# Intro

Since I'm using several servers included I want my guests to be small as possible to transfer those guests to other systems and also to make the back-up experience better and saving space in the end.

I figured this out that I could images smaller when I was following `Red Hat Certified System Administrator exam | EX200` book in my free time.

As you can see my images are pretty big, these are stored on a SAMSUNG 1TB SSD and it already taking more than 50% of the storage.
I want to make them as small as possible.

```bash
33423545 -rw-------.  1 qemu      qemu      257G Jan  1 15:44 ALMA_SERVER.qcow2
33425559 -rw-------.  1 root      root      257G Jan  1 15:36 UBUNTU_SERVER.qcow2
```

---

## Qemu-img

### Requirements

RHEL/Fedora/Rocky/Alma:
```bash
	yum install qemu-utils
```
Debian/Ubuntu:
```bash
	apt-get install qemu-utils
```

---

```

Qemu-img is a tool to convert your virtual machine images to another format (e.g. VMDK, RAW and VHDX and more.)

As you can see my images are pretty big

```bash
33423545 -rw-------.  1 qemu      qemu      257G Jan  1 15:44 ALMA_SERVER.qcow2
33425559 -rw-------.  1 root      root      257G Jan  1 15:36 UBUNTU_SERVER.qcow2
```

And with the command:

```bash
qemu-img convert -f qcow2 -O qcow2 /var/lib/libvirt/images/$IMAGENAME.qcow2 /var/lib/libvirt/images/$IMAGENAME2.qcow2
```

I could make them significantly smaller:
```bash
33423532 -rw-r--r--.  1 root      root      1.8G Jan  1 15:46 ALMA_SERVER.qcow2
33423545 -rw-------.  1 root      root      257G Jan  1 15:46 ALMA_SERVER_OLD.qcow2
33423544 -rw-r--r--.  1 root      root      3.9G Jan  1 15:47 UBUNTU_SERVER.qcow2
33425559 -rw-------.  1 root      root      257G Jan  1 15:36 UBUNTU_SERVER_OLD.qcow2
```

![Picture of my server using cockpit](/assets/qemu_img/qemu_server_host.png)

Less space is being used and I can still use up to 256GB in my virtual machines.
If I need more, I can add more space, since I use [LVM](https://www.redhat.com/en/blog/lvm-vs-partitioning).

---

## Read about LVM

[What can LVM do that standard partition can't?](https://serverfault.com/questions/987950/what-can-lvm-do-that-standard-partition-cant)

---