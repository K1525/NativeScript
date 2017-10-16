exports.loaded = function(args){
    var page = args.object;
    page.bindingContext = page.navigationContext;
    console.log(page.bindingContext);
}

