/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let s=document.querySelector("iframe");s.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),s.contentWindow.console.log.call(window,"%c\tsetGuests.js","color: #0bc2cf; font-size: 1rem"),s.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const c=async()=>{var e=document.createElement("iframe"),e=(document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove(),Number(parseInt(prompt("How many guests do you want?"))));Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.setState({guestScore:e})};let i=new Image;i.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/timestamps/kingdom/setGuests.png?"+Date.now(),i.crossOrigin="Anonymous",i.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(i,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",n;for(let e=0;e<t.length;e+=4){var r=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=r,"/"==r&&"*"==n)break;n=r}var[,e,a]=o.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(e)<=1692367827228||s.contentWindow.alert(a))&&c()},i.onerror=i.onabort=()=>(i.src=null,c())})();