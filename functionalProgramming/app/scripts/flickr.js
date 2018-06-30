requirejs.config({
    paths: {
        ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
    },
});

require([
        'ramda',
        'jquery',
    ],
    function(_, $) {
        //show current content
        var trace = _.curry(function(tag, x) {
            console.log(tag, x);
            return x;
        });
        //get object attribute
        var prop = _.curry(function(property, object) {
            return object[property];
        });
        //add url to img tag
        var img = function(url) {
            return $('<img />', {
                src: url
            });
        };
        var Impure = {
            //send api
            getJSON: _.curry(function(callback, url) {
                $.getJSON(url, callback);
            }),
            //set content to html
            setHtml: _.curry(function(sel, html) {
                $(sel).html(html);
            })
        };
        //create url for api
        var url = function(term) {
            return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' +
                term + '&format=json&jsoncallback=?';
        };
        //check api response
        var app = _.compose(Impure.getJSON(trace('response')), url);
        app('cats');
        //get src from JSON
        var mediaUrl = _.compose(_.prop('m'), _.prop('media'));
        var srcs = _.compose(_.map(mediaUrl), _.prop('items'));
        var images = _.compose(_.map(img), srcs);
        // srcs and images can combine : var images = _.compose(_.map(_.compose(img, mediaUrl)), _.prop('items'));
        var renderImages = _.compose(Impure.setHtml('body'), images);
        var app = _.compose(Impure.getJSON(renderImages), url);
        //call api
        app('cats');

        /**
         * url             -> add 'cats' to create URL
         * Impure.getJSON  -> send API and get JSON
         * mediaUrl+srcs   -> JSON > items.map() > media > m
         * images          -> add src to <img>
         * Impure.setHtml  -> append <img> to body
         */
    });