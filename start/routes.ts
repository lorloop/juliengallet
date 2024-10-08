/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const HomeController = () => import('#controllers/home.controller')
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'index'])
router.post('/', [HomeController, 'contact'])
