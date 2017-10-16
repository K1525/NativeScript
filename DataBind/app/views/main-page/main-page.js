var view = require("ui/core/view");
var frameModule = require("ui/frame");
var Observable = require("data/observable");

var page;

var viewModel = new Observable.fromObject({
    nickname: ''
});

exports.loaded = function(args){
    page = args.object;
    page.bindingContext = viewModel;
}

exports.play = function(args){    
    var textfield = page.getViewById("nickname");    
    //console.log(textfield.text);
    
    viewModel.nickname = textfield.text;
    console.log(viewModel.nickname);
    frameModule.topmost().navigate({
        moduleName: "views/quiz-page/quiz-page",
        context: viewModel
    });
}