$.ajax({
	url:"/blue-mable/Point",
	method:"POST",
	success:function(json) {
		//console.log(json)
		$.each(json, function(i){
			$("#board").append("<tr>");
			$.each(json, function(j){
				let game = "<td class='game' name=p";
				game += json[i][j]+">";
				game += "</td>";
				$("#board").append(game);
			});
			$("#board").append("</tr>");
		});
	}
});

function Player(playerNo) {
	this.playerNo= playerNo; // 플레이어 넘버
	this.location= 1; // 현재 위치
	this.destination= 1; // 이동할 목적지
	this.click= 0; // 클릭 횟수
	this.doubleFlag = 0; // 주사위 더블 검사, 0,1으로 바뀌는 변수
	this.count = 0
	this.money = 3000000;
	this.turn = 50;
}

let player1 = new Player(1); 
let player2 = new Player(2);
let player3 = new Player(3);
let player4 = new Player(4);
// player 객체 배열
players = [player1, player2, player3, player4]; 
let playerNum = 0; // players의 인덱스, 0~3까지 순서대로 바뀌는 변수
let currentPlayer = players[0]; // 현재 플레이어

$(document).ready(function(){
	$(".game").each(function(index, item){
		//console.log("?",$(this).attr("id"))
		if(index>0 && index<10){
			$(this).addClass("top board");
			$(this).append("<div class='player upp' id=''></div><div class='build ubp'></div>");
			
			$(this).children(".player").attr("id",$(this).attr("name"))
			$(this).children(".build").attr("id","b"+$(this).attr("name"))
			//console.log("id",$(this).children(".player").attr("id"))
			
		}
		else if(index == 0 || index == 10 || index == 110 || index == 120){
			$(this).addClass("coner board");
			$(this).append("<div class='inner'></div>")
			$(this).children().attr("id",$(this).attr("name"))
			//$(this).attr("id",$(this).attr("name"))
		} 
		else if(index%11 == 0){
			$(this).addClass("lside board");
			$(this).append("<div class='player spp' id=''></div><div class='build sbp' id=''></div>");
			
			$(this).children(".player").attr("id",$(this).attr("name"))
			$(this).children(".build").attr("id","b"+$(this).attr("name"))
			//console.log("id",$(this).children(".player").attr("id"))
			
		}
		else if(index%11 == 10){
			$(this).addClass("rside board");
			$(this).append("<div class='build sbp' id=''></div><div class='player spp' id=''></div>");
			
			$(this).children(".player").attr("id",$(this).attr("name"))
			$(this).children(".build").attr("id","b"+$(this).attr("name"))
			//console.log("id",$(this).children(".player").attr("id"))
			
		}
		else if(index>110 && index<120){
			$(this).addClass("down board");
			$(this).append("<div class='build ubp' id=''></div><div class='player upp' id=''></div>");
			
			$(this).children(".player").attr("id",$(this).attr("name"))
			$(this).children(".build").attr("id","b"+$(this).attr("name"))
			//console.log("id",$(this).children(".player").attr("id"))
			
		}
		else {
			$(this).addClass("center");
		}	
	});
	
	$(players).each(function(index,item){
		//console.log(item);
		let sidePlayer = "<div class='player"+item.playerNo+"'>player"+item.playerNo;
		sidePlayer += "<input type='text' class='player' id=player"+item.playerNo+" readonly='readonly'>";
		sidePlayer += "<table class='info'> <tr> <td colspan='4'>";
		sidePlayer += "도착지 :<span id='now"+item.playerNo+"'></span><br>";
		sidePlayer += "땅주인 :<span id='owner"+item.playerNo+"'></span><br>";
		sidePlayer += "통행료 :<span id='cost"+item.playerNo+"'></span><br>";
		sidePlayer += "</td> </tr> <tr>";
		sidePlayer += "<td> <button type='button' class='buy' id='land"+item.playerNo+"'>땅</button></td> " ;
		sidePlayer += "<td> <button type='button' class='buy' id='villa"+item.playerNo+"'>별장</button></td>" ;
		sidePlayer += "<td> <button type='button' class='buy' id='building"+item.playerNo+"'>빌딩</button></td> " ;
		sidePlayer += "<td> <button type='button' class='buy' id='hotel"+item.playerNo+"'>호텔</button></td> " ;
		sidePlayer += "</tr> </table> </div>";
		$("#player").append(sidePlayer);
	});
});