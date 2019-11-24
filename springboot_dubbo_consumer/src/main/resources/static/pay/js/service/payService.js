app.service('payService',function($http){
	//本地支付

	this.createNative=function(){
		return $http.get('pay/createNative');
	}
	
	//查询支付状态
	this.queryPayStatus=function(out_trade_no){
		return $http.get('pay/queryPayStatus?out_trade_no='+out_trade_no);
	}
});