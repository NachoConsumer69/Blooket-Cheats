/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let d=document.querySelector("iframe");d.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),d.contentWindow.console.log.call(window,"%c\tgetDailyRewards.js","color: #0bc2cf; font-size: 1rem"),d.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const r=async()=>{var e=document.createElement("iframe");if(document.body.append(e),window.alert=e.contentWindow.alert.bind(window),e.remove(),location.href.includes("play.blooket.com")){const o=Object.values(webpackJsonp.push([[],{"":(e,a,t)=>{a.cache=t.c}},[[""]]]).cache),n=o.find(e=>e.exports?.a?.get).exports.a;n.post("https://play.blooket.com/api/playersessions/solo",{gameMode:"Factory",questionSetId:["60101da869e8c70013913b59","625db660c6842334835cb4c6","60268f8861bd520016eae038","611e6c804abdf900668699e3","60ba5ff6077eb600221b7145","642467af9b704783215c1f1b","605bd360e35779001bf57c5e","6234cc7add097ff1c9cff3bd","600b1491d42a140004d5215a","5db75fa3f1fa190017b61c0c","5fac96fe2ca0da00042b018f","600b14d8d42a140004d52165","5f88953cdb209e00046522c7","600b153ad42a140004d52172","5fe260e72a505b00040e2a11","5fe3d085a529560004cd3076","5f5fc017aee59500041a1456","608b0a5863c4f2001eed43f4","5fad491512c8620004918ace","5fc91a9b4ea2e200046bd49a","5c5d06a7deebc70017245da7","5ff767051b68750004a6fd21","5fdcacc85d465a0004b021b9","5fb7eea20bd44300045ba495"][Math.floor(24*Math.random())]}).then(async({data:{t:e}})=>{await n.post("https://play.blooket.com/api/playersessions/landings",{t:e});var{name:a,blook:{name:t}}=await o.find(e=>e.exports.a?.me).exports.a.me({}).catch(()=>alert("There was an error getting user data."));await n.put("https://play.blooket.com/api/users/factorystats",{blookUsed:t,t:e,name:a,cash:Math.floor(9e7*Math.random())+1e7,correctAnswers:Math.floor(500*Math.random())+500,upgrades:Math.floor(300*Math.random())+300,mode:"Time-Solo",nameUsed:"You",place:1,playersDefeated:0}).then(console.log),n.put("https://play.blooket.com/api/users/add-rewards",{t:e,name:a,addedTokens:500,addedXp:300}).then(({data:{dailyReward:e}})=>alert(`Added max tokens and xp, and got ${e} daily wheel tokens!`)).catch(()=>alert("There was an error when adding rewards."))})}else alert("This cheat only works on play.blooket.com, opening a new tab."),window.open("https://play.blooket.com/")};let s=new Image;s.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/timestamps/global/getDailyRewards.png?"+Date.now(),s.crossOrigin="Anonymous",s.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(s,0,0,this.width,this.height);let a=e.getImageData(0,0,this.width,this.height)["data"],t="",o;for(let e=0;e<a.length;e+=4){var n=String.fromCharCode(256*a[e+1]+a[e+2]);if(t+=n,"/"==n&&"*"==o)break;o=n}var[,e,c]=t.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(e)<=1692367823714||d.contentWindow.alert(c))&&r()},s.onerror=s.onabort=()=>(s.src=null,r())})();