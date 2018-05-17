 
function getHistory(account, from, limit, reward, opCount) {
    steem.api.getAccountHistory(account, from, limit, function (err, result) {
        if (err) {
            console.log('ERR');
            console.log(err);
            return;
        }
        result.forEach(function (tx) {
            var op = tx[1].op;
            var op_type = op[0];
            var op_value = op[1];
            if (op_type == "transfer") {
                if (op[1].memo.startsWith('#')) {
                    console.log(op[1].from + " sends " + op[1].amount + " memo = " + op[1].memo);
                }
            }
 
        });
        if (from > 0) {
            var fromOp = from - limit;
            if ((from - limit) < limit) {
                limit = from - limit;
            }
            console.log("Getting ops starting from " + (from - limit));
            getHistory(account, fromOp, limit, reward, opCount);
        }
    });
}
 
function getMemo(account) {
    steem.api.getAccountHistory(account, -1, 0, function (err, result) {
        opCount = result[0][0];
        console.log("Total count: " + opCount);
        getHistory(account, opCount, 1000, 0, opCount);
    });
 
}

getMemo('justyy');
