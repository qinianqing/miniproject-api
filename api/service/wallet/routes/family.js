const router = require('express').Router();
const Account = require('../models/Account');

const getFamilyCR = require('../../family/interface/getFamilyCR');
// 注意账户金额和明细只针对账户余额发生的交易，不支持账号之外如微信支付发生的交易

// 获取用户账户总金额
router.get('/balance',(req,res,next)=>{
    if(!req.currentUser) {
        return res.send({
            error_code:5001,
            error_msg:'无调用权限'
        })
    }
    if(!req.query.family_id) {
        return res.send({
            error_code:5002,
            error_msg:'需要family_id'
        })
    }
    getFamilyCR({
        user_id:req.currentUser.user_id,
        family_id:req.query.family_id,
        callback:(resp)=>{
            if (resp.error_code){
                return res.send(resp)
            }
            let data = resp.data;
            let b=0.00;
            if (data.balance){
                b = data.balance;
            }
            res.send({
                error_code:0,
                error_msg:'ok',
                data:b
            })
        }
    })
});

// 获取用户账目列表
// 获取用户账户总金额
// LastEvaluatedKey
router.get('/bills',(req,res,next)=>{
    if(req.currentUser){
        console.log(req.query.last_key);

        if(req.query.last_key){
            req.query.last_key  = decodeURIComponent(req.query.last_key);
            req.query.last_key = JSON.parse(req.query.last_key);
        }
        if(!req.query.family_id){
            return res.send({
                error_code:5004,
                error_msg:'需要family_id'
            })
        }
        let type = req.query.type;
        // 获取account
        let account = new Account();
        account.owner_id = req.query.family_id;
        if(type){
            switch (type){
                case 'pre-cb':
                    account.getAccountListLoadAll((err,data)=>{
                        if (err){
                            res.send({
                                error_code:5003,
                                error_msg:err.message
                            })
                        }else {
                            res.send({
                                error_code:0,
                                error_msg:'ok',
                                data:data
                            })
                        }
                    });
                    break;
                case 'already-cb':
                    account.getAccountListByType((err,data)=>{
                        if (err){
                            res.send({
                                error_code:5002,
                                error_msg:err.message
                            })
                        }else {
                            res.send({
                                error_code:0,
                                error_msg:'ok',
                                data:data
                            })
                        }
                    },req.query.last_key);
                    break;
                case 'all':
                    account.getAccountList((err,data)=>{
                        if (err){
                            res.send({
                                error_code:5002,
                                error_msg:err.message
                            })
                        }else {
                            res.send({
                                error_code:0,
                                error_msg:'ok',
                                data:data
                            })
                        }
                    },req.query.last_key);
                    break;
            }
        }
    }else {
        res.send({
            error_code:5001,
            error_msg:'无调用权限'
        })
    }
});

module.exports = router;