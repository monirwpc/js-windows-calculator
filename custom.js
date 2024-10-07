
		function keyNum(num){
			var keyVal = document.getElementById('output-val').innerHTML;
			document.getElementById('output-val').innerHTML= keyVal+(num);
		}
		function keyZero(){
			var keyVal = document.getElementById('output-val').innerHTML;
			if(keyVal){
				document.getElementById('output-val').innerHTML= keyVal+'0';
			}
		}
		function keyPoint(){
			var keyVal = document.getElementById('output-val').innerHTML;
			if(keyVal){
				document.getElementById('output-val').innerHTML= keyVal+'.';
			}else{
				document.getElementById('output-val').innerHTML= 0+'.';
			}
		}

		function operator(num){
			var keyVal = document.getElementById('output-val').innerHTML;
			if(keyVal){
				var hVal = document.getElementById('history-val').innerHTML;
				// var eq = document.getElementById('output-val').innerHTML;
				// var eq2 = document.getElementById('history-val').innerHTML;
				// var eq3= eq2+eq;
				var operatorVal = hVal+keyVal+(num);
				document.getElementById('history-val').innerHTML= operatorVal;
				document.getElementById('output-val').innerHTML= '';
			} 
		}

		function equal(){
			var eq = document.getElementById('output-val').innerHTML;
			var eq2 = document.getElementById('history-val').innerHTML;
			var eq3= eq2+eq;
			// if(eq){
				// alert(eq2);
				if(eq3){
					document.getElementById('output-val').innerHTML =eval(eq3);
					document.getElementById('history-val').innerHTML='';
				}
			// }else{
				// document.getElementById('output-val').innerHTML = 'Nothing to Calculate ..';
			// }
		}
		function clr(){
			// var cl = document.getElementById('output-val').innerHTML;
			document.getElementById('output-val').innerHTML='';
			document.getElementById('history-val').innerHTML='';
		}
		function clrOutput(){
			document.getElementById('output-val').innerHTML='';
		}
		function backSpace(){
			var bs = document.getElementById('output-val').innerHTML;
			document.getElementById('output-val').innerHTML = bs.substr(0,bs.length-1);
		}


		function root(){
			var rt = document.getElementById('output-val').innerHTML;
			document.getElementById('output-val').innerHTML = Math.sqrt(rt);
			document.getElementById('history-val').innerHTML='<span>&#8730;</span>('+ rt +')';
		}

		function square(){
			var sqr = document.getElementById('output-val').innerHTML;
			document.getElementById('output-val').innerHTML = Math.pow(sqr,2);
			document.getElementById('history-val').innerHTML='sqr('+ sqr +')';
		}

		function ondiv(){
			var onDiv = document.getElementById('output-val').innerHTML;
			if(onDiv != ''){
				document.getElementById('output-val').innerHTML =(1/onDiv);
				document.getElementById('history-val').innerHTML='<sup>1</sup>/('+ onDiv +')';
			}else {
				document.getElementById('history-val').innerHTML = '<sup>1</sup>/('+ 0 +')';
				document.getElementById('output-val').innerHTML = "Cannot devided by zero";
			}
		}

		function tenX(){
			var tenXval = document.getElementById('output-val').innerHTML;
			document.getElementById('output-val').innerHTML = Math.pow(10,tenXval);
		}
		function plusminus(){
			var plusMinus = document.getElementById('output-val').innerHTML;
			document.getElementById('output-val').innerHTML = -plusMinus;
		}

		var mPlus;
		function memoryPlus(){
			mPlus = document.getElementById('output-val').innerHTML;
			if(mPlus){
				document.getElementById('output-val').innerHTML = '';
				document.getElementById('memoryClear').style.color='blue';
				document.getElementById('memoryClear').style.fontWeight ='bold';
			}
		}

		function memoryRead(){
			document.getElementById('output-val').innerHTML = mPlus;
			mPlus='';
			document.getElementById('memoryClear').style.color='#000';
			document.getElementById('memoryClear').style.fontWeight ='normal';
		}
		function memoryClear(){
			mPlus='';
			document.getElementById('memoryClear').style.color='#000';
			document.getElementById('memoryClear').style.fontWeight ='normal';
		}

