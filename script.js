(function(){
"use strict";
var $=function(s){return document.querySelector(s)};
/* Balloon messages: index 0-3 = balloon 1-4 (left to right) */
var MSG=[
{t:"I’m sorry, Muskaan ❤️",b:[
["p","I’m sorry for hurting you. You never deserved to feel that way, and I hate that I was the reason. Your smile is my favourite thing in the world, and I never want to be the one who takes it away."],
["h","I’m truly sorry, Muskuuu ❤️"],
["p","I’m sorry for repeating the same things again and again and making you frustrated. I know you’re not a robot, and you shouldn’t have to listen to the same thing so many times. Sometimes I get carried away because I want to express myself, but I understand that it can be exhausting for you. I’m truly sorry, my princess. 🥺💗"],
["p","I never want my habits to become the reason you’re upset. I want to see you happy, smiling and feeling loved. I’m sorry for the times I haven’t understood how you feel. You mean so much to me, Muskaan, and I’m genuinely willing to work on myself for us. ❤️"]]},
{t:"I should have listened",b:[
["p","I’m sorry for the times I didn’t listen the way I should have. You matter more than my pride or my ego, Muskaan. From now on, I’m all ears and all heart."],
["h","Your feelings matter to me ❤️"],
["p","Muskaan, I want to see you happy, peaceful and smiling. I never want my words or my habits to become the reason for your anger or sadness. I want to understand you better, listen to you properly and respect what you feel. Your feelings matter to me, my princess. ❤️"],
["h","My Rani, My Princess, My Queen ❤️💗"],
["p","Muskaan, you are my princess, my queen and my favourite person. Your happiness means so much to me. I want to listen to you, respect your wishes and make you feel loved. I don’t want to argue just to prove my point. I want us to understand each other, even when we disagree. 💗"],
["p","I am very grateful and blessed to have Muskaan in my life. 🪬😭💞"],
["p","I’m grateful and blessed to have Muskaan in my life. 🪬😭💞"]]},
{t:"I hate the silence 💗",b:[
["h","Still youhh, only youhh, always youhh 🙈💗♾️"],
["p","Muskaan, I don’t want anyone else. I want only you, you, you and you. There is no other option. It’s just YOU, Muskaan! 🙈😭💋"],
["p","My Muskaan is enough for me. There is one person I want beside me, one person I want to make happy, and one person I want to keep choosing every day. It’s only Muskaan, Muskaan, Muskaan, Muskaan. I want only my Muskaan. ❤️🥹"],
["p","Muskaan, please don’t think that we can’t work things out when we have problems. I genuinely want a future with you. I want us to understand each other, work through our problems and stay by each other’s side. 💗"],
["p","There’s one person I will never remove from my heart. It’s you, Muskaan. Still youhh, only youhh, always youhh. 🙈💖♾️"]]},
{t:"I promise to do better ❤️",b:[
["p","I promise to be kinder, more patient and more understanding. You are my peace, my home and my favourite person. Please forgive me, Muskaan?"],
["p","— Muskaan ❤️"],
["p","Muskuuu, your happiness means so much to me. I want you to feel heard, respected and loved. I’ll work on controlling my habit of repeating things, listen to you properly and try to handle disagreements calmly. I can’t promise I’ll never make a mistake, but I promise to make a genuine effort to improve. ❤️"],
["p","No matter where life takes us, my heart will always choose you. Today, tomorrow, and every day after that. 🙈💞♾️"],
["p","Muskaan, I will never change my feelings for you, and I will always love you forever. 🙈😭💞"],
["p","I want to marry you and build a beautiful future with you. I want to listen to what you say, respect your wishes and make you happy. I don’t want to win against you; I want us to understand each other and grow together. 💍"],
["p","Muskaan, still youhh, only youhh, always youhh. 🙈💗♾️"],
["p","I love you endlessly, Muskuuu. 🙈😭💋💗"],
["p","— Only yours, with love ❤️"]]}
];
function show(id){document.querySelectorAll(".screen").forEach(function(s){s.classList.remove("on")});$("#"+id).classList.add("on")}
document.querySelectorAll("[data-go]").forEach(function(b){b.onclick=function(){show(b.dataset.go)}});
function burst(x,y,set){for(var i=0;i<14;i++){var e=document.createElement("span");e.className="fx";e.textContent=set[i%set.length];e.style.left=x+"px";e.style.top=y+"px";var a=Math.random()*6.28,d=40+Math.random()*80;e.style.setProperty("--x",Math.cos(a)*d+"px");e.style.setProperty("--y",Math.sin(a)*d-30+"px");document.body.appendChild(e);setTimeout(function(el){el.remove()}.bind(null,e),1200)}}

/* Background music: music_trimmed.mp3 starts from 0:00 on every page open, loops until the page closes.
   Browsers may block sound before a first touch/click; if so it starts on the very first interaction, from the beginning. */
var au=$("#bgm")||new Audio("music_trimmed.mp3");
au.loop=true;au.volume=.8;au.preload="auto";au.setAttribute("playsinline","");au.setAttribute("webkit-playsinline","");
var on=false,evs=["pointerdown","pointerup","touchstart","touchend","mousedown","click","keydown"];
function arm(){evs.forEach(function(e){document.addEventListener(e,kick,{capture:true,passive:true})})}
function disarm(){evs.forEach(function(e){document.removeEventListener(e,kick,{capture:true})})}
function ok(){on=true;disarm()}
function go(){if(on&&!au.paused)return;var r;try{r=au.play()}catch(e){}if(r&&r.then){r.then(ok).catch(function(){})}else if(!au.paused){ok()}}
function kick(){go()}
function fresh(){on=false;try{au.currentTime=0}catch(e){}arm();go()}
fresh();
["loadedmetadata","canplay","canplaythrough"].forEach(function(e){au.addEventListener(e,function(){if(!on)go()})});
au.addEventListener("playing",ok);
window.addEventListener("load",function(){if(!on)go()});
window.addEventListener("focus",function(){if(!on)go()});
document.addEventListener("visibilitychange",function(){if(!document.hidden&&au.paused){go()}});
window.addEventListener("pageshow",function(e){if(e.persisted)fresh()});
window.addEventListener("pagehide",function(){au.pause()});
/* Meter */
var p=0;
var LV=[[0,"😤","Still angry..."],[10,"😤","Hmm... maybe a tiny bit softer"],[30,"🙂","Thinking about it..."],[50,"🙂","Thinking about it..."],[70,"🥺","Almost there... I can feel it!"],[100,"🥰","FORGIVEN!! I love you 💗"]];
function meter(){$("#pct").textContent=p+"%";$("#arc").setAttribute("stroke-dasharray",p+" 100");$("#arc").style.opacity=p?1:0;$("#needle").style.transform="rotate("+(p*1.8-90)+"deg)";
var l=LV[0];LV.forEach(function(v){if(p>=v[0])l=v});$("#emo").textContent=l[1];$("#cap").textContent=l[2];$("#cont").disabled=p<100;if(p>=100){$("#tap").disabled=true;var r=$("#gauge").getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,["💗","✨","🥰","💖"])}}
$("#tap").onclick=function(e){p=Math.min(100,p+10);meter();if(p<100)burst(e.clientX,e.clientY,["💗","💖"])};
$("#cont").onclick=function(){show("s-made")};
meter();
/* Balloons */
var popped=0,cur=-1;
document.querySelectorAll(".bal").forEach(function(b){b.onclick=function(e){var r=b.getBoundingClientRect();b.classList.add("pop");burst(r.left+r.width/2,r.top+r.height/2,["💗","🎈","✨","💖"]);cur=+b.dataset.i;popped++;
setTimeout(function(){var m=MSG[cur];$("#mnum").textContent="SORRY #"+(cur+1)+" OF 4";$("#mtitle").textContent=m.t;var mb=$("#mbody");mb.innerHTML="";mb.scrollTop=0;m.b.forEach(function(x){var e=document.createElement(x[0]==="h"?"h3":"p");e.textContent=x[1];mb.appendChild(e)});$("#okay").textContent=popped===4?"I forgive you 💖":"Okay 💗";$("#modal").classList.add("on")},250)}});
$("#okay").onclick=function(){$("#modal").classList.remove("on");$("#count").textContent=popped+(popped===4?" / 4 popped"  :" / 4 popped");$("#fill").style.width=popped*25+"%";
if(popped===4){$("#count").textContent="All 4 popped! 💗";$("#bals").style.visibility="hidden";$("#toCert").disabled=false;burst(innerWidth/2,innerHeight/2,["💗","💖","🎈","✨"]);setTimeout(function(){show("s-cert")},1400)}};
$("#toCert").onclick=function(){show("s-cert")};
})();
