const {Router} = require('express');

let router = Router();

router.get('', require('./method/get'));
router.post('', require('./method/post'));
//router.delete('', require('./method/delete'));
//router.patch('', require('./method/patch'))

module.exports = router;

