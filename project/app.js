var kanso = require('kanso');


exports.rewrites = [
    {from: '/static/*', to: 'static/jquery-1.4.2.min.js'},
    {from: '/', to: '_show/welcome'}
];

exports.shows = {
    welcome: function (doc, req) {
        var content = kanso.template('welcome.html', req, {});

        if (req.client) {
            $('#content').html(content);
            document.title = 'It worked!';
        }
        else {
            return kanso.template('base.html', req, {
                title: 'It worked!',
                content: content
            });
        }
    }
};
