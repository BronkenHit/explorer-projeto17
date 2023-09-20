import { Router } from './router.js';

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.print();

window.onpopstate = () => router.print()
window.route = () => router.init()