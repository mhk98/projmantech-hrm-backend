const router = require('express').Router();
const promotion = require('../../controllers/Promotion/Promotion.controller');



router.post('/createPromotion',promotion.createPromotion);
router.get('/getPromotions',promotion.getPromotion);




module.exports = router;