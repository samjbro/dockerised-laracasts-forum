#!/usr/bin/env bash

export DB_ROOT_PASS=${DB_ROOT_PASS:-root}
export DB_USER=${DB_USER:-lf-user}
export DB_PASS=${DB_PASS:-lf-pass}
export DB_NAME=${DB_NAME:-laravel-forum}
export DB_HOST=${DB_HOST:-mysql}

if [ "$1" == "e2e" ]; then
export SERVER_PORT=${SERVER_PORT:-83}
export WEB_PORT=${WEB_PORT:-3003}
export API_PORT=${API_PORT:-8083}
export DB_PORT=${DB_PORT:-3308}
export APP_ENV=${APP_ENV:-testing}
COMPOSE="docker-compose -f docker-compose.e2e.yml -p laracasts-forum-e2e"

else

export SERVER_PORT=${SERVER_PORT:-82}
export WEB_PORT=${WEB_PORT:-3002}
export API_PORT=${API_PORT:-8082}
export DB_PORT=${DB_PORT:-3307}
COMPOSE="docker-compose -f docker-compose.dev.yml -p laracasts-forum"

fi

if [ $# -gt 0 ]; then
  if [ "$1" == "web" ]; then
    shift 1
    if [ "$1" == "test" ]; then
      $COMPOSE run --rm web yarn test

    elif [ "$1" == "lint" ]; then
      $COMPOSE run --rm web yarn lint
    elif [ "$1" == "shell" ]; then
      $COMPOSE run --rm web /bin/sh
    else
      $COMPOSE run --rm web "$@"
    fi
  elif [ "$1" == "api" ]; then
    shift 1
    if [ "$1" == "art" ]; then
      shift 1
      $COMPOSE run --rm api php artisan "$@"
    elif [ "$1" == "test" ]; then
      shift 1
      $COMPOSE run --rm api vendor/bin/phpunit
    elif [ "$1" == "setup" ]; then
      ./run.sh api configure
      ./run.sh api migrate
      ./run.sh api seed
    elif [ "$1" == "configure" ]; then
      cp ./api/.env.example ./api/.env
      ./run.sh api art key:generate
      ./run.sh api art jwt:secret
    elif [ "$1" == "migrate" ]; then
      $COMPOSE run --rm api php artisan migrate --seed
    elif [ "$1" == "seed" ]; then
      $COMPOSE run --rm api php artisan db:seed --class=ThreadSeeder
    elif [ "$1" == "shell" ]; then
      $COMPOSE run --rm api /bin/sh
    else
      $COMPOSE run --rm api "$@"
    fi
  elif [ "$1" == "e2e" ]; then
    shift 1
    if [ "$1" == "test" ]; then
      shift 1
      $COMPOSE up -d
      $COMPOSE run --rm e2e yarn test "$@"
      $COMPOSE down
    elif [ "$1" == "test:debug" ]; then
      shift 1
      $COMPOSE up -d
      $COMPOSE run --rm e2e yarn test:debug "$@"
      $COMPOSE down
    elif [ "$1" == "shell" ]; then
      $COMPOSE run --rm e2e /bin/sh
    else
      $COMPOSE run --rm e2e "$@"
    fi
  else
    $COMPOSE "$@"
  fi
else
  $COMPOSE ps
fi
