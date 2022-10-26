## Table of Contents

- [Git CheatSheet for Developers](#git-cheatsheet-for-developers)
  - [Changing Directory](#changing-directory)
  - [Setting up Alias](#setting-up-alias)
  - [Git Configuration](#git-configuration)
  - [Getting & Creating Projects](#getting--creating-projects)
  - [Basic Commands](#basic-commands)
  - [Branching & Merging](#branching--merging)
  - [Sharing & Updating Projects](#sharing--updating-projects)
  - [Inspection & Comparison](#inspection--comparison)
  - [Undoing Things](#undoing-things)
  - [Syncing Forks](#syncing-forks)
  - [Rewrite History](#rewrite-history)
  - [Stashing](#stashing)
  - [Tagging](#tagging)
- [Common Problems Resolution](#common-problems-resolution)
  - [Delete All Commits](#delete-all-commit)
  - [Update commit](#update-commit)
  - [Update commit message](#update-commit-message)
  - [Undo a commit from like 5 commits ago](#undo-a-commit-from-like-5-commits-ago)
---

# Git CheatSheet for Developers

## Changing Directory

| Command | Description                            |
| ------- | -------------------------------------- |
| `cd`    | Change directory                       |
| `cd ..` | Change directory to parent directory   |
| `cd ~`  | Change directory to home directory     |
| `cd -`  | Change directory to previous directory |
| `pwd`   | Print working directory                |

**[🔼Back to Top](#table-of-contents)**

## Setting up Alias

| Command                                 | Description                      |
| --------------------------------------- | -------------------------------- |
| `git config --global alias.co checkout` | Set `co` as alias for `checkout` |
| `git config --global alias.br branch`   | Set `br` as alias for `branch`   |
| `git config --global alias.ci commit`   | Set `ci` as alias for `commit`   |

**[🔼Back to Top](#table-of-contents)**

## Git Configuration

| Command                                       | Description                                         |
| --------------------------------------------- | --------------------------------------------------- |
| `git config`                                  | Check all configuration options                     |
| `git config --list`                           | Check all configuration options with name and email |
| `git clone [https://url]`                     | Clone source code from a remote repository          |
| `git config --global user.name "Your name"`   | Configure username                                  |
| `git config --global user.email "Your email"` | Configure email                                     |
| `git config --global core.editor vim`         | Configure editor                                    |

**[🔼Back to Top](#table-of-contents)**

## Getting & Creating Projects

| Command                            | Description                                                                                              |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `git init`                         | Initialize a local Git repository                                                                        |
| `git clone [https://url]`          | Clone source code from a remote repository                                                               |
| `git clone [https://url] [folder]` | Clone source code from a remote repository into a specific folder                                        |
| `git clone --bare [https://url]`   | Clone source code from a remote repository without a working directory                                   |
| `git clone --mirror [https://url]` | Clone source code from a remote repository without a working directory and without the remote repository |

**[🔼Back to Top](#table-of-contents)**

## Basic Commands

| Command                                                                        | Description                                                               |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `git status`                                                                   | Check status                                                              |
| `git add [file]`                                                               | Add file to staging area                                                  |
| `git add .`                                                                    | Add all files to staging area                                             |
| `git add -A`                                                                   | Add all files to staging area                                             |
| `git add -u`                                                                   | Add all modified files to staging area                                    |
| `git add -p`                                                                   | Add all modified files to staging area interactively                      |
| `git commit -m "message"`                                                      | Commit changes                                                            |
| `git commit -a`                                                                | Commit all changes                                                        |
| `git commit -am "message"`                                                     | Commit all changes with message                                           |
| `git commit --amend`                                                           | Amend last commit                                                         |
| `git commit --amend -m "message"`                                              | Amend last commit with message                                            |
| `git commit --amend --no-edit`                                                 | Amend last commit without changing the commit message                     |
| `git commit --amend --reset-author`                                            | Amend last commit with new author                                         |
| `git commit --amend --no-edit --reset-author`                                  | Amend last commit with new author and without changing the commit message |
| `git commit --amend --no-edit --date="`date -R`"`                              | Amend last commit with new date                                           |
| `git commit --amend --no-edit --date="`date -R`" --reset-author`               | Amend last commit with new date and new author                            |
| `git commit --amend --no-edit --date="`date -R`" --reset-author --allow-empty` | Amend last commit with new date and new author and allow empty commit     |

**[🔼Back to Top](#table-of-contents)**

## Branching & Merging

| Command                                                 | Description                                                                         |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `git branch`                                            | List all branches                                                                   |
| `git branch -a`                                         | List all branches (local and remote)                                                |
| `git branch -r`                                         | List all remote branches                                                            |
| `git branch -v`                                         | List all branches with last commit on each branch                                   |
| `git branch -vv`                                        | List all branches with last commit and commit author on each branch                 |
| `git branch -vvv`                                       | List all branches with last commit, commit author and commit message on each branch |
| `git checkout -b [branch]`                              | Create a new branch and switch to it                                                |
| `git merge [branch]`                                    | Merge a branch into the active branch                                               |
| `git merge [source branch] [target branch]`             | Merge a branch into a target branch                                                 |
| `git branch -d [branch]`                                | Delete a branch                                                                     |
| `git branch -D [branch]`                                | Force delete a branch                                                               |
| `git push origin --delete [branch]`                     | Delete a remote branch                                                              |
| `git branch -m [old branch] [new branch]`               | Rename a branch                                                                     |
| `git branch --set-upstream-to=origin/[branch] [branch]` | Set a local branch's upstream branch                                                |
| `git branch --unset-upstream [branch]`                  | Unset a local branch's upstream branch                                              |
| `git push origin [branch]`                              | Push a branch to your remote repository                                             |

**[🔼Back to Top](#table-of-contents)**

## Sharing & Updating Projects

| Command                             | Description                                                 |
| ----------------------------------- | ----------------------------------------------------------- |
| `git push origin [branch]`          | Push a branch to your remote repository                     |
| `git push -u origin [branch]`       | Push changes to remote repository (and remember the branch) |
| `git push`                          | Push changes to remote repository (remembered branch)       |
| `git push origin --delete [branch]` | Delete a remote branch                                      |
| `git push origin :[branch]`         | Delete a remote branch                                      |
| `git push origin [branch] --force`  | Force push changes to remote repository                     |

**[🔼Back to Top](#table-of-contents)**

## Inspection & Comparison

| Command                           | Description                                      |
| --------------------------------- | ------------------------------------------------ |
| `git log`                         | View changes                                     |
| `git log --summary`               | View changes (detailed)                          |
| `git log --oneline`               | View changes (brief)                             |
| `git log --stat`                  | View changes (detailed)                          |
| `git log --patch`                 | View changes (detailed with actual changes)      |
| `git log --graph`                 | View changes (graphical)                         |
| `git log --graph --oneline`       | View changes (graphical and brief)               |
| `git log --graph --oneline --all` | View changes (graphical, brief and all branches) |

**[🔼Back to Top](#table-of-contents)**

## Undoing Things

| Command                            | Description                                                                                                |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `git reset [file]`                 | Unstage a file while retaining the changes in working directory                                            |
| `git reset --hard`                 | Discard all local changes in your working directory                                                        |
| `git reset --hard HEAD`            | Discard all local changes in your working directory                                                        |
| `git reset --hard origin/[branch]` | Discard all local changes in your working directory and get the latest version from the remote repository  |
| `git reset --hard [commit]`        | Discard all local changes in your working directory and get the specific commit from the remote repository |
| `git checkout -- [file]`           | Discard local changes in a specific file                                                                   |
| `git checkout [branch]`            | Switch to a branch and discard local changes                                                               |
| `git revert [commit]`              | Revert a commit                                                                                            |
| `git revert [commit] --no-commit`  | Revert a commit without committing                                                                         |

**[🔼Back to Top](#table-of-contents)**

## Syncing Forks

| Command                                 | Description                                                                                                                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `git remote -v`                         | List all currently configured remote repositories                                                                                                                                     |
| `git remote add upstream [https://url]` | Specify a new remote upstream repository that will be synced with the fork                                                                                                            |
| `git fetch upstream`                    | Fetch the branches and their respective commits from the upstream repository. Commits to master will be stored in a local branch, upstream/master                                     |
| `git merge upstream/master`             | Merge the changes from upstream/master into your local master branch. This brings your fork's master branch into sync with the upstream repository, without losing your local changes |

**[🔼Back to Top](#table-of-contents)**

## Rewrite History

| Command                       | Description        |
| ----------------------------- | ------------------ |
| `git rebase -i HEAD~[number]` | Interactive rebase |
| `git rebase -i [commit]`      | Interactive rebase |
| `git rebase -i [branch]`      | Interactive rebase |
| `git rebase -i [SHA1]`        | Interactive rebase |
| `git rebase -i [tag]`         | Interactive rebase |

**[🔼Back to Top](#table-of-contents)**

## Stashing

| Command                    | Description                                                    |
| -------------------------- | -------------------------------------------------------------- |
| `git stash`                | Stash changes in a dirty working directory away                |
| `git stash save "message"` | Stash changes in a dirty working directory away with a message |
| `git stash list`           | List all stashed changesets                                    |
| `git stash show`           | Show the changes in the last stashed changeset                 |
| `git stash show -p`        | Show the changes in the last stashed changeset (detailed)      |

**[🔼Back to Top](#table-of-contents)**

## Tagging

| Command                           | Description                      |
| --------------------------------- | -------------------------------- |
| `git tag`                         | List all tags                    |
| `git tag -l "v1.8.5*"`            | List all tags matching a pattern |
| `git tag [tag]`                   | Annotate a tag                   |
| `git tag -a [tag] -m "[message]"` | Annotate a tag with a message    |

**[🔼Back to Top](#table-of-contents)**

---

# Common Problems Resolution

## Delete All Commit

If you want to delete all commits and keep only one commit of all the commit.

```python
#Checkout
git checkout --orphan latest_branch
#Add all the files
git add -A
#Commit the changes
git commit -am "commit message"
#Delete the branch
git branch -D main
#Rename the current branch to main
git branch -m main
#Force update your repository
git push -f origin main
```

**[🔼Back to Top](#table-of-contents)**

## Update Commit

If you have commited and realized that there is small change needed.

```python
#make your change then,
git add . # or add individual files
git commit --amend --no-edit
# now your last commit contains that change!
```

**[🔼Back to Top](#table-of-contents)**

## Update commit message

If you want to update previous commit message.

```python
git commit --amend
# follow prompts to change the commit message
```

**[🔼Back to Top](#table-of-contents)**

## Undo a commit from like 5 commits ago

Turns out you don't have to track down and copy-paste the old file contents into the existing file in order to undo changes! If you committed a bug, you can undo the commit all in one go with _revert_.

```python
# find the commit you need to undo
git log
# use the arrow keys to scroll up and down in history
# once you've found your commit, save the hash
git revert [saved hash]
# git will create a new commit that undoes that commit
# follow prompts to edit the commit message
# or just save and commit
```

**[🔼Back to Top](#table-of-contents)**
