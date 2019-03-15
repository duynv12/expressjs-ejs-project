var router = require('express').Router();

/** API Routing */
router.use('/api', require('./api'));
/** WEB APP Routing */
router.use('/', require('./web'));

module.exports = router;