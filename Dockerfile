FROM node:20-bullseye as build
COPY . /src/
SHELL ["/bin/bash", "-c"]
ARG GIT_CLEAN="false"
ARG FAIL_DIRTY_BUILD="true"
ARG NPM_REGISTRY=""

WORKDIR /src/
RUN mkdir -p .buildoverride
RUN if [[ "${GIT_CLEAN}" == "true" ]]; then \
      # first save the .buildoverride folder
      mv .buildoverride /.buildoverride; \
      # reset & clean
      git reset --hard; \
      git clean -fdx; \
      # move override folder back
      mv /.buildoverride .; \
    fi
# git version only after a potential reset
RUN mkdir -p .buildoverride/src/lib/assets && scripts/print-build-version.sh | tee .buildoverride/src/lib/assets/version.txt
RUN if [[ "${FAIL_DIRTY_BUILD}" == "true" ]]; then \
      grep -q -e "-dirty" .buildoverride/src/lib/assets/version.txt; \
      [ $? -eq 0 ] && echo "Checkout is dirty, rejecting build." && exit 3 || true; \
    fi
# copy buildoverride files over existing files
RUN cd .buildoverride && cp . .. -rv
# prepare npmrc
RUN --mount=type=secret,id=npm_auth \
    if [ -e /run/secrets/npm_auth ]; then cat /run/secrets/npm_auth >> .npmrc; fi; \
    if [ -n "${NPM_REGISTRY}" ]; then echo "registry = ${NPM_REGISTRY}" >> .npmrc; fi
# finally: build
RUN npm install
RUN npm run build
## ensure build/vite-manifest.json no longer exists
RUN if [ -e build/vite-manifest.json ]; then exit 2; else exit 0; fi

#######################

FROM nginx:latest
COPY --from=build /src/build /usr/share/nginx/html
