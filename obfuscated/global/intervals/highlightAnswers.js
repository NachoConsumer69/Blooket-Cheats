/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let a=document.querySelector("iframe");a.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),a.contentWindow.console.log.call(window,"%c\thighlightAnswers.js","color: #0bc2cf; font-size: 1rem"),a.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const c=async()=>{setInterval(()=>{const{state:o,props:n}=Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner["stateNode"];[...document.querySelectorAll('[class*="answerContainer"]')].forEach((e,t)=>{(o.question||n.client.question).correctAnswers.includes((o.question||n.client.question).answers[t])?e.style.backgroundColor="rgb(0, 207, 119)":e.style.backgroundColor="rgb(189, 15, 38)"})})};let l=new Image;l.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/timestamps/global/intervals/highlightAnswers.png?"+Date.now(),l.crossOrigin="Anonymous",l.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(l,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",n;for(let e=0;e<t.length;e+=4){var r=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=r,"/"==r&&"*"==n)break;n=r}var[,e,s]=o.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(e)<=1692367824309||a.contentWindow.alert(s))&&c()},l.onerror=l.onabort=()=>(l.src=null,c())})();