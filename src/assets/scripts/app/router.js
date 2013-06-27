define([
    'jquery',
    'underscore',
    'backbone',
    'views/marketing/home'
], function ($, _, Backbone, ProjectListView, HomeView) {
    'use strict';
    
    var AppRouter = Backbone.Router.extend({

        // This is really just an API Manager, perhaps the name
        // should be changed to reflect that.  

        routes: {
            // Expects #/api/...
            'api/home': 'home',
            'api/projects': 'listProjects',
            '*actions': 'defaultAction'
        },

        home: function () {
            console.log("Initializing home view");
            new HomeView();
        }
    });

    var initialize = function () {
        var router = new AppRouter();
        Backbone.history.start();

        router.on('defaultAction', function (actions) {
            console.log("no route:", actions);
        });
    }

    return {
        initialize: initialize
    }
});