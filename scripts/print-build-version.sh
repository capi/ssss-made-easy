#!/bin/bash

GIT_REVISION="$(git rev-parse HEAD)"
GIT_DIRTY=""
[ -n "$(git status -s)" ] && GIT_DIRTY="-dirty"
echo "${GIT_REVISION}${GIT_DIRTY}"
