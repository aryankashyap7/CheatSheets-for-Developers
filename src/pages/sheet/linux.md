---
layout: ../../layouts/CheatSheet.astro
title: "Linux Cheatsheet"
---

## Synopsis

Linux is a family of open source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution.

## File Commands

| Command    | Description                             |
| ---------- | --------------------------------------- |
| `ls`       | List files in current directory         |
| `ls -l`    | List files in long format               |
| `ls -a`    | List all files including hidden files   |
| `pwd`      | Print working directory                 |
| `cd`       | Change directory                        |
| `cd ..`    | Change directory to parent directory    |
| `cd ~`     | Change directory to home directory      |
| `cd -`     | Change directory to previous directory  |
| `mkdir`    | Create directory                        |
| `mkdir -p` | Create directory and parent directories |
| `touch`    | Create file                             |
| `cp`       | Copy file                               |
| `cp -r`    | Copy directory                          |
| `mv`       | Move file                               |
| `mv -r`    | Move directory                          |
| `rm`       | Remove file                             |
| `rm -r`    | Remove directory                        |
| `rm -f`    | Force remove file                       |
| `rm -rf`   | Force remove directory                  |

## File Permissions

| Command     | Description                                     |
| ----------- | ----------------------------------------------- |
| `chmod`     | Change file permissions                         |
| `chmod 777` | Change file permissions to 777                  |
| `chmod u+x` | Change file permissions to executable for user  |
| `chmod g+x` | Change file permissions to executable for group |

## Privilege Escalation

| Command   | Description                  |
| --------- | ---------------------------- |
| `sudo -l` | List sudo permissions        |
| `sudo -u` | Run command as another user  |
| `sudo -i` | Run shell as another user    |
| `sudo !!` | Run previous command as root |
| `su`      | Run shell as another user    |

## SSH

| Command                 | Description                             |
| ----------------------- | --------------------------------------- |
| `ssh user@host`         | Connect to remote host                  |
| `ssh -p port user@host` | Connect to remote host on specific port |
| `ssh-copy-id`           | Copy SSH key to remote host             |
| `ssh-keygen`            | Generate SSH key                        |

## System Info

| Command       | Description                                     |
| ------------- | ----------------------------------------------- |
| `uname`       | Print system information                        |
| `uname -a`    | Print all system information                    |
| `uname -r`    | Print kernel release                            |
| `uname -m`    | Print machine hardware name                     |
| `hostname`    | Print system hostname                           |
| `hostname -I` | Print all IP addresses                          |
| `hostname -i` | Print IP address                                |
| `date`        | Print system date and time                      |
| `cal`         | Print calendar                                  |
| `uptime`      | Print system uptime                             |
| `whoami`      | Print current user                              |
| `w`           | Print who is logged in                          |
| `finger`      | Print information about user                    |
| `id`          | Print effective user and group id               |
| `groups`      | Print all groups current user is in             |
| `last`        | Print last logged in users                      |
| `lastlog`     | Print when users last logged in                 |
| `free`        | Print free and used memory                      |
| `df`          | Print disk usage                                |
| `du`          | Print file space usage                          |
| `du -h`       | Print file space usage in human readable format |
| `man`         | Print manual page (exit with **q**)             |

## Shortcuts

| Command    | Description                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| `Ctrl + a` | Go to the beginning of the line you are currently typing on                                                |
| `Ctrl + e` | Go to the end of the line you are currently typing on                                                      |
| `Ctrl + u` | Clear the line before the cursor position. If you are at the end of the line, clears the entire line.      |
| `Ctrl + k` | Clear the line after the cursor position. If you are at the beginning of the line, clears the entire line. |
| `Ctrl + w` | Delete the word before the cursor.                                                                         |
| `Ctrl + r` | Let you search through previously used commands.                                                           |
| `Ctrl + l` | Clears the Screen, similar to the clear command.                                                           |
| `Ctrl + c` | Kill whatever you are running.                                                                             |
| `Ctrl + d` | Exit the current shell.                                                                                    |
| `Ctrl + z` | Puts whatever you are running into a suspended background process. fg restores it.                         |
| `Ctrl + s` | Stop output to the screen (for long running command).                                                      |
| `Ctrl + q` | Allow output to the screen (for long running command).                                                     |
| `Ctrl + x` | Use the arrow keys to navigate through the command line history.                                           |
| `Ctrl + _` | Undo.                                                                                                      |

## Text Editors

| Command      | Description                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| `nano`       | Nano is a simple text editor for Unix-like computer operating systems.                |
| `vim file`   | Vim is a highly configurable text editor built to enable efficient text editing.      |
| `vi file`    | Vi is a screen-oriented text editor originally created for the Unix operating system. |
| `emacs file` | Emacs is a family of text editors that are characterized by their extensibility.      |

## Archives

