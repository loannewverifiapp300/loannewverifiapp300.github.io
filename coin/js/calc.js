$(function(){

	$('.select-plans').on('change',function()
	{
		var $this=$(this);
		var plan=$this.val();
		var data=sw(plan);
		if (plan==3) {
			$('.block-calc').find('.profit-li').addClass('last-plan');	
		}
		else {
			$('.block-calc').find('.profit-li').removeClass('last-plan');	
		}
		//$('.p_before_amout').animate({'width': '0'},400);
		//$(".drag").animate({'left': '0px'},400);
		$('.calculate-amount').val(data.min);
		var amount=data.min;
		 $('.duration_list > li').removeClass('active');
		 $('.duration_list > li[rel="'+plan+'"]').addClass('active');
		calc(data,amount);
	});

	$('.calculate-amount').on('change keyup', function()
	{
		var amount=Number($(this).val());
		var plan=$('.select-plans').val();
		var data = sw(plan);
		if (amount>data.max) 
		{
			amount=data.max;
			$(this).val(amount);
			var data = sw(plan);
		}
		var position=Math.round((amount-data.min)*($( ".drag" ).parent().width()-$(".drag" ).width())/(data.max-data.min));
		if (position<0) position=0;
		//$('.p_before_amout').animate({'width': position},400);
		//$(".drag").animate({'left': position+'px'},400);
		calc(data,amount);
	}).on('keypress', isNumberKey);

	function isNumberKey(event) 
	{
		var charCode = (event.which) ? event.which : event.keyCode;
		console.log(charCode);
		if (charCode==46) return true;
		if (charCode > 31 && (charCode < 48 || charCode > 57))
			return false;
		return true;
	}
 
	function sw(plan)
	{
			data=[];
			data.duration=30;
					data.min=20;
					data.max=21000000;
					data.daily=6;
					data.percent=180;
					data.principal=0;
			switch (plan)
			{
				case '1':
					data.duration=1;
					data.min=10;
					data.max=100;
					data.daily=6;
					data.percent=120;
					data.principal=0;
					break;
				case '2':
			    data.duration=2;
					data.min=100;
					data.max=1000;
					data.daily=2;
					data.percent=140;
					data.principal=0;
				break;
					case '3':
			    data.duration=1;
					data.min=500;
					data.max=1000000000;
					data.daily=11.5;
					data.percent=200;
					data.principal=0;
				break;
					case '4':
			    data.duration=3;
					data.min=1000;
					data.max=1000000000;
					data.daily=11.5;
					data.percent=300;
					data.principal=0;
				break;
				
			}
		return data;
	}

	function calc(data, amount)
	{
		if (jQuery.isEmptyObject(data))
		{
			data = sw();
			amount = data.min;
			$('.calculate-amount').val(data.min);
			calculate(amount,data.daily, data.percent, data.duration, data.principal);
		}
		calculate(amount,data.daily, data.percent, data.duration, data.principal);
	}

	function calculate(amount, daily, percent,duration, principal)
	{
		
	 	var amount=Number(amount);
	 	var daily=Number(daily);
	 	var duration=Number(duration);
	 	var percent=Number(percent);
	 	var principal=Number(percent);

	 		//daily = daily * amount / 100;

	  var daily=Math.round(amount*daily*Math.pow(10, 3)).toFixed(0)/Math.pow(10, 5);
		var total=Math.round(amount*percent*Math.pow(10, 3)).toFixed(0)/Math.pow(10, 5);
		//var total=Math.round((Math.round(amount*percent*Math.pow(10, 2)).toFixed(0)/Math.pow(10, 4))*Math.pow(10, 2)).toFixed(0)/Math.pow(10, 4);
		$('.daily-profit-value').val(daily);
		$('.total-return-value').val(total);
		
	}

});

