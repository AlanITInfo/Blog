---
title: Sending SCCM Task Sequence Notifications to Teams
date: "2021-03-26T15:30:32.169Z"
tags: [Microsoft, Windows10, SCCM, Task Sequence, Teams]
---

Quick blog post on how to send a notification about your Task Sequence to a teams channel, useful if you want to keep an eye on certain task sequences as a whole or just parts of the sequence.

1. Head over to msendpointmgr and get a copy of the MicrosoftTeams-OSD-Successful-v0.4.ps1 
([msendpointmgr](https://msendpointmgr.com/2017/10/06/configmgr-osd-notification-service-teams/))

2. Edit the Powershell and add your uri from teams webhook and save.
   ![Incoming Connector](./powershellUri.png)

3. Edit the task sequence you wish to setup notifications from
    ![Incoming Connector](./EditTaskSeq.png)

4. Click Add - General - "Run PowerShell Script"
    ![Incoming Connector](./EditTaskSeq2.png)

5. Click the "Enter PowerShell Script" button and click "Add Script"
    ![Incoming Connector](./PowershellBox1.png)

6. Click the "Open" button 
    ![Incoming Connector](./PowerShellBox2.png)

7. Navigate to the location of the PowerShell Script and click Open
    ![Incoming Connector](./PowerShellBox3.png)

8. This has copied the the powershell script to the task sequence if need to make a edit click the edit box in bottom left hand corner and click "OK" to close the window
    ![Incoming Connector](./PowerShellBox4.png)

9. You will now be back at the properties window, You can now set other options such as Parameters/Output to task sequence/start in etc... for testing set the "PowerShell execution policy" to "bypass" and click "OK"
    ![Incoming Connector](./powershellbox5.png)

10. Now when you run your task sequence when the script is run you will now receive notification in teams.
    ![Task Sequence Notificaiton](./SuccessTaskNotificaiton.png)




