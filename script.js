let data = [];
async function getData() {
  let x = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=4f549b21f7584ad8bf8121504222605&q=cairo&aqi=no`
  );

  let r = await x.json();

  data.push(r);

  let container = ``;

  for (let i = 0; i < data.length; i++) {
    container += `
    <div class="numbers">${data[0].current.temp_c}</div>
    <div class="weatherp"><img src="https:${data[0].current.condition.icon}" alt=""></div>
    <div class="day">${data[0].location.localtime}</div>
    <div class="city">${data[0].location.region}</div>
    `;
  }

  document.getElementById("weather").innerHTML = container;
}

(async function () {
  await getData();
})();

let users = [];
async function getDataPosts() {
  let x = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let r = await x.json();
  let a = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let b = await a.json();
  let c = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  let d = await c.json();

  users.push(b, r, d);

  let container = ``;

  for (let i = 0; i < users.length; i++) {
    container += `
    <div class="test-post" id="tests">
    <div class="person-post">
        <div class="img">
       <img width="40px" height="40px" src="imgs/bobby.jpg" alt="bobby-user">
   </div>
       <p class="his-name-post">
          ${users[1][i].name}
       </p>
       
       <div class="icon">
          
          <span class="hide">
           Hide All Posts
          </span> 
           
           <i class="fas fa-ellipsis-v press"></i>
           
           
       </div>
    </div>
    <div class="pargraph">
        ${users[0][i].body}
    </p>
    </div>
        <div class="img-parg">
        <img src=" ${users[2][i].url}" width="100%" alt="photo">   
        </div>
        <div class="comeents-likes">
            <div class="comments"><i class="fas fa-comment"></i> <span>comments</span></div>
            <div class="comments"><i class="fas fa-heart"></i> <span>likes</span></div>
        </div>
        <div class="like-it">
           <i class="fas fa-thumbs-up like-me" id="like-me"></i>
        </div>
</div>
    `;
  }

  document.getElementById("test").innerHTML = container;
}

(async function () {
  await getDataPosts();
  $(".press").click(() => {
    $(".hide").toggle(500);
  });

  $(".hide").click(() => {
    $(".test-post").hide(1000);
  });

  $(".like-it").click(() => {
    $("#like-me").css("color", "green");
  });
})();

let x = Array.from(document.querySelectorAll("#book"));

x.forEach((y) => {
  y.addEventListener("click", (e) => {
    let u = e.target;
    let i = u.previousElementSibling.innerHTML;

    $(e.target).removeClass(" fa-bookmark");
    $(e.target).addClass("fa-check-circle");
    document.getElementById(
      "subscridt"
    ).innerText = `your subscribe to ${i} has been done`;
    $("#subscribed").show(500);
    setTimeout(() => {
      $("#subscribed").hide(2000);
    }, 4000);
  });
});

$(".heart").click(() => {
  $(".friend-request").toggle(400);
  $(".notification-list").hide(600);
});

$(".add").click((e) => {
  $(e.target).prevUntil(".firstFriend").hide(1000);
  $(e.target).hide(1000);
  $(e.target).next().hide(1000);
  document.getElementById("showthis").innerText = `you are friends now`;
  $(".add-dismiss").show(500);
  setTimeout(() => {
    $(".add-dismiss").hide(2000);
  }, 4000);
});

$(".remove").click((e) => {
  $(e.target).prevUntil(".firstFriend").hide(1000);
  $(e.target).hide(1000);
});

$(".notifys").click(() => {
  $(".notification-list").toggle(600);
  $(".friend-request").hide(400);
});

$("#exit").click(() => {
  $(".chat").hide(500);
});
$(".comment").click(() => {
  $(".chat").show(500);
});

let p = Array.from(document.querySelectorAll(".Imgschat"));
p.forEach((e) => {
  e.addEventListener("click", (s) => {
    let l = s.target.getAttribute("src");
    let f = s.target.getAttribute("id");
    let greeting = document.getElementById("greeting");
    let name = document.getElementById("name-of");
    let t = document.getElementById("availImg");
    t.setAttribute("src", l);
    name.innerHTML = f;
    greeting.innerHTML = f;
    $("#p-style").remove("#p-style");
  });
});

let send = document.getElementById("add");
let message = document.getElementById("message-reply");
let seeMessage = document.getElementById("reply");

send.addEventListener("click", function hello() {
  let container = `<span id="p-style">${message.value}</span>`;
  seeMessage.innerHTML += container;
  message.value = "";
});

function hi() {
  let container = `<span id="p-style">${message.value}</span>`;
  seeMessage.innerHTML += container;
  message.value = "";
}

document.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    hi();
  }
});

$(".see").click(() => {
  $(".feels").toggle(500);
});

let k = Array.from(document.querySelectorAll(".emojis"));

k.forEach((e) => {
  e.addEventListener("click", (s) => {
    let f = s.target;
    console.log(f);
    document.getElementById("how-feels").innerText = `feels:${f.innerText}`;
    $(".feels").hide(500);
  });
});
window.addEventListener("load", () => {
  $(".loading").fadeOut(2500);
});
