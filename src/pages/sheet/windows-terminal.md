---
layout: ../../layouts/BlogLayout.astro
title: "Windows Terminal Cheatsheet"
---

## Application Commands

| Command              | Description        |
| -------------------- | ------------------ |
| `Alt-F4`             | Close window       |
| `Ctrl-S­hift-f`      | Find               |
| `Ctrl-S­hif­t-Space` | Open dropdown      |
| `Ctrl-,`             | Open settings file |
| `Alt-Enter` `F11`    | Toggle full screen |






## Tab Commands

| Command            | Description                 |
| ------------------ | --------------------------- |
| `Ctrl-S­hift-d`    | Duplicate tab               |
| `Ctrl-S­hift-t`    | New tab                     |
| `Ctrl-S­hift-p`    | New tab from profile p=1..9 |
| `Ctrl-Tab`         | Switch to next tab          |
| `Ctrl-S­hif­t-Tab` | Switch to prev tab          |
| `Ctrl-Alt-n`       | Switch to tab n=0..9        |







## Pane Commands

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `Alt-Sh­ift-d`  | Split pane optimally. Active profile.     |
| `Alt-Sh­ift--`  | Split pane horizontally. Default profile. |
| `Alt-Sh­ift-+`  | Split pane vertically. Default profile.   |
| `Alt-Shift`     | Resize pane                               |
| `Alt`           | Move pane focus                           |
| `Ctrl-S­hift-w` | Close innermost pane,tab, or window       |






## Clipboard Commands

| Command  | Description |
| -------- | ----------- |
| `Ctrl-c` | Copy        |
| `Ctrl-v` | Paste       |








## Scrollback Commands

| Command             | Description      |
| ------------------- | ---------------- |
| `Ctrl-S­hift-up`    | Scroll up.       |
| `Ctrl-S­hif­t-down` | Scroll down.     |
| `Ctrl-S­hif­t-pgup` | Scroll page up   |
| `Ctrl-S­hif­t-pgdn` | Scroll page down |







## Visual adjustment Commands

| Command  | Description        |
| -------- | ------------------ |
| `Ctrl-=` | Increase font size |
| `Ctrl--` | Decrease font size |
| `Ctrl-0` | Reset font size    |








## Customizing key bindings

| Command             | Description                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `User Settings    ` | All custom­iza­tions are set in settin­gs.json, as found via the Settings menu. No GUI is available in v1.0.                   |
| `Defaults`          | Hold the Alt-key while pressing the Settings menu to open defaul­ts.json. This is useful when building your own settin­g.json! |
| `Keys`              | Key bindings are set in the "­key­bin­din­gs" block as: { "­com­man­d":"c­mdN­ame­", "­key­s":"m­od+­key­"}                    |
| `Actions`           | Some commands take additional action arguments to modify the behaviour.                                                        |








## Further info

| Info                    | Description                                                                    |
| ----------------------- | ------------------------------------------------------------------------------ |
| `Windows Terminal docs` | https://learn.microsoft.com/en-us/windows/terminal/                            |
| `Custom key bindings`   | https://learn.microsoft.com/en-us/windows/terminal/customize-settings/actions/ |




