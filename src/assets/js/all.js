const allFunction = {
	getNum: function(nulls, data) { //数据取整
		if(nulls == 0) { //保留2位小数
			let aNew;
			let re = /([0-9]+\.[0-9]{2})[0-9]*/;
			aNew = data.replace(re, "$1");
			return aNew
		} else if(nulls == 1) { //取整数
			return parseInt(data)
		} else if(nulls == 2) { //四舍五入
			return Math.round(data)
		}
	},
	getDataTime: function(nulls, times, type) {
		if(nulls == 0) { //nulls为0时  将   '2020-04-24 15:45:15'转时间戳   1587686400000
			let date = new Date(times);
			let timestamp = date.getTime();
			return timestamp
		} else if(nulls == 1) { //nulls为0时  将  当前时间 转时间戳   1587686400000
			let timestamp = new Date().getTime();
			return timestamp
		} else if(nulls == 2) { //nulls为0时  将 时间戳转为日期格式
			var _data = times;
			//如果是13位正常，如果是10位则需要转化为毫秒
			if(String(times).length == 13) {
				_data = times
			} else {
				_data = times * 1000
			}
			let time = new Date(parseInt(_data));
			let Y = time.getFullYear();
			let Mon = time.getMonth() + 1;
			Mon = Mon < 10 ? ('0' + Mon) : Mon
			let Day = time.getDate();
			Day = Day < 10 ? ('0' + Day) : Day
			let H = time.getHours();
			H = H < 10 ? ('0' + H) : H
			let Min = time.getMinutes();
			Min = Min < 10 ? ('0' + Min) : Min
			let S = time.getSeconds();
			S = S < 10 ? ('0' + S) : S
			/*获取毫秒*/
			//			 let HM=time.getMilliseconds();
			//			 HM = HM < 10 ? ('0' + HM) : HM
			//自定义选择想要返回的类型
			if(type == "Y") {
				return `${Y}-${Mon}-${Day}`
			} else if(type == "H") {
				return `${H}:${Min}:${S}`
			} else {
				return `${Y}-${Mon}-${Day} ${H}:${Min}:${S}`

				/*使用方法
				 
				 *   let times2="1587864281550"
		              console.log(allFunction.getDataTime(2,times2))
				 * */
			}

		}

	},
	getUrlVal: function(va) { //截取url 获取携带的参数
		let params = {};
		if(location.search !== '') {
			let arr = location.search.substring(1).split('&');
			for(let i = 0, iLen = arr.length; i < iLen; i++) {
				let aTmp = arr[i].split('='),
					value = decodeURIComponent(aTmp[1]),
					numberVal = Number(value);
				//处理数字
				if(typeof numberVal === 'number' && numberVal === numberVal) {
					value = numberVal;
				}
				//处理布尔值
				if(value === 'true' || value === 'false') {
					value = value === 'true';
				}
				params[aTmp[0]] = value;
			}
		}
		return params;
		/*使用方法
		 * var params = allFunction.getUrlVal();
		   console.log(params['id'])
		 
		 * */
	},
	countTime: function(str, callback) {
		//获取当前时间  
		var date = new Date();
		var now = date.getTime();
		let deadline = 0;
		var endDate = new Date(str);

		var end = endDate.getTime();
		console.log(end)
		if(end <= now) {
			console.log("11")
			//             return deadline
			//			callback(deadline);
		} else {
			//时间差  
			var leftTime = end - now;
			//定义变量 d,h,m,s保存倒计时的时间  
			var d, h, m, s;
			if(leftTime >= 0) {
				d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
				h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
				m = Math.floor(leftTime / 1000 / 60 % 60);
				s = Math.floor(leftTime / 1000 % 60);
				deadline = d + '天' + h + '小时' + m + '分钟' + s + '秒'
				//				console.log(deadline)
				//return deadline
				callback(deadline);

			}

		}

	},
	timing: function(str, callback) {

		allFunction.countTime(str, callback);
/*
 var str = "2020/4/30 09:58:00";
		allFunction.timing(str, function(data) {
			
			console.log(data);
		})
 * */
	}

}

export default allFunction