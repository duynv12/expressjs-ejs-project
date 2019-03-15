var html = 'pages/homepage';
var controler = function (req, res, next) {
    var users = [
        { name: 'tobi', email: 'tobi@learnboost.com' },
        { name: 'loki', email: 'loki@learnboost.com' },
        { name: 'jane', email: 'jane@learnboost.com' }
    ];

    var locals = {
        title: 'Page Title',
        description: 'Page Description',
        header: 'Page Header',
        data: users
    };
    res.render(html, locals);
}

module.exports = controler;