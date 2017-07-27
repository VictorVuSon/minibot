let me = {};
let quickReplyMessage = `
    <h4>How may I help you today?</h4>
    <div class="clear"></div>
    <span><a href="">I want to buy Insurance</a></span>
    <span><a href="">Edit profile</a></span>
    <span><a href="">FAQ</a></span>

`;
let buttonMessage = `
    <span>Family</span>
    <span>Individual</span>
`;
me.avatar = "https://rawgit.com/VictorVuSon/minibot/master/images/serene.png";

let you = {};
you.avatar = "https://rawgit.com/VictorVuSon/minibot/master/images/keith.png";

init();

$('.serene-box').hide();
$('.serene-button').click(function () {
	displayElement($('.serene-box').is(":visible"));
});

function displayElement(isHidden) {
	if (isHidden) {
		$('.serene-box').hide(1000);
	} else {
		$('.serene-box').show(1000);
		let isExisted = $("#serene-scrollbar li").length === 0 ? false : true;
		letChat(isExisted);
	}
}
function init() {
	$("<link/>", {
		rel: "stylesheet",
		type: "text/css",
		href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
	}).appendTo("head");
	$("<link/>", {
		rel: "stylesheet",
		type: "text/css",
		href: "https://rawgit.com/VictorVuSon/minibot/master/css/style.css"
	}).appendTo("head");
	let frame = `
    <div class="serene-box">
        <div class="col-sm-12 frame">
            <ul id="serene-scrollbar"></ul>
            <div>
                <div class="msj-rta macro" style="margin:auto">
                    <div class="text text-r">
                        <input class="mytext" placeholder="Type a message"/>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class = 'clear'></div>
	<img src = 'https://rawgit.com/VictorVuSon/minibot/master/images/serene.png' class="serene-button" />
`;
	$('#serene-main').append(frame);
}

//-- No use time. It is a javaScript effect.
function insertChat(who, type, text, time = 0) {
	let control = "";
	switch (type) {
		case 0:
			if (who === "me") {
				control = `<li>
			<div class="msj macro">
			<div class="avatar"><img class="img-circle" style="width:50px;" src="${me.avatar}" /></div>
			<div class="text text-r">
			<p>${text}</p>
			</div>
			</div>
			</li>`;
			} else {
				control = `<li style="width:100%;">
			<div class="msj-rta macro">
			<div class="text text-l">
			<p>${text}</p>
			</div>
			<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:50px;" src=" ${you.avatar}" /></div>
			</li>`;
			}
			break;
		case 1:
			control = `<li>
			<div class="msj macro">
			<div class="avatar"><img class="img-circle" style="width:50px;" src="${me.avatar}" /></div>
			<div class="quickReply">
			${quickReplyMessage}
			</div>
			</div>
			</li>`;
			break;
		case 2:
			control = `<li>
			<div class="msj macro">
			<div class="avatar"><img class="img-circle" style="width:50px;" src="${me.avatar}" /></div>
			<div class="button-message">
			<p>${text}</p>
			${buttonMessage}
			</div>
			</div>
			</li>`;
			break;
		case 3:
			control = `<li style="width:100%;">
			<div class="msj-rta macro">
			<div class="text text-l">
			<img style="width: 215px" src="https://rawgit.com/VictorVuSon/minibot/master/images/calendar.png" />
			<div class="text text-l">
			<p style="color: #727db7;text-align: center;margin-top: 10px;">${text}</p>
			</div>
			</div>
			<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:50px;" src=" ${you.avatar}" /></div>
			</li>`;
			break;
	}
	setTimeout(
		function () {
			$("ul").append(control);
			let elem = document.getElementById('serene-scrollbar');
			elem.scrollTop = elem.scrollHeight;
		}, time);
}

function resetChat() {
	$("ul").empty();
}

$(".mytext").on("keyup", function (e) {
	if (e.which === 13) {
		let text = $(this).val();
		if (text !== "") {
			insertChat("me", text);
			$(this).val('');
		}
	}
});

//-- Clear Chat
resetChat();

//-- Print Messages
function letChat(isExisted) {
		resetChat();
		insertChat("me", 0, "Hello I'm Serene, your personal assistant.", 1000);
		insertChat("me", 0, `You can ask me a question regarding insurance, such as: "Does the Insurance cover dental expense?". I will be glad to answer you . Ok, let's start!`, 1000);
		insertChat("me", 1, "", 1000);
		insertChat("you", 0, "Hi, I want to buy travel insurance.", 3000);
		insertChat("me", 2, "Ok, you can choose an Individual or Family plan", 4500);
		insertChat("you", 0, "Individual", 5500);
		insertChat("me", 0, "How many travellers are travelling?", 7000);
		insertChat("you", 0, "2", 8000);
		insertChat("me", 0, "Which country or city are you travelling to", 9500);
		insertChat("you", 0, "Singapore", 11000);
		insertChat("me", 0, "When will you leave?", 13000);
		insertChat("you", 3, "06-20-2014", 15000);
		insertChat("me", 0, "When will you back?", 16000);
		insertChat("you", 3, "06-20-2014", 18000);
		insertChat("me", 0, `Alright, you wil travel to <a href="">Singapore</a> from <a href=''>06-20-2014</a> to <a href=''>06-20-2014</a>.`, 20000);
}