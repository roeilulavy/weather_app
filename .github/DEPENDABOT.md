# Dependabot Automatic Security Updates

This repository is configured to automatically apply security updates using GitHub Dependabot.

## Configuration Overview

### 1. Dependabot Configuration (`.github/dependabot.yml`)

Dependabot is configured to:
- Monitor npm dependencies in the root directory
- Check for updates daily
- Create pull requests for security and version updates
- Group minor and patch updates together to reduce PR noise
- Apply appropriate labels (`dependencies`, `npm`) to PRs
- Assign PRs to repository maintainer for review

### 2. Auto-Merge Workflow (`.github/workflows/dependabot-auto-merge.yml`)

This GitHub Actions workflow automatically:
- Detects when Dependabot creates a pull request
- Approves and enables auto-merge for:
  - Patch updates (e.g., 1.0.0 → 1.0.1)
  - Minor updates (e.g., 1.0.0 → 1.1.0)
  - Security updates (all severity levels)

**Major version updates** (e.g., 1.0.0 → 2.0.0) require manual review to prevent breaking changes.

## How It Works

1. **Daily Checks**: Dependabot checks for dependency updates every day
2. **PR Creation**: When updates are found, Dependabot creates pull requests
3. **Auto-Approval**: For patch/minor updates, the workflow automatically approves the PR
4. **Auto-Merge**: The workflow enables auto-merge, which merges the PR after checks pass
5. **Security Priority**: Security updates are prioritized and auto-merged regardless of version bump type

## Repository Settings Required

For auto-merge to work, ensure these GitHub repository settings are enabled:

1. **Allow auto-merge**: Settings → General → Pull Requests → "Allow auto-merge"
2. **Require status checks** (recommended): Settings → Branches → Branch protection rules
   - Require status checks to pass before merging
   - This ensures tests run before auto-merge

## Manual Override

You can still manually review or reject any Dependabot PR:
- Comment `@dependabot ignore` to close the PR
- Comment `@dependabot rebase` to rebase the PR
- Manually review and merge if needed

## Benefits

- **Security**: Vulnerabilities are patched automatically
- **Up-to-date**: Dependencies stay current with latest patches
- **Less maintenance**: Reduces manual dependency update work
- **Safe**: Major updates still require human review

## Monitoring

Check the "Insights → Dependency graph → Dependabot" section in GitHub to:
- View Dependabot alerts
- See update history
- Monitor auto-merge activity
