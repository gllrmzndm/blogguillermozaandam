---
layout: ../../layouts/Post.astro
title: "ThinkPad E585 complications"
publishDate: "April 25 2025"
description: "Issues that I had with my laptop and solved them."
image: "/assets/lenovo/lenovo.webp"
alt: "Lenovo"
---


## Installing Linux on ThinkPad E585 and E485.

Descriptive guide for Installing Linux on your Lenovo Thinkpad E585 and E485.
This guide is intended to help people installing Linux on their Ryzen-laptops and all credits goes the persons making this happen.

![Thinkpad E585](https://www.tdblog.be/wp-content/uploads/2018/08/27082018-lenovo-blog.png)

## Note

The new BIOS version 1.54 of the Lenovo Thinkpad E585 and Thinkpad E485 made this workaround obsolete and is fixed by Lenovo.
Get your latest BIOS update over here: https://support.lenovo.com/nl/en/downloads/ds503790

#### Changes

CHANGES IN THIS RELEASE
 Version 1.54

[Important updates]
  Nothing.

[New functions or enhancements]
  Nothing.

[Problem fixes]

- Sync IOAPICID in IVRS and APIC ACPI tables (Linux).   
- Enhance to address vulnerability security issue.

###### Source

https://download.lenovo.com/pccbbs/mobiles/r0uuj74w.txt

**Thanks to:**
https://forum.level1techs.com/t/lenovo-thinkpad-e585-ryzen-2500u-vega-8-review-impressions-linux-etc/130307

https://evilazrael.de/comment/914

https://thinkpad-forum.de/threads/217551-Boot-Parameter-f%FCr-E585-bzw-f%FCr-AMD-Ryzen-allgemein-besonders-ab-Kernel-4-20-x?p=2176002##post2176002

https://unix.stackexchange.com/questions/469153/what-are-the-implication-of-iommu-soft

https://medium.com/@jthegedus/ubuntu-18-04-lts-on-lenovo-thinkpad-e485-15e1d601473f

---

## Installing Ubuntu 18.04.x LTS (Bionic Beaver) on the Lenovo ThinkPad E585

#### Make sure to update your FIRMWARE of your laptop.

[Lenovo E585 support website](https://pcsupport.lenovo.com/nl/en/products/laptops-and-netbooks/thinkpad-edge-laptops/thinkpad-e585-type-20kv/downloads)

Firmware updates can be done with an USB flash drive.

#### Get Ubuntu 18.04.x LTS.

[Ubuntu 18.04.2 LTS (Bionic Beaver)](http://releases.ubuntu.com/18.04/)

#### Use Etcher or Rufus to make a bootable iso.

[BalenaEtcher](https://www.balena.io/etcher/) For Linux, MacOS and Windows.

[Rufus](https://rufus.ie/) For Windows only.

#### Installing Ubuntu

1. After inserting USB flash drive and turning on your laptop make sure to **press F12** during boot and select your USB flash drive or Ubuntu installation. 

2. **make sure to hold or press SHIFT a couple of times to enter the GRUB menu.**

3. Highlight "**Installing Ubuntu**"

4. Press the "**e**" key on your keyboard to edit.

5. add without quotes "**ivrs_ioapic[32]=00:14.0 ivrs_ioapic[33]=00:00.1 clocksource=hpet libata.force=1:nohrst iommu=pt**" to the list.

6.  setparams 'Try Ubuntu without Installing'
   
            set gfxpayload-keep
            linux         /casper/vmlinuz file/cdrom/preseed/ubuntu.seed boot=casper quiet splash -- ivrs_ioapic[32]=00:14.0 ivrs_ioapic[33]=00:00.1 clocksource=hpet libata.force=1:nohrst iommu=pt
            initrd        /casper/initrd

7. **Press F10** to start the installation of Ubuntu.

#### Configuring GRUB

Open your terminal with the keys **CTRL + ALT + T** and do the following:

    sudo nano /etc/default/grub

1. **Add** GRUB_CMDLINE_LINUX="**ivrs_ioapic[32]=00:14.0 ivrs_ioapic[33]=00:00.1 clocksource=hpet libata.force=1:nohrst iommu=pt**"

2. It should look like this

3.  $ sudo cat /usr/share/grub/default/grub
   
   ## If you change this file, run    'update-grub' afterwards to update
   
   ## /boot/grub/grub.cfg.
   
   ## For full documentation of the     options in this file, see:
   
   ## info -f grub -n 'Simple     configuration'
   
    GRUB_DEFAULT=0
    GRUB_HIDDEN_TIMEOUT=0
    GRUB_HIDDEN_TIMEOUT_QUIET=true
    GRUB_TIMEOUT=10
    GRUB_DISTRIBUTOR=`lsb_release -i -s 2>    /dev/null || echo Debian`
    GRUB_CMDLINE_LINUX_DEFAULT="quiet     splash"
    GRUB_CMDLINE_LINUX="ivrs_ioapic[32]=00:14.0 ivrs_ioapic[33]=00:00.1 clocksource=hpet libata.force=1:nohrst iommu=pt"
   
   ## Uncomment to enable BadRAM filtering,    modify to suit your needs
   
   ## This works with Linux (no patch     required) and with any kernel that    obtains
   
   ## the memory map information from GRUB    (GNU Mach, kernel of FreeBSD ...)
   
    ##GRUB_BADRAM="0x01234567,0xfefefefe,    0x89abcdef,0xefefefef"

4. Press **CTRL + O** to save and **CTRL + X** to exit.

5. **Update** GRUB with:
   
        sudo update-grub

#### Done

#### Explanation about 'ivrs_ioapic[32]=00:14.0 ivrs_ioapic[33]=00:00.1 clocksource=hpet libata.force=1:nohrst iommu=pt'.

**Quote from eazrael on https://evilazrael.de/comment/914**

*Ok, this is really a firmware bug, the ACPI IVRS table lacks at least one entry. Adding ivrs_ioapic[32]=00:14.0 instead of intremap=off is sufficient to make the system boot until Lenovo releases an UEFI update with a working IVRS table. At least UEFI 1.27 (2018-07-24) needs this override. And spec_store_bypass_disable=prctl is still needed for Ubuntu & co.*

*The clue is the line "[Firmware Bug]: AMD-Vi: IOAPIC[32] not in IVRS table". I decompiled the ACPI tables, started to read the AMD documentation, but in the end I just guessed the 32 from the error message and 00:14.0 from the lspci output and the Stack Overflow/Ubuntu forum entries.  Interesting stuff, but too much to read in my little time.* 

*What was helpful is the Linux boot parameter amd_iommu_dump=1 which will dump information from the IVRS table:*

    [    0.851042] AMD-Vi: Using IVHD type 0x11
    [    0.851401] AMD-Vi: device: 00:00.2 cap: 0040 seg: 0 flags: b0 info 0000
    [    0.851401] AMD-Vi:        mmio-addr: 00000000feb80000
    [    0.851430] AMD-Vi:   DEV_SELECT_RANGE_START  devid: 00:01.0 flags: 00
    [    0.851431] AMD-Vi:   DEV_RANGE_END           devid: ff:1f.6
    [    0.851870] AMD-Vi:   DEV_ALIAS_RANGE                 devid: ff:00.0 flags: 00   devid_to: 00:14.4
    [    0.851871] AMD-Vi:   DEV_RANGE_END           devid: ff:1f.7
    [    0.851875] AMD-Vi:   DEV_SPECIAL(HPET[0])           devid: 00:14.0
    [    0.851876] AMD-Vi:   DEV_SPECIAL(IOAPIC[33])                devid: 00:14.0
    [    0.851877] AMD-Vi:   DEV_SPECIAL(IOAPIC[34])                devid: 00:00.1
    [    1.171028] AMD-Vi: IOMMU performance counters supported

*Resolving devid 00:14.0 was easy via lspci:*

*00:14.0 SMBus: Advanced Micro Devices, Inc. [AMD] FCH SMBus Controller (rev 61)
but for 00:00.1 I have not found the device. If anybody knows how to list all device ids and their associate devices/drivers/etc, please mail me.*

*Sources/References:*

    https://ubuntuforums.org/showthread.php?t=2254677
    https://superuser.com/questions/1052023/ioapic0-not-in-ivrs-table
    https://lwn.net/Articles/664999/
    https://01.org/linux-acpi/utilities
    https://support.amd.com/TechDocs/48882_IOMMU.pdf

---

**Quote from Penguin tamer https://translate.google.com/translate?hl=en&sl=de&tl=en&u=https%3A%2F%2Fthinkpad-forum.de%2Fthreads%2F217551-Boot-Parameter-f%25FCr-E585-bzw-f%25FCr-AMD-Ryzen-allgemein-besonders-ab-Kernel-4-20-x%3Fp%3D2176002%23post2176002**

***ivrs_ioapic**: correction IOMMU Adresses in BIOS.*

***libata.force**: No hardware reset on the SATA controller. So that the computer wakes up after suspend to ram.*

***iommu=pt**: pass through for iommu, without this option, X does not seem to work Kernel 4.20.0.*

**Sources:** 

https://forum.level1techs.com/t/lenovo-thinkpad-e585-ryzen-2500u-vega-8-review-impressions-linux-etc/130307

https://evilazrael.de/comment/914

https://thinkpad-forum.de/threads/217551-Boot-Parameter-f%FCr-E585-bzw-f%FCr-AMD-Ryzen-allgemein-besonders-ab-Kernel-4-20-x?p=2176002##post2176002

#### All the credits goes the persons for making this happen cited in the source. Thank you.

---

## Installing Ubuntu 18.04.x LTS (Bionic Beaver) on the Lenovo ThinkPad E485

#### Make sure to update your FIRMWARE of your laptop.

[Lenovo E485 support website](https://pcsupport.lenovo.com/nl/en/products/laptops-and-netbooks/thinkpad-edge-laptops/thinkpad-e485-type-20ku/downloads)

Firmware updates can be done with an USB flash drive.

#### Get Ubuntu 18.04.x LTS.

[Ubuntu 18.04.2 LTS (Bionic Beaver)](http://releases.ubuntu.com/18.04/)

#### Use Etcher or Rufus to make a bootable iso.

[BalenaEtcher](https://www.balena.io/etcher/) For Linux, MacOS and Windows.

[Rufus](https://rufus.ie/) For Windows only.

#### Installing Ubuntu

1. After inserting USB flash drive and turning on your laptop make sure to **press F12** during boot and select your USB flash drive or Ubuntu installation. 

2. **make sure to hold or press SHIFT a couple of times to enter the GRUB menu.**

3. Highlight "**Installing Ubuntu**"

4. Press the "**e**" key on your keyboard to edit.

5. add without quotes "**ivrs_ioapic[32]=00:14.0 and spec_store_bypass_disable=prctl**" to the list.

6.  setparams 'Try Ubuntu without Installing'
   
            set gfxpayload-keep
            linux         /casper/vmlinuz file/cdrom/preseed/ubuntu.seed boot=casper quiet splash -- ivrs_ioapic[32]=00:14.0 and spec_store_bypass_disable=prctl
            initrd        /casper/initrd

7. **Press F10** to start the installation of Ubuntu.

#### Configuring GRUB

Open your terminal with the keys **CTRL + ALT + T** and do the following:

    sudo nano /etc/default/grub

1. **Add** GRUB_CMDLINE_LINUX="**ivrs_ioapic[32]=00:14.0 and spec_store_bypass_disable=prctl**"

2. It should look like this

3.  $ sudo cat /usr/share/grub/default/grub
   
   ## If you change this file, run    'update-grub' afterwards to update
   
   ## /boot/grub/grub.cfg.
   
   ## For full documentation of the     options in this file, see:
   
   ## info -f grub -n 'Simple     configuration'
   
    GRUB_DEFAULT=0
    GRUB_HIDDEN_TIMEOUT=0
    GRUB_HIDDEN_TIMEOUT_QUIET=true
    GRUB_TIMEOUT=10
    GRUB_DISTRIBUTOR=`lsb_release -i -s 2>    /dev/null || echo Debian`
    GRUB_CMDLINE_LINUX_DEFAULT="quiet     splash"
    GRUB_CMDLINE_LINUX="ivrs_ioapic[32]=00:14.0 and spec_store_bypass_disable=prctl"
   
   ## Uncomment to enable BadRAM filtering,    modify to suit your needs
   
   ## This works with Linux (no patch     required) and with any kernel that    obtains
   
   ## the memory map information from GRUB    (GNU Mach, kernel of FreeBSD ...)
   
    ##GRUB_BADRAM="0x01234567,0xfefefefe,    0x89abcdef,0xefefefef"

4. Press **CTRL + O** to save and **CTRL + X** to exit.

5. **Update** GRUB with:
   
        sudo update-grub

#### Done

#### Explanation about 'ivrs_ioapic[32]=00:14.0'.

**Quote from eazrael on https://evilazrael.de/comment/914**

*Ok, this is really a firmware bug, the ACPI IVRS table lacks at least one entry. Adding ivrs_ioapic[32]=00:14.0 instead of intremap=off is sufficient to make the system boot until Lenovo releases an UEFI update with a working IVRS table. At least UEFI 1.27 (2018-07-24) needs this override. And spec_store_bypass_disable=prctl is still needed for Ubuntu & co.*

*The clue is the line "[Firmware Bug]: AMD-Vi: IOAPIC[32] not in IVRS table". I decompiled the ACPI tables, started to read the AMD documentation, but in the end I just guessed the 32 from the error message and 00:14.0 from the lspci output and the Stack Overflow/Ubuntu forum entries.  Interesting stuff, but too much to read in my little time.* 

*What was helpful is the Linux boot parameter amd_iommu_dump=1 which will dump information from the IVRS table:*

    [    0.851042] AMD-Vi: Using IVHD type 0x11
    [    0.851401] AMD-Vi: device: 00:00.2 cap: 0040 seg: 0 flags: b0 info 0000
    [    0.851401] AMD-Vi:        mmio-addr: 00000000feb80000
    [    0.851430] AMD-Vi:   DEV_SELECT_RANGE_START  devid: 00:01.0 flags: 00
    [    0.851431] AMD-Vi:   DEV_RANGE_END           devid: ff:1f.6
    [    0.851870] AMD-Vi:   DEV_ALIAS_RANGE                 devid: ff:00.0 flags: 00   devid_to: 00:14.4
    [    0.851871] AMD-Vi:   DEV_RANGE_END           devid: ff:1f.7
    [    0.851875] AMD-Vi:   DEV_SPECIAL(HPET[0])           devid: 00:14.0
    [    0.851876] AMD-Vi:   DEV_SPECIAL(IOAPIC[33])                devid: 00:14.0
    [    0.851877] AMD-Vi:   DEV_SPECIAL(IOAPIC[34])                devid: 00:00.1
    [    1.171028] AMD-Vi: IOMMU performance counters supported

*Resolving devid 00:14.0 was easy via lspci:*

*00:14.0 SMBus: Advanced Micro Devices, Inc. [AMD] FCH SMBus Controller (rev 61)
but for 00:00.1 I have not found the device. If anybody knows how to list all device ids and their associate devices/drivers/etc, please mail me.*

*Sources/References:*

    https://ubuntuforums.org/showthread.php?t=2254677
    https://superuser.com/questions/1052023/ioapic0-not-in-ivrs-table
    https://lwn.net/Articles/664999/
    https://01.org/linux-acpi/utilities
    https://support.amd.com/TechDocs/48882_IOMMU.pdf

---

Thanks to James Hegedus from https://medium.com/@jthegedus/ubuntu-18-04-lts-on-lenovo-thinkpad-e485-15e1d601473f

#### All the credits goes the persons for making this happen cited in the source. Thank you.

---

## Installing Manjaro on the Lenovo ThinkPad E585

#### Make sure to update your FIRMWARE of your laptop.

[Lenovo E585 support website](https://pcsupport.lenovo.com/nl/en/products/laptops-and-netbooks/thinkpad-edge-laptops/thinkpad-e585-type-20kv/downloads)

Firmware updates can be done with an USB flash drive.

#### Get the Manjaro ISO.

[ Manjaro](https://manjaro.org/download/)

#### Use Etcher or Rufus to make a bootable iso.

[BalenaEtcher](https://www.balena.io/etcher/) For Linux, MacOS and Windows.

[Rufus](https://rufus.ie/) For Windows only.

#### Installing Manjaro

1. After inserting USB flash drive and turning on your laptop make sure to **press F12** during boot and select your USB flash drive or Ubuntu installation. 

2. **make sure to hold or press SHIFT a couple of times to enter the GRUB menu.**

3. Highlight "**Installing Boot: Manjaro.x86_64**"

4. Press the "**E**" key on your keyboard to edit.

5. add without quotes "**iommu=soft**" to the list.

6. ## Set arguments above with editor
   
            linux /boot/vmlinuz-$2
            initrd /boot/amd_ucode.img /boot/intel_ucode.img /boot/initramsfs-x86_64.img iommu=soft

7. **Press F10** to boot Manjaro.

#### Configuring GRUB

Open your terminal with the keys **Super key (Windows key) + 4** and do the following:

    sudo nano /etc/default/grub

1. **Add** GRUB_CMDLINE_LINUX="**iommu=soft**"

2. It should look like this

3.  1 GRUB_DEFAULT=saved
    2 GRUB_TIMEOUT=5
    3 GRUB_TIMEOUT_STYLE=menu
    4 GRUB_DISTRIBUTOR='Manjaro'
    5 GRUB_CMDLINE_LINUX_DEFAULT="quiet   cryptdevice=UUID=826fc543-9373-4b18-bea5-ff6dfbb0135e:luks-826fa543-7873-4b189
    6 GRUB_CMDLINE_LINUX="iommu=soft"
    7 
    8 ## If you want to enable the save default function, uncomment the following
    9 ## line, and set GRUB_DEFAULT to saved.
    10 GRUB_SAVEDEFAULT=true

4. Press **CTRL + O** to save and **CTRL + X** to exit.

5. **Update** GRUB with:
   
        sudo update-grub

---

#### Explanation about 'iommu=soft'

**Quoted** from **Tim Kennedy** at https://unix.stackexchange.com/questions/469153/what-are-the-implication-of-iommu-soft

*'**iommu=soft**' tells the kernel to use a software implementation to remap memory for applications that can't read above the 4GB limit.*

*The kernel documentation for these options is here: https://github.com/spotify/linux/blob/master/Documentation/x86/x86_64/boot-options.txt##L207*

*What's preferable is a solution that satisfies your expectations for performance, system temperature, battery life, etc, etc. If iommu=soft give you satisfactory performance, temperature, and battery life, then I would say go with that.*
