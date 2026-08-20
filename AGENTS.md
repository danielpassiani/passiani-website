# Development Guidelines

## Git workflow

This repository is connected to an external deployment and synchronization workflow.

Do not rewrite published Git history. Avoid force pushing, rebasing, amending, or squashing commits that have already been pushed to the remote repository, as this may disrupt synchronization.

Keep the `main` branch in a working and stable state.

For larger changes, prefer creating a separate branch and opening a Pull Request before merging into `main`.
