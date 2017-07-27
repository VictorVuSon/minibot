let me = {};
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
	<img src = 'images/serene.png' class="serene-button" />
`;
	$('#serene-main').append(frame);
	$('#serene-scrollbar').animate({scrollTop: $('#serene-scrollbar').prop("scrollHeight")}, 500);
}

function formatAMPM(date) {
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	return hours + ':' + minutes + ' ' + ampm;
}

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time = 0) {
	let control = "";
	let date = formatAMPM(new Date());
	if (who === "me") {
		control = `<li style="width:100%">
			<div class="msj macro">
			<div class="avatar"><img class="img-circle" style="width:100%;" src="${me.avatar}" /></div>
			<div class="text text-l">
			<p>${text}</p>
			<p><small>${date}</small></p>
			</div>
			</div>
			</li>`;
	} else {
		control = `<li style="width:100%;">
			<div class="msj-rta macro">
			<div class="text text-r">
			<p>${text}</p>
			<p><small>${date}</small></p>
			</div>
			<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src=" ${you.avatar}" /></div>
			</li>`;
	}
	setTimeout(
		function () {
			$("ul").append(control);
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
function letChat (isExisted) {
	if (!isExisted) {
		insertChat("me", "Hello I'm Serene, may I help you!", 0);
		insertChat("you", "Hi, I want to buy travel insurance.", 1500);
		insertChat("me", "What kind of trip do you want?", 3500);
		insertChat("you", "Individual", 7000);
		insertChat("me", "How many children will be with you on this trip?", 9500);
		insertChat("you", "2", 12000);
	} else {

	}

}