| Command                            | Description                   |
| ---------------------------------- | ----------------------------- |
| `tar -xvf file.tar`                | Extract tar file              |
| `tar -cvf file.tar directory`      | Create tar file               |
| `tar -tvf file.tar`                | List contents of tar file     |
| `tar -xvzf file.tar.gz`            | Extract tar.gz file           |
| `tar -cvzf file.tar.gz directory`  | Create tar.gz file            |
| `tar -tvzf file.tar.gz`            | List contents of tar.gz file  |
| `tar -xvjf file.tar.bz2`           | Extract tar.bz2 file          |
| `tar -cvjf file.tar.bz2 directory` | Create tar.bz2 file           |
| `tar -tvjf file.tar.bz2`           | List contents of tar.bz2 file |
| `unzip file.zip`                   | Extract zip file              |
| `zip file.zip directory`           | Create zip file               |
| `zip -r file.zip directory`        | Create zip file recursively   |
| `unrar x file.rar`                 | Extract rar file              |
| `rar a file.rar directory`         | Create rar file               |

## Disk Usage

| Command          | Description                                               |
| ---------------- | --------------------------------------------------------- |
| `df`             | Show disk usage                                           |
| `du`             | Show file space usage                                     |
| `du -h`          | Show file space usage in human readable format            |
| `du -a`          | Show file space usage for all files                       |
| `du -s`          | Show summarized file space usage                          |
| `du -sh`         | Show summarized file space usage in human readable format |
| `du -c`          | Show summarized file space usage with grand total         |
| `fdisk -l`       | Show all disk partitions                                  |
| `fdisk /dev/sda` | Show disk partitions for /dev/sda                         |
| `mount`          | Show mounted filesystems                                  |

## Search

| Command                        | Description                                                |
| ------------------------------ | ---------------------------------------------------------- |
| `grep pattern file`            | Search for pattern in file                                 |
| `grep -r pattern directory`    | Recursively search for pattern in directory                |
| `grep -v pattern file`         | Invert match, print non-matching lines                     |
| `grep -l pattern file`         | Print only filenames with matches                          |
| `grep -i pattern file`         | Ignore case distinctions                                   |
| `grep -r -i pattern directory` | Recursively search for pattern in directory, ignoring case |
| `locate file`                  | Find file                                                  |
| `find / -name file`            | Find file in /                                             |
| `find / -name file -type f`    | Find only files in /                                       |

## Networking

| Command                           | Description                      |
| ----------------------------------| -------------------------------- |
| `ifconfig`                        | Configure a network interface    |
| `ifconfig -a`                     | Configure all network interfaces |
| `ifconfig eth0`                   | Configure eth0 network interface |
| `iwconfig`                        | Get information for WiFi adapters|
| `nmcli networking off`            | Turn off network connections     |
| `nmcli networking on`             | Turn on network connections      |
| `systemctl stop NetworkManager`   | Turn off network connections     |
| `systemctl start NetworkManager`  | Turn on network connections      |
| `systemctl restart NetworkManager`| Restart network connectionss     |
| `whois domain`                    | Get whois information for domain |
| `dig domain`                      | Get DNS information for domain   |
| `dig -x host`                     | Get DNS information for host     |
| `host domain`                     | Get DNS information for domain   |
| `host -t mx domain`               | Get MX records for domain        |
| `hostname -I`                     | Get all IP addresses             |
| `hostname -i`                     | Get IP address                   |

## VIM

| Command | Description                          |
| ------- | ------------------------------------ |
| `h`     | move cursor left                     |
| `j`     | move cursor down                     |
| `k`     | move cursor up                       |
| `l`     | move cursor right                    |
| `gg`    | go to the first line of the document |
| `G`     | go to the last line of the document  |
| `zz`    | center cursor on screen              |
| `0`     | jump to the start of the line        |

# Emacs

| Command  | Description                                      |
| -------- | ------------------------------------------------ |
| `CTRL+O` | Write the current file to disk                   |
| `CTRL+X` | Close the current file buffer / Exit from Nano   |
| `CTRL+R` | Insert another file into the current one         |
| `ALT+<`  | Switch to the previous file buffer               |
| `ALT+>`  | Switch to the next file buffer                   |
| `ALT+D`  | Count the number of words, lines, and characters |
| `CTRL+L` | Refresh (redraw) the current screen              |


# Tree

| Command                  | Description                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| `tree`                   | It will display the contents of the working directory recursively showing sub-directories and files  |
| `tree -a`                | Display also the hidden files                                                                        |
| `tree -f`                | Display contents with the full path prefix                                                           |
| `tree -d`                | Display only the subdirectories                                                                      |
| `tree -df`               | Display subdirectories with their paths                                                              |
| `tree -L 2`              | Specifying depth of the directory                                                                    |
| `tree -P init.py*`       | Display only those files that match the pattern                                                      |
| `tree --du`              | Reports the size of each element                                                                     |
| `tree -J`                | Outputs the directory tree as an JSON formatted array                                                |
| `tree -o direc_tree.txt` | Redirect the tree’s output to filename                                                               |
