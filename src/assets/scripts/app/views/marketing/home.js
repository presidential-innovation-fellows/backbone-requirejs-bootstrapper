define([
    'jquery',
    'underscore',
    'backbone',
    'text!../../../../../templates/marketing/home.html'
], function ($, _, Backbone, homeTemplate) {
    'use strict';
    
    var HomeView = Backbone.View.extend({

        el: $("#container"),

        template: _.template(homeTemplate),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template).hide().fadeIn();
        }

    });    
    
    return HomeView;

});