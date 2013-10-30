define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title: 'Home', moduleId: 'viewmodels/home', nav: true },
                { route: 'Apps', title: 'Apps', moduleId: 'viewmodels/apps.home', nav: true },
                { route: 'Flickr', moduleId: 'viewmodels/flickr', nav: true },
                { route: 'Azure', moduleId: 'viewmodels/azure', nav: true },
                { route: 'Ads', moduleId: 'viewmodels/ads', nav: true },
                { route: 'Cool JS libs', moduleId: 'viewmodels/cooljslibs', nav: true },
                { route: 'Css3', moduleId: 'viewmodels/css3', nav: true },
                { route: 'Data Viz', moduleId: 'viewmodels/dataviz', nav: true },
                { route: 'Facebook', moduleId: 'viewmodels/facebook', nav: true },
                { route: 'Games', moduleId: 'viewmodels/games', nav: true },
                { route: 'Html5 Controls', moduleId: 'viewmodels/html5controls', nav: true },
                { route: 'Jquery / JQuery UI', moduleId: 'viewmodels/jquery', nav: true },
                { route: 'Knockout.js Custom Bindings', moduleId: 'viewmodels/knockoutcustombindings', nav: true },
                { route: 'No Sql', moduleId: 'viewmodels/nosql', nav: true },
                { route: 'Twitter', moduleId: 'viewmodels/twitter', nav: true },
                { route: 'Web Sockets', moduleId: 'viewmodels/websockets', nav: true },
                { route: 'C# Async Await', moduleId: 'viewmodels/asyncawait', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});