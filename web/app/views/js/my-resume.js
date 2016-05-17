$(document).ready(function(){
		$(".section-wrapper").hide();
		$(".section h3").click(function(){
			var $this = $(this);
			var $el = $(this).parent().find(".section-wrapper"); 
			$el.slideToggle(function(){
				if ($el.is(":visible"))
					$this.find("span").text("-");
				else
					$this.find("span").text("+");
			});
			
	})
});