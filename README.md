## Commands
#### Development
##### All
- `./run`: See existing containers
- `./run up` Start application (with logs)
- `./run up -d` Start application (no logs)

##### Frontend
- `./run web lint` Use lint to correct JS formatting and convention errors
- `./run web test` Run frontend tests
- `./run web shell` Open a interactive shell in the frontend container
- `./run web yarn [COMMAND]` Run a yarn command
 
##### Backend
- `./run api art [COMMAND]` Run a php artisan command 
- `./run api test` Run backend tests
- `./run api shell` Open a interactive shell in the frontend container
 
##### Testing
- `./run e2e art [COMMAND]` Run a php artisan command 
- `./run e2e test` Run backend tests
- `./run e2e test ./tests/[TEST FILENAME].js` Run specific test
- `./run e2e test:debug` Run backend tests (with logs)
- `./run e2e shell` Open a interactive shell in the frontend container
- `./run e2e yarn [COMMAND]` Run a yarn command
 