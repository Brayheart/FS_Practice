const router = require('express').Router();
const controller = require('../controller/listController');

router.get('/fetchList', controller.fetchLists);
router.post('/createList', controller.createList);

module.exports = router;
