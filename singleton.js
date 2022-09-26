
// singleton opaco
var Singleton = function(name) {
	this.name = name;
	this.instance = null;
};
Singleton.prototype.getName = function() {
	alert(this.name);
};
Singleton.getInstance = function(name){
	if(!this.instance) {
		this.instance = new Singleton(name);
	}
	return this.instance;
};

var a = Singleton.getInstance('zee1');
var b = Singleton.getInstance('zee2');

alert(a === b); // true;

// singleton transparente
var CreateDiv = (function(){
	var instance;
	var CreateDiv = function(html){
		if(instance){
			return instance;
		}
		this.html = html;
		this.init();
		return instance = this;
	};
	CreateDiv.prototype.init = function(){
		var div = document.createElement('div');
		div.innerHTML = this.html;
		document.body.appendChild(div);
	}
	return CreateDiv;
})();

