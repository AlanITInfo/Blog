---
title: Repairing trust between devices and domain from local device
date: "2021-04-01T15:30:32.169Z"
---

Working with a customer and handful of there devices which had been powered off for a bit displayed the following information when a user attempted to logon.

“The trust relationship between this workstation and the primary domain failed.”

If you happen to know the local admin password and/or have it enabled on the device then you can use the following powershell command.

“Test-ComputerSecureChannel -Credential (Get-Credential) -Repair”
![Incoming Connector](./PowershellCommand.png)

(There will be a pop up a dialog asking for your domain credentials.) (The account you use also needs the “Rest Password” rights)
![Incoming Connector](./PowerShellPrompt.png)

![Incoming Connector](./PowershellSuccuss.png)

And finally a quick reboot and you can login with a domain account