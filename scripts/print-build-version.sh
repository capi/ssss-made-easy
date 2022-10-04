#!/bin/bash
set -e
SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"
cd "$SCRIPT_DIR/.."

GIT_REVISION="$(git rev-parse HEAD)"
GIT_DIRTY=""
[ -n "$(git status -s)" ] && GIT_DIRTY="-dirty"
OVERRIDE=""
[ -e ".buildoverride" ] && find .buildoverride 2>/dev/null | head -n1 | grep . >/dev/null && OVERRIDE="-with-overrides" || true
echo "${GIT_REVISION}${GIT_DIRTY}${OVERRIDE}"
