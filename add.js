//Creo mi constructor
function Addcounter(element,options){
	this.options = $.extend({}, Addcounter.DEFAULTS, options);
	this.element = element;
	this.$element = $(element);
	this.init();
}



//extiendo mis funciones en mi prototipo
$.extend(Addcounter.prototype,{
	init:function() {
		this.$element.append(this.options.template);
		
		$("ul").on("click", "li", function(){})
		this.$element.find(this.options.add).on('click',$.proxy(this.onclick,this));
		$(this.options.subtract, this.$element).on('click',$.proxy(this.onclick,this));
			
		
		
	},
	check:function(action){
		var _element = $(this.options.element, this.$element),
				_element_int = parseInt(_element.val());

		if (action == this.options.add) {
			_element.val(_element_int + this.options.increase);
		}
		else {
			if(_element_int > 0) {
				_element.val(_element_int - this.options.increase);
			}
		}
	},
	onclick:function(event) {

		var target = $(event.target)
		if(target.is(this.options.add))
			this.check(this.options.add)
		else if (target.is(this.options.subtract))
			this.check(this.options.subtract)
	}
	
});


//propiedades de mi plugin por defecto
Addcounter.DEFAULTS = {
	increase: 1,
	template:'<input type="text" class="element" value="0"> <a href="#" class="add">más</a> <a href="#" class="subtract">menos</a>',
	element:'.element',
	add:".add",
	subtract:".subtract",
	min:0
};

//

$.fn.add_counter = function(options){
	return $(this).each(function(){
		var self = $(this);
		if(!self.data("add_counter")){
			self.data("add_counter", new Addcounter(this, options));
		}
	});
};