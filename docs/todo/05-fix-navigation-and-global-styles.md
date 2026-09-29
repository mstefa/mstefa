# 05: Fix navigation scroll listener memory leak and global styling

**What to build:** Fix lifecycle cleanup for the navigation scroll listener to eliminate memory leaks during route transitions, and load global CSS in the root layout so all pages inherit styling cleanly.

**Blocked by:** 01: Remove blog functionality and article infrastructure

**Status:** ready-for-agent

- [ ] Navigation bar cleans up its scroll event listener using a proper unmount callback function
- [ ] Root layout imports global stylesheet so all pages inherit typography and reset rules consistently
- [ ] Direct navigation to the CV route renders fonts and layout styles properly
- [ ] Page scrolling and show/hide header behavior functions smoothly without window listener leaks
