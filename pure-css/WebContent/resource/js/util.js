var util = {};
(function(){
	var date = new Date();
	
	util.getData=function(){
		return date;
	}
	
	function dateToString(date){
		if(typeof(date) !="undefined" && date != null){
			if(date instanceof Date){
				var y = date.getFullYear();
				var m = date.getMonth()+1;
				var d = date.getDate();
				return y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
			}else if(typeof(date) == "number" || typeof(date) == "string"){
				var value = date+"";
				var date1 = new Date(parseInt(value.replace("/Date(", "").replace(")/", ""), 10));
                //月份为0-11，所以+1，月份小于10时补个0       
                var month = date1.getMonth() + 1 < 10 ? "0" + (date1.getMonth() + 1) : date1.getMonth() + 1;
                var currentDate = date1.getDate() < 10 ? "0" + date1.getDate() : date1.getDate();
                return date1.getFullYear() + "-" + month + "-" + currentDate;
			}else{
				return "";
			}			
		}		
	}
	
	util.dateToString = dateToString;
	
	function dateParser(s){
		if (!s) return new Date();
		var ss = s.split('-');
		var y = parseInt(ss[0],10);
		var m = parseInt(ss[1],10);
		var d = parseInt(ss[2],10);
		if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
			return new Date(y,m-1,d);
		} else {
			return new Date();
		}
	}
	
	util.dateParser = dateParser;
	
	util.getDataStr=function(){
		return dateToString(date);
	}
	
	util.validata={
		require:function(data){
			if(!data){
				return false;
			}
			if(data.trim==""){
				return false;
			}
			return true;
		},length:function(min,max,data){
			if(!data){
				return false;
			}
			if(data.length<min||data.length>max){
				return false;
			}
			return true;
		}
	}
})()