# Pulse
A high performance, real-time, web based, chat application.

## Running the project:
At the root of the project, run `npm install` to install the dependencies\
**NOTE:** this automatically installs the dependencies for both backend and frontend\
After that either run `npm run dev` to start both the servers\
or run `npm run start:backend` to start only backend, and `npm run start:frontend` to start only backend\

## Running each server individually:
Run `npm run start` inside the `frontend/` directory to start frontend server\
Run `npm run dev` inside the `backend/` directory to start backend server\

## Testing:
For now only backend is working. You can verify that everything is setup by running\
`npm run start:backend` at root or `npm run dev` in `backend/`, going to `127.0.0.1:3000`\
on your browser and seeing if it displays a hello world message
