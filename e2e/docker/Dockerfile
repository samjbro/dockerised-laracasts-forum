FROM node:8.9.1

RUN apt-get update && \
    apt-get install -y \
      xvfb \
      x11-xkb-utils \
      xfonts-100dpi \
      xfonts-75dpi \
      xfonts-scalable \
      xfonts-cyrillic \
      x11-apps \
      clang \
      libdbus-1-dev \
      libgtk2.0-dev \
      libnotify-dev \
      libgnome-keyring-dev \
      libgconf2-dev \
      libasound2-dev \
      libcap-dev \
      libcups2-dev \
      libxtst-dev \
      libxss1 \
      libnss3-dev \
      gcc-multilib \
      g++-multilib

WORKDIR usr/src/e2e

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install

COPY . .