let dom = {
    createElement: function (tagName, className, cssProps) {
        //create dom element
        let element = document.createElement(tagName);
        //check if this element is valid html element
        if (element != null) {
            //if so, then validate classname existance
            if (this._isValidValue(className)) {
                element.className = className;
            }

            //enumerate all css properties given as  object
            for (let f in cssProps) {
                //check if object key is valid attribute
                if (this._isValidAttr(f)) {
                    //then use it as attribute
                    element[f] = cssProps[f];
                }
                //otherwise,it is just style.Use it as style..
                else {
                    element.style[f] = cssProps[f];
                }
            }
        }
        return element;
    },
    _isValidValue: function (val) {
        return (typeof (val) !== "undefined" && val)
    },
    _isValidAttr: function (attr) {
        return (attr == 'src' || attr == 'href' || attr == 'innerText' || attr == 'id');
    }
}

