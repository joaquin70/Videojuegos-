//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require('./src/app.js');
const { genresOnDB } = require('./src/controllers/genresOnDB');
const { conn } = require('./src/db.js');
require ('dotenv').config();
const {PORT}=process.env;

//funcion para asegurar  que los generos esten sincronizados en la DB.
conn.sync({ alter: true }).then(async() => {
  await genresOnDB()
  server.listen(PORT, () => {
    console.log('%s listening at',process.env.PORT); // eslint-disable-line no-console
  });
});


