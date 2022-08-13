function test(req, res){
    res.json({"test": "test"});
};

function Cbinary(req, res){
    console.log("test");
};

exports.test = test;
exports.Cbinary = Cbinary;