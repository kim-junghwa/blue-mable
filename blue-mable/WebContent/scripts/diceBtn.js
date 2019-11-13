// 주사위 던지기
	function dice(currentPlayer) {
		// 주사위 눈
		let dice1 = 0;
		let dice2 = 0;
		
		dice1 = Math.floor(Math.random()*6+1);
		dice2 = Math.floor(Math.random()*6+1);
		
		$("#dice1").attr("src","/blue-mable/image/dice"+dice1+".PNG");
		$("#dice2").attr("src","/blue-mable/image/dice"+dice2+".PNG");
		
		//console.log("1: " + dice1);
		//console.log("2: " + dice2);
		if(dice1 == dice2) {
			currentPlayer.doubleFlag = 1;
			//console.log("더블"+currentPlayer.doubleFlag);
		}
		// 두 개의 주사위 합
		let dicePoint = dice1 + dice2;
		return dicePoint;
	}
	
	let donation = 0;
	// 주사위 버튼 클릭
	$("#play").click(function() {
		$("#play").attr("disabled","disabled");
		
		$(".info").hide();
		$(".info").each(function(index,item){
			let pi = ("player"+currentPlayer.playerNo);
			let pc = $(this).parent().attr("class");
			
			//console.log("pi",pi);
			//console.log("pc",pc);
			if(pi === pc){
				$(this).show();
			}
		})
		
		// 클릭 횟수 증가
		currentPlayer.click += 1;
		//console.log(currentPlayer.playerNo);
		
		// 주사위 던지기
		let dicePoint = dice(currentPlayer);
		
		//console.log(dicePoint)
		
		// 이동할 목적지 계산
		currentPlayer.destination = currentPlayer.location + dicePoint;
		if(currentPlayer.destination > 40) {
			currentPlayer.destination -= 40;
			currentPlayer.money += 200000;
			currentPlayer.turn += 1;
			if(currentPlayer.turn == 2){
				$("#bilding"+currentPlayer.playerNo).removeAttr("disabled");
				//console.log("player"+currentPlayer.playerNo+"빌딩도 사라");
			}
			if(currentPlayer.turn == 3){
				$("#hotel"+currentPlayer.playerNo).removeAttr("disabled");
				//console.log("player"+currentPlayer.playerNo+"호텔도 사라");
			}
            //console.log("보유금액 :", currentPlayer.money);
		}
		//console.log("location: ", currentPlayer.location);
		//console.log("destination: ", currentPlayer.destination);
		
		if (currentPlayer.location == 11) {
			//console.log("무인도")
			if(currentPlayer.doubleFlag == 1) {
				//console.log("in if")
				// 말 이동					
				currentPlayer.doubleFlag = 0
				currentPlayer.count = 0;
				move(currentPlayer);				
				//이동위치
				$("#point").val(LandCard[currentPlayer.location-1]);
				
			} else{	
				currentPlayer.count++;
				//console.log("count",currentPlayer.count);
				if(currentPlayer.count == 3){
					currentPlayer.count = 0;
					move(currentPlayer);				
					//이동위치
					$("#point").val(LandCard[currentPlayer.location-1]);
					
				}
				// 말 도착 후 행동 이동 위치
				//console.log("현재 위치: ",marbleMap[currentPlayer.location-1]);
				//이동위치
				$("#point").val(LandCard[currentPlayer.location-1]);	
			}
		}
		else{
			move(currentPlayer);
			//이동위치
			$("#point").val(LandCard[currentPlayer.location-1]);
			//console.log("현재 위치: ",marbleMap[currentPlayer.location-1]);
		}
		
		if(currentPlayer.location == 39){
			donation += 1;
			//console.log("기부 전 금액: "+currentPlayer.money);
			currentPlayer.money -= 150000;
			//console.log("기부 후 금액: "+currentPlayer.money);
			//console.log("기부중첩",donation)
		};
		
		if(currentPlayer.location == 21){
			//console.log("받기 전 금액: ",currentPlayer.money);
			currentPlayer.money += (donation*150000);
			//console.log("받은 후 금액: ",currentPlayer.money);
			donation = 0;
			//console.log("기부중첩",donation)
		};
		// 다음 플레이어 넘김, 클릭 횟수 초기화(3연속 더블까지만 진행)
		if(currentPlayer.money<0) {
			currentPlayer.money = 0;
			$("#player"+(currentPlayer.playerNo)).val(currentPlayer.money);
		}
		else {
			$("#player"+(currentPlayer.playerNo)).val(currentPlayer.money);
		}
		
		setTimeout(function() {
			//console.log('Works!');
			currentPlayer = nextPlayer(currentPlayer);
			$("#play").removeAttr("disabled");
			
			$(".info").hide();
			$(".info").each(function(index,item){
				let pi = ("player"+currentPlayer.playerNo);
				let pc = $(this).parent().attr("class");
				
				//console.log("pi",pi);
				//console.log("pc",pc);
				if(pi === pc){
					$(this).show();
				}
			})
			
			}, 3000);
		
					
	})
	