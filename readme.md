# Github Repo Watcher

Test task for UZ. Search for an organization's GitHub repositories and save their data.



## Installation
The project consists on two independent folders, one for the back-end and one for the front-end. They are meant to run as two different processes.
Both require [Node.js](https://nodejs.org/) v12+ to run.
#### Back-end
Install the dependencies and devDependencies and start the server.

```sh
$ cd back
$ npm install
$ npm run start DB_URI=<mongodb-database-uri> PORT=<available-port>
```
An .env file can be provided


For dev environments...

```sh
$ npm run start:dev DB_URI=<mongodb-database-uri> PORT=<available-port>
```
#### Front-end
Install the dependencies and devDependencies and start the server.

```sh
$ cd front
$ yarn add
$ yarn start
```
An .env file can be provided


For production builds...

```sh
$ yarn build
```
Both ports default to 3000


License
----

MIT



