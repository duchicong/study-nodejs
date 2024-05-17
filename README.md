study nodejs with express

use dbeaver then setting connection

```bash
allowPublicKeyRetrieval is true
```

run docker compose :

`cd docker`

`docker-compose -f mysql.yml -p mysql-nodejs up -d`

Create file migration with CLI:

```
npx sequelize-cli migration:generate --name "create-all-code" --models-path "./model/allCode.js"
```

Run Migration DB

```
npx sequelize-cli db:migrate
```

Run seeder data

```
npx sequelize-cli seed:generate --name "users" --models-path "./model/users.js"
```

Run seeder all data

```
npx sequelize-cli db:seed:all
```
