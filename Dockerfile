FROM node:16-bullseye as build
COPY . /src/

WORKDIR /src/
RUN scripts/print-build-version.sh > /version.txt
RUN --mount=type=secret,id=npm_auth [ -e /run/secrets/npm_auth ] && cat /run/secrets/npm_auth >> .npmrc || true
RUN npm install
RUN npm run build
RUN rm build/vite-manifest.json

#######################

FROM nginx:latest
COPY --from=build /src/build /usr/share/nginx/html
