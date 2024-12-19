---
layout: ../../layouts/Post.astro
title: "Windows Drivers"
publishDate: "July 13 2024"
description: "Easy im- and import of drivers"
image: "/src/images/blogimages/windowsdrivers.jpg"
alt: 
---

I needed a way to drivers from this particular HP Probook 455 G9 and this was the best solution to achieve this. `pnputil` can be launched from almost anywhere, it is built into Windows directly. It's stored in ```windir%\system32```.

Importing the correct drivers from a laptop important in case you need the exact drivers, but you can’t download them from anywhere or/and you don’t trust other sources the get the drivers. All drivers are imported directly from the computer.

If you're doing a clean install of Windows, let Windows download the drivers through Windows Update. to get the actual drivers.
Obviously you should using driverspacks or HP software to install all thes drivers.

### Pnputil

Pnputil is an utility that does:

```
- Adding a driver package to the [driver store](https://learn.microsoft.com/en-us/windows-hardware/drivers/install/driver-store).
- Installing a driver package on the computer.
- Deleting a driver package from the driver store.
- Enumerating the driver packages that are currently in the driver store. Only driver packages that are not in-box packages are listed. An _in-box_ driver package is one which is included in the default installation of Windows or its service packs.
```

## Import drivers

You can import drivers and store them on your external drives.

`pnputil /export-driver * "d:\drivers\g9_455"`

`pnputil` is the program, next, is the option to import the drivers, we want all drivers and after that is the full path. You can change the path to something else.

## install or restore all drivers

`pnputil /add-driver "d:\drivers\g9_455\*.inf" /install /reboot /subdirs`edge them

`pnputil` is program, next is the option to install the drivers, full path with different options that are required to install the drivers.