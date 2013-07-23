(function () {
    var css = [
        'lib/bootstrap/css/bootstrap.css'
    ];
    $.each(css, function () {
        gku.loadcss(this);
    })
})();

require.config({
    baseUrl: 'webcomponent',
    paths: {
        'bootstrap': '../lib/bootstrap/js/bootstrap'
    }
});


define(['bootstrap'], function () {
    return {
        name: 'tabPanel',
        template: '<div class="tabbable" style="margin: .5em"><ul class="nav nav-tabs"></ul><div class="tab-content"></div><content></content></div>',
        script: function () {
            this.init=function() {

            }
        }
    };
})

//
//<div class="tabbable"> <!-- Only required for left/right tabs -->
//    <ul class="nav nav-tabs">
//        <li class="active"><a href="#tab1" data-toggle="tab">Section 1</a></li>
//        <li><a href="#tab2" data-toggle="tab">Section 2</a></li>
//    </ul>
//    <div class="tab-content">
//    <div class="tab-pane active" id="tab1">
//        <p>I'm in Section 1.</p>
//    </div>
//    <div class="tab-pane" id="tab2">
//    <p>Howdy, I'm in Section 2.</p>
//    </div>
//</div>
//</div>