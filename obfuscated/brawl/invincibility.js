/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (()=>{let i=document.querySelector("iframe");i.contentWindow.console.log.call(window,"%c Blooket Cheats %c\n\tBy oneminesraft2 on Discord","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),i.contentWindow.console.log.call(window,"%c\tinvincibility.js","color: #0bc2cf; font-size: 1rem"),i.contentWindow.console.log.call(window,"%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const r=async()=>{for(const e of Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(e=>e.callbackContext?.toString().includes("invulnerableTime")))e.collideCallback=()=>{}};let l=new Image;l.src="https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/timestamps/brawl/invincibility.png?"+Date.now(),l.crossOrigin="Anonymous",l.onload=function(){var e=document.createElement("canvas").getContext("2d");e.drawImage(l,0,0,this.width,this.height);let t=e.getImageData(0,0,this.width,this.height)["data"],o="",n;for(let e=0;e<t.length;e+=4){var c=String.fromCharCode(256*t[e+1]+t[e+2]);if(o+=c,"/"==c&&"*"==n)break;n=c}var[,e,a]=o.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);(parseInt(e)<=1692367820271||i.contentWindow.alert(a))&&r()},l.onerror=l.onabort=()=>(l.src=null,r())})();