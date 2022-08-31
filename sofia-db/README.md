# Sofia-DB

```bash
npm init -y
npm i --save-dev standard
npm run link -- --fix
npm i sequelize pg pg-hstore --save
npm i debug --save
npm i inquirer chalk --save
npm i --save-dev ava
```

```js
const setupDatabase = require('sofia-db')
setupDabase(conf).then(db => {
    const {Agent, Metric} = db
}).catch(err => console.log(err))
```

### Pantalla Tab1
![](img/SeEckP4.png)

### Relacion DB
![](img/relacion.jpg)