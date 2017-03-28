function alertSpan(element, msg, style) { // style example:  { color: '#a94442' }
    var newElement = $("<span></span>").text(msg).css(style);
    
            newElement.addClass('alertSpan');
            $(element).siblings('.alertSpan').remove();
    
            $(element).after(newElement);
        }