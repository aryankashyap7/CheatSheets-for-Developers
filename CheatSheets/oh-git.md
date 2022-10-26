## Table of Contents

- [Git CheatSheet for Developers](#git-cheatsheet-for-developers)
  - [Delete All Commits](#delete-all-commit)
  - [Update commit](#update-commit)
  - [Update commit message](#update-commit-message)
  - [Undo a commit from like 5 commits ago](#undo-a-commit-from-like-5-commits-ago)

---

# Git CheatSheet for Developers

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
