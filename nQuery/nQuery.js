
var $ = function (element) {
  return new _$(element);
}

var _$ = function (element) {
  this.elements = document.querySelectorAll(element);
}

_$.prototype.css = function (arguments) {
  var self = this;
  var attributeList = arguments.split(';');
  if (attributeList[attributeList.length - 1] === '') {
    delete attributeList[attributeList.length - 1];
  }
  var attributes = {};
  attributeList.forEach(function (item) {
    var attribute = item.split(':');
    for (var i = 0; i < self.elements.length; i++) {
      self.elements[i].style[attribute[0]] = attribute[1];
    }
  });
  return this;
};

_$.prototype.html = function (arguments) {
  for (var i = 0; i < this.elements.length; i++) {
    this.elements[i].innerHTML = arguments;
  }
  return this;
};

_$.prototype.click = function (func) {
  for (var i = 0; i < this.elements.length; i++) {
    this.elements[i].addEventListener('click', func.bind(this.elements[i]));
  }
  return this;
};

