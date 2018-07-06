FROM php:7

RUN apt-get update -y \
  && apt-get install -y \
  openssl \
  zip \
  unzip \
  git \
  mysql-client \
  && docker-php-ext-install pdo_mysql

RUN curl -sS https://getcomposer.org/installer | php -- --quiet

RUN mv composer.phar /usr/local/bin/composer

RUN docker-php-ext-install pdo mbstring

WORKDIR /usr/src/api

COPY composer.json /usr/src/api
COPY composer.lock /usr/src/api

RUN composer update --no-scripts --no-autoloader

COPY .env.example .env

COPY . /usr/src/api

RUN composer dump-autoload --optimize

RUN php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
RUN php artisan key:generate

RUN php artisan jwt:secret

EXPOSE 8080

CMD php artisan serve --host=0.0.0.0 --port=8080