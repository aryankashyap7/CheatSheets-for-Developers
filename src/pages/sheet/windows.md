---
layout: ../../layouts/CheatSheet.astro
title: "Windows Cheatsheet"
---

## Synopsis

This page contains all the most useful commands and shortcut-keys for windows.

Windows is a series of operating systems produced by Microsoft for use on personal computers, including home and business desktops, laptops, tablets, and media center PCs. Its current lineup consists of Windows 11, Windows 10, Windows 8.1, and Windows 7. Windows 10 receives new builds on an ongoing basis, which are available at no additional cost to users.

---

NOTE: Incase you want to use the touch command avaible in linux, over windows. You can download the <kbd>touch.cmd</kbd> file from the files folder and make it available at all directories.

---

## Basic System Commands

| Command                      | Description                   |
| ---------------------------- | ----------------------------- |
| <kbd>Ctrl</kbd>+<kbd>C</kbd> | Copy                          |
| <kbd>Ctrl</kbd>+<kbd>X</kbd> | Cut                           |
| <kbd>Ctrl</kbd>+<kbd>V</kbd> | Paste                         |
| <kbd>Ctrl</kbd>+<kbd>A</kbd> | Select All                    |
| <kbd>Ctrl</kbd>+<kbd>S</kbd> | Save Document                 |
| <kbd>Ctrl</kbd>+<kbd>P</kbd> | Print a document              |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Undo                          |
| <kbd>Ctrl</kbd>+<kbd>Y</kbd> | Redo                          |
| <kbd>Ctrl</kbd>+<kbd>B</kbd> | Turn on or turn off bold      |
| <kbd>Ctrl</kbd>+<kbd>I</kbd> | Turn on or turn off italics   |
| <kbd>Ctrl</kbd>+<kbd>U</kbd> | Turn on or turn off underline |
| <kbd>F2</kbd>                | Rename                        |
| <kbd>F5</kbd>                | Refresh                       |
| <kbd>Alt</kbd>+<kbd>F4</kbd> | Shutdown System               |

## Advanced System Commands

| Command | Description |
| ------- | ----------- |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Esc</kbd> | Open the Task Manager |
| <kbd>Win</kbd>+<kbd>E</kbd> | Opens File Explorer |
| <kbd>Win</kbd>+<kbd>.</kbd> | Opens Emoji Panel |
| <kbd>Win</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd> | Take a cropped Screenshot |
| <kbd>Win</kbd>+<kbd>H</kbd> | Opens the windows speech to text recognition |
| <kbd>Win</kbd>+<kbd>Ctrl</kbd>+<kbd>D</kbd> | Add a new virtual desktop |
| <kbd>Ctrl</kbd>+<kbd>Win</kbd>+<kbd>Right/Left Arrow</kbd> | Iterate to the next virtual desktop |
| <kbd>Win</kbd>+<kbd>I</kbd> | Open Settings |
| <kbd>Win</kbd>+<kbd>PrtScn</kbd> | Save a screenshot, as a PNG file in a Screenshots folder inside your Pictures folder |

## Windows navigation shortcuts

| Command | Description |
| ------- | ----------- |
| <kbd>Win</kbd>+<kbd>A</kbd> | Open Action Center Panel |
| <kbd>Win</kbd>+<kbd>C</kbd> | Cortona in listening mode (used for voice commands) |
| <kbd>Win</kbd>+<kbd>D</kbd>+<kbd>M</kbd> | Minimize/Maximize all windows |
| <kbd>Win</kbd>+<kbd>K</kbd> | Open notification center and calendar |
| <kbd>Win</kbd>+<kbd>L</kbd> | Lock your computer |
| <kbd>Win</kbd>+<kbd>Z</kbd> | Open Snap Layout |
| <kbd>Win</kbd>+<kbd>S</kbd> | Search Windows |
| <kbd>Win</kbd>+<kbd>M</kbd> | Minimize all windows |
| <kbd>Win</kbd>+<kbd>V</kbd> | Open the Clipboard Application (to view & utilized your recent copied text & images) |
| <kbd>Win</kbd>+<kbd>Tab</kbd> | Open the Task view |
| <kbd>Win</kbd>+<kbd>,</kbd> | Peek Desktop Quickly |
| <kbd>Win</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd> | Maximize all windows |
| <kbd>Win</kbd>+<kbd>left/right arrow</kbd> | Snapping a window simply opens it on one side of the screen (left or right, depending on which arrow you hit) |
| <kbd>Win</kbd>+<kbd>number key</kbd> | To open application from taskbar with numbered key position|

## File explorer Shortcuts

