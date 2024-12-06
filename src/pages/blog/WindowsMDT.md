---
layout: ../../layouts/Post.astro
title: "Microsoft Deployment Toolkit"
publishDate: "July 15 2024"
description: "Project for some company"
image: "./src/images/blogimages/S2022.jpg"
alt: 
---

# Microsoft Deployment Toolkit

I did project at my first real job as system administrator and helpdesk support.
We had to install a lot of laptops, but the company did this by hand and I was given the task to install all those laptops.
Figured out a way to install all those laptops unattend with Microsoft Deployment Toolkit and more.

[Repository can be found here](https://github.com/gllrmzndm/MSFTMDT)

Unattended Windows 10 or Windows 2012/2016/2019 installation.

Configureable with applications, drivers and settings.

The project can be used to Windows Server version: W2K12R2, W2K16, W2K19

---

[![mdtloadingscreen.png](https://i.postimg.cc/jjrnq0CT/mdtloadingscreen.png)](https://postimg.cc/MndptLy3)

[![Windows10.png](https://i.postimg.cc/Z0t4PmGK/Windows10.png)](https://postimg.cc/30Bs7srP)

---

# Requirements

- Windows Server 2012 R2/Windows Server 2016/Windows Server 2019
  
- [Microsoft Deployment Toolkit](https://www.microsoft.com/en-us/download/details.aspx?id=54259)

- [The Windows Assessment and Deployment Kit](https://go.microsoft.com/fwlink/?linkid=2086042)

- [Windows Windows Preinstallation Environment add-on for the ADK](https://go.microsoft.com/fwlink/?linkid=2087112)

---

# Operating system that I used

## Windows 10 DUTCH x64

```
Import-Module "C:\Program Files\Microsoft Deployment Toolkit\bin\MicrosoftDeploymentToolkit.psd1"
New-PSDrive -Name "DS001" -PSProvider MDTProvider -Root "C:\DeploymentShare"
import-mdtoperatingsystem -path "DS001:\Operating Systems" -SourcePath "C:\DeploymentShare\Windows ISO unpacked\Windows_10_DUTCH" -DestinationFolder "Windows 10 Pro DUTCH x64" -Move -Verbose
```

## Settings.ini

```
[Settings] 

Priority=Default 

Properties=MyCustomProperty 

 

; Customize Header Text in Progress Bar 

_SMSTSORGNAME=Guillermo Zaandam 

 

 

[Default] 

OSInstall=Y 

SkipCapture=YES 

SkipAdminPassword=YES 

SkipProductKey=YES 

SkipComputerBackup=YES 

SkipBitLocker=YES 

 

 

SkipBDDWelcome=YES 

SkipComputerName=YES 

OSDComputerName=Windows 

SkipUserData=YES 

SkipSummary=YES 

SkipFinalSummary=YES 

SkipDomainMembership=YES 

JoinWorkGroup=WORKGROUP


UserID=Administrator 

UserDomain=Geen 

UserPassword=Welkom09! 


SkipLocaleSelection=YES 

SkipTimeZone=YES 

TimeZoneName=W. Europe Standard Time 

SkipTimeZone=YES 

KeyboardLocale=nl-NL 

UserLocale=nl-NL 

UILanguage=nl-NL 
```

---

### Task sequence(s)

```
Import-Module "C:\Program Files\Microsoft Deployment Toolkit\bin\MicrosoftDeploymentToolkit.psd1"
New-PSDrive -Name "DS001" -PSProvider MDTProvider -Root "C:\DeploymentShare"
import-mdttasksequence -path "DS001:\Task Sequences" -Name "Windows 10 Pro Dutch" -Template "Client.xml" -Comments "" -ID "WIN10PD" -Version "1.0" -OperatingSystemPath "DS001:\Operating Systems\Windows 10 Pro in Windows 10 Pro DUTCH x64 install.wim" -FullName "Guillermo" -OrgName "Guillermo.inc" -HomePage "about:blank" -Verbose
```

# FAQ

- **How do I Migrate this project to another server?**
 
  Copy the folders of Microsoft Deployment Toolkit and you are ready to import it on the other server. (e.g. Windows Server 2019.)

  Made by Guillermo Zaandam