## Commands

#### Setup
- `./run.sh api migrate && ./run.sh api seed`
- `./run.sh up -d`
- Access on localhost:80

#### Development
##### All
- `./run.sh`: See existing containers
- `./run.sh up` Start application (with logs)
- `./run.sh up -d` Start application (no logs)

##### Frontend
- `./run.sh web yarn [COMMAND]` Run a yarn command
- `./run.sh web lint` Use lint to correct JS formatting and convention errors
- `./run.sh web test` Run frontend tests
- `./run.sh web shell` Open a interactive shell in the frontend container
 
##### Backend
- `./run.sh api art [COMMAND]` Run a php artisan command 
- `./run.sh api test` Run backend tests
- `./run.sh api shell` Open a interactive shell in the frontend container
 
##### Testing
- `./run.sh e2e yarn [COMMAND]` Run a yarn command
- `./run.sh e2e test` Run backend tests
- `./run.sh e2e test ./tests/[TEST FILENAME].js` Run specific test
- `./run.sh e2e test:debug` Run backend tests (with logs)
- `./run.sh e2e shell` Open a interactive shell in the frontend container
 