| Command | Description |
| ------- | ----------- |
| <kbd>Alt</kbd>+<kbd>D</kbd> | Select the address bar |
| <kbd>Alt</kbd>+<kbd>←</kbd> | Navigate to previous folder|
| <kbd>Ctrl</kbd>+<kbd>E/F</kbd> | Select the search box |
| <kbd>Ctrl</kbd>+<kbd>N</kbd> | Open a new window |
| <kbd>Ctrl</kbd>+<kbd>W</kbd> | Close the current window |
| <kbd>Ctrl</kbd>+<kbd>mouse scroll wheel</kbd> | Change the size and appearance of file and folder icons |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>N</kbd> | Create a new folder |

## Basic Command Prompt Commands

| Command | Description |
| ------- | ----------- |
| <kbd>cd /</kbd> | Takes you to the top of the directory tree |
| <kbd>dir</kbd> | This displays a list of the files and folders contained in it |
| <kbd>DRIVE_CHARACTER:</kbd> | If you wanted to change the drive from C: to D: |
| <kbd>mkdir "NAME"</kbd> | Create a folder with specified name |
| <kbd>md "NAME" </kbd> | Create a folder with specified name |
| <kbd>cls" </kbd> | Clear Screen |
| <kbd>ren "OldName" "NewName" </kbd> | Renaming files |
| <kbd>copy "FileAddress" "Folder/FileAddress" </kbd> | Copy files to the new folder, or even rename the file name to something new. eg: address/newname.jpg |
| <kbd>xcopy /s /i OldFolderAddress NewFolderAddress </kbd> | Copy folder to new directory.The /s parameter ensures that all the directories and subdirectories are going to be copied, except the ones that are empty. The /i parameter creates a new directory if the destination folder does not exist and copies all the files in it. |
| <kbd>del FileAddress </kbd> | Deletes a file |
| <kbd>rd FolderAddress </kbd> | Deletes a Folder |
| <kbd>tree </kbd> | Displays the tree directory of the particular folder |
| <kbd>title</kbd> | Change the Title of the Command Prompt window |
| <kbd>prompt</kbd> | Change the prompt text of the Command Prompt window |
| <kbd>color</kbd> | Change the colour of the Command Prompt text |
| <kbd>time</kbd> | Displays Current System time |
| <kbd>ver</kbd> | Displays the Windows version |
| <kbd>cd . > [filename]</kbd> | An alternative to touch command in unix, creates a null full with specified name |

## System Commands

| Command | Description |
| ------- | ----------- |
| <kbd>logoff</kbd> | Logged out of Windows |
| <kbd>shutdown /s</kbd> | Shutdown System |
| <kbd>tasklist</kbd> | Displays the list of running processes in Windows. |
| <kbd>taskkill /f /im [process name]</kbd> | This command lets you kill (or stop, or terminate, if you prefer) processes |
| <kbd>taskkill /f /pid [process ID]</kbd> | This command lets you kill (or stop, or terminate, if you prefer) processes |
| <kbd>chkdsk /f</kbd> | Check your drive for errors and attempt repairing them |
| <kbd>sfc /scannow</kbd> | While the previous command helps check errors on drives, when it comes to scanning the integrity of system files and repairing them, there’s another command you should use: sfc. Not only that it checks all essential files in the operating system, but it also replaces incorrect versions of them with the right ones. |
| <kbd>format [drive letter]: /fs:[file system] /q</kbd> | Format Drive, The /q argument allows you to do a quick format, but you can leave it out if you want to run a regular format. eg: format h: /fs:ntfs /q |
| <kbd>diskpart</kbd> | It allows you to see, manage, create, and delete partitions from your drives. |
| <kbd>systeminfo</kbd> | It collects and displays information about your computer hardware (like the processor, RAM, and network cards installed) and Windows installation (version, install date, hotfixes applied, etc.). |

## Networking Commands

| Command | Description |
| ------- | ----------- |
| <kbd>ipconfig</kbd> | Show and manage the IP addresses of your computer |
| <kbd>ping [IP Address/URL]</kbd> | Ping is the basic network-related CMD command you should use to test whether your PC can reach a destination device through the network and/or the internet                                     |
| <kbd>tracet [IP Address/URL]</kbd> | Sometimes, using ping is not enough to gather the information, the more advanced command tracert (trace route) allows you to trace the path Internet Protocol packets take to their destination |
| <kbd>netsh wlan show profiles</kbd> | Shows the WiFi_SSID names |
| <kbd>netsh wlan show profile name=WiFi_SSID key=clear</kbd> | The purpose is to help you find the password of a wireless network to which you’ve previously connected. |
