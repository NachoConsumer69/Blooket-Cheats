/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let s=document.querySelector("iframe");s.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),s.contentWindow.console.log.call(window,"%c\tmaxStats.js","color: #0bc2cf; font-size: 1rem"),s.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const c=async()=>{Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({materials:100,people:100,happiness:100,gold:100})};let i=new Image;i.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/timestamps/kingdom/maxStats.png?"+Date.now(),i.crossOrigin="Anonymous",i.onload=function(){var t=document.createElement("canvas").getContext("2d");t.drawImage(i,0,0,this.width,this.height);let e=t.getImageData(0,0,this.width,this.height)["data"],o="",n;for(let t=0;t<e.length;t+=4){var a=String.fromCharCode(256*e[t+1]+e[t+2]);if(o+=a,"/"==a&&"*"==n)break;n=a}var[,t,r]=o.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(t)<=1692367827210||s.contentWindow.alert(r))&&c()},i.onerror=i.onabort=()=>(i.src=null,c())})();