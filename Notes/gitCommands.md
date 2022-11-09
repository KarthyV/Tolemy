# Git

- Version control / Source control
- Stages in Git
  - Working
  - Staging
  - Commit
- Github alternatives
  - gitlab
  - bitbucket
  - gitbucket
  - aws code commit
  - google cloud
- git vs Github
  - git - software
  - github - a place for storing

## Commands

1. **git init**
   - Initializes a .git folder and marks the files as untracked.
2. **git status**
   - checks all the files, shows which is staged,deleted, addded.
3. **git add (filename)**
   - Moves the files from working to staging.
   - For adding all file use - `git add .`
4. **git reset (filename)**
   - Undo the changes which is in staging to working.
5. **git commit -m (message)**
   - Moves file from staging to commit.
   - if no -m given, default vim will open, - insert `i` | save - `esc` and then `:wq` for quitting.
6. **git log**
   - For viewing the commit details.
   - `git log -p` shows all the commits along with the filename and lines as well. `space` for scrolling the results and `/` for search, `n` for next results, `N` for previous results.
   - `git log --graph` represents the same in graph manner.
7. **git checkout**

   - Shows the commit and takes to that point.
   - after checkout an id to be passed or `-` for going to the back.
   - for getting the latest commit, use `git checkout (branchname)`.

8. **git checkout -b (branchname)**
   - If the branchname does not exist, it will be created.
9. **git commit --amend**
   - For changing the commit message.
10. **git merge (branchname)**
    - Merges the branch files with the main branch on what it was called on.
