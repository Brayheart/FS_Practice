// have the router use endpoints that use other endpoints and controllers
const router = require('express').Router();

router.use('/lists', require('./listRouter'));
router.use('/entries', require('./entryRouter'));
// export 
module.exports = router;
