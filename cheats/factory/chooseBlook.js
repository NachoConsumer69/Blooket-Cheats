/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) Aerell McKnight 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(() => {
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        window.prompt = i.contentWindow.prompt.bind(window);
        i.remove();
        const blooks = [{ name: "Chick", color: "#ffcd05", class: "\uD83C\uDF3D", rarity: "Common", cash: [3, 7, 65, 400, 2500], time: [1, 1, 1, 1, 1], price: [300, 3e3, 3e4, 2e5] }, { name: "Chicken", color: "#ed1c24", class: "\uD83C\uDF3D", rarity: "Common", cash: [10, 40, 200, 1400, 1e4], time: [5, 4, 3, 2, 1], price: [570, 4e3, 5e4, 8e5] }, { name: "Cow", color: "#58595b", class: "\uD83C\uDF3D", rarity: "Common", cash: [25, 75, 1500, 25e3, 25e4], time: [15, 10, 10, 10, 5], price: [500, 9500, 16e4, 4e6] }, { name: "Duck", color: "#4ab96d", class: "\uD83C\uDF3D", rarity: "Common", cash: [4, 24, 200, 3e3, 4e4], time: [3, 3, 3, 3, 3], price: [450, 4200, 7e4, 11e5] }, { name: "Goat", color: "#c59a74", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 28, 200, 1300, 12e3], time: [3, 3, 2, 2, 2], price: [500, 6400, 45e3, 5e5] }, { name: "Horse", color: "#995b3c", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 20, 270, 1800, 15e3], time: [2, 2, 2, 2, 2], price: [550, 8200, 65e3, 6e5] }, { name: "Pig", color: "#f6a9cb", class: "\uD83C\uDF3D", rarity: "Common", cash: [20, 50, 1300, 8e3, 8e4], time: [7, 7, 7, 7, 5], price: [400, 11e3, 8e4, 13e5] }, { name: "Sheep", color: "#414042", class: "\uD83C\uDF3D", rarity: "Common", cash: [6, 25, 250, 1500, 11e3], time: [3, 3, 3, 2, 2], price: [500, 5e3, 5e4, 43e4] }, { name: "Cat", color: "#f49849", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 18, 170, 1700, 13e3], time: [2, 2, 2, 2, 2], price: [480, 5500, 6e4, 5e5] }, { name: "Dog", color: "#995b3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [7, 25, 220, 1900, 9e3], time: [3, 3, 2, 2, 1], price: [460, 6600, 7e4, 73e4] }, { name: "Goldfish", color: "#f18221", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 40, 350, 3500, 35e3], time: [3, 3, 3, 3, 3], price: [750, 7200, 84e3, 95e4] }, { name: "Rabbit", color: "#e7bf9a", class: "\uD83D\uDC3E", rarity: "Common", cash: [3, 18, 185, 800, 7e3], time: [2, 2, 2, 1, 1], price: [500, 5800, 56e3, 55e4] }, { name: "Hamster", color: "#ce9176", class: "\uD83D\uDC3E", rarity: "Common", cash: [10, 45, 450, 4500, 45e3], time: [4, 4, 4, 4, 4], price: [650, 6500, 8e4, 93e4] }, { name: "Turtle", color: "#619a3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [23, 120, 1400, 15e3, 17e4], time: [10, 10, 10, 10, 10], price: [700, 8500, 11e4, 13e5] }, { name: "Puppy", color: "#414042", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 10, 75, 500, 3e3], time: [1, 1, 1, 1, 1], price: [450, 4e3, 35e3, 25e4] }, { name: "Kitten", color: "#58595b", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 8, 60, 400, 2e3], time: [1, 1, 1, 1, 1], price: [350, 3500, 26e3, 17e4] }, { name: "Bear", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [12, 70, 550, 4500, 1e5], time: [7, 7, 6, 5, 5], price: [550, 5500, 63e3, 16e5] }, { name: "Moose", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [8, 45, 400, 3500, 26e3], time: [5, 5, 4, 4, 3], price: [520, 6500, 58e3, 7e5] }, { name: "Fox", color: "#f49849", class: "\uD83C\uDF32", rarity: "Common", cash: [7, 15, 80, 550, 3e3], time: [2, 2, 1, 1, 1], price: [400, 4e3, 36e3, 24e4] }, { name: "Raccoon", color: "#6d6e71", class: "\uD83C\uDF32", rarity: "Common", cash: [5, 14, 185, 1900, 19e3], time: [2, 2, 2, 2, 2], price: [400, 5e3, 71e3, 8e5] }, { name: "Squirrel", color: "#d25927", class: "\uD83C\uDF32", rarity: "Common", cash: [3, 10, 65, 470, 2600], time: [1, 1, 1, 1, 1], price: [420, 3600, 32e3, 21e4] }, { name: "Owl", color: "#594a42", class: "\uD83C\uDF32", rarity: "Common", cash: [4, 17, 155, 1500, 15e3], time: [2, 2, 2, 2, 2], price: [500, 4800, 55e3, 58e4] }, { name: "Hedgehog", color: "#3f312b", class: "\uD83C\uDF32", rarity: "Common", cash: [11, 37, 340, 2200, 3e4], time: [5, 4, 3, 2, 2], price: [540, 7e3, 77e3, 12e5] }, { name: "Seal", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 17, 150, 1200, 13e3], time: [2, 2, 2, 2, 2], price: [480, 4500, 43e3, 52e4] }, { name: "Arctic Fox", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [5, 18, 180, 850, 8500], time: [2, 2, 2, 1, 1], price: [520, 550, 61e3, 68e4] }, { name: "Snowy Owl", color: "#feda3f", class: "❄️", rarity: "Common", cash: [5, 20, 190, 1900, 16e3], time: [3, 3, 2, 2, 2], price: [370, 5300, 76e3, 62e4] }, { name: "Arctic Hare", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 19, 85, 900, 7e3], time: [2, 2, 1, 1, 1], price: [540, 5200, 66e3, 55e4] }, { name: "Penguin", color: "#fb8640", class: "❄️", rarity: "Common", cash: [4, 21, 310, 3200, 33e3], time: [3, 3, 3, 3, 3], price: [400, 6500, 76e3, 87e4] }, { name: "Baby Penguin", color: "#414042", class: "❄️", rarity: "Common", cash: [3, 8, 70, 450, 2700], time: [1, 1, 1, 1, 1], price: [420, 3300, 33e3, 23e4] }, { name: "Polar Bear", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [12, 75, 700, 6500, 85e3], time: [8, 7, 6, 5, 5], price: [630, 7e3, 91e3, 14e5] }, { name: "Walrus", color: "#7d4f33", class: "❄️", rarity: "Common", cash: [11, 46, 420, 3700, 51e3], time: [5, 5, 4, 4, 4], price: [550, 6200, 68e3, 1e6] }, { name: "Tiger", color: "#f18221", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 20, 100, 975, 7500], time: [3, 3, 1, 1, 1], price: [390, 6e3, 7e4, 61e4] }, { name: "Jaguar", color: "#fbb040", class: "\uD83C\uDF34", rarity: "Common", cash: [8, 28, 230, 1600, 17e3], time: [3, 3, 2, 2, 2], price: [390, 6e3, 7e4, 61e4] }, { name: "Toucan", color: "#ffca34", class: "\uD83C\uDF34", rarity: "Common", cash: [9, 20, 175, 625, 3800], time: [2, 2, 2, 1, 1], price: [520, 4800, 42e3, 3e5] }, { name: "Cockatoo", color: "#7ca1d5", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 35, 160, 1700, 18e3], time: [4, 4, 2, 2, 2], price: [500, 5e3, 63e3, 7e5] }, { name: "Macaw", color: "#00aeef", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 8, 85, 850, 8500], time: [1, 1, 1, 1, 1], price: [480, 5400, 62e3, 63e4] }, { name: "Parrot", color: "#ed1c24", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 9, 90, 900, 9e3], time: [1, 1, 1, 1, 1], price: [540, 5700, 65e3, 69e4] }, { name: "Panther", color: "#2f2c38", class: "\uD83C\uDF34", rarity: "Common", cash: [12, 28, 215, 2100, 21e3], time: [5, 3, 2, 2, 2], price: [530, 6500, 76e3, 87e4] }, { name: "Anaconda", color: "#8a9143", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 15, 85, 1500, 7600], time: [1, 2, 1, 2, 1], price: [410, 5100, 58e3, 59e4] }, { name: "Orangutan", color: "#bc6234", class: "\uD83C\uDF34", rarity: "Common", cash: [13, 52, 570, 4300, 7e4], time: [5, 5, 5, 4, 4], price: [600, 7e3, 8e4, 14e5] }, { name: "Capuchin", color: "#e0b0a6", class: "\uD83C\uDF34", rarity: "Common", cash: [4, 14, 160, 780, 8200], time: [2, 2, 2, 1, 1], price: [390, 4700, 57e3, 68e4] }, { name: "Elf", color: "#a7d054", class: "⚔️", rarity: "Uncommon", cash: [5e3, 15e3, 15e4, 15e5, 1e7], time: [1, 1, 1, 1, 1], price: [8e5, 9e6, 11e7, 8e8] }, { name: "Witch", color: "#4ab96d", class: "⚔️", rarity: "Uncommon", cash: [18e3, 6e4, 4e4, 4e6, 35e6], time: [3, 3, 2, 2, 2], price: [11e5, 12e6, 15e7, 14e8] }, { name: "Wizard", color: "#5a459c", class: "⚔️", rarity: "Uncommon", cash: [19500, 65e3, 44e4, 46e5, 4e6], time: [3, 3, 2, 2, 2], price: [13e5, 135e5, 16e7, 16e8] }, { name: "Fairy", color: "#df6d9c", class: "⚔️", rarity: "Uncommon", cash: [18500, 6e4, 62e4, 44e5, 38e6], time: [3, 3, 3, 2, 2], price: [12e5, 125e5, 15e6, 15e8] }, { name: "Slime Monster", color: "#2fa04a", class: "⚔️", rarity: "Uncommon", cash: [35e3, 14e4, 1e6, 11e6, 11e7], time: [5, 5, 4, 4, 4], price: [16e5, 15e6, 2e8, 23e8] }, { name: "Jester", color: "#be1e2d", class: "⚔️", rarity: "Rare", cash: [25e3, 1e5, 68e4, 65e5, 32e6], time: [3, 3, 2, 2, 1], price: [2e6, 21e6, 23e7, 26e8] }, { name: "Dragon", color: "#2fa04a", class: "⚔️", rarity: "Rare", cash: [36e3, 15e4, 15e5, 15e6, 15e7], time: [4, 4, 4, 4, 4], price: [23e5, 24e6, 27e7, 3e9] }, { name: "Unicorn", color: "#f6afce", class: "⚔️", rarity: "Epic", cash: [24e3, 15e4, 14e5, 7e6, 75e6], time: [2, 2, 2, 1, 1], price: [45e5, 45e6, 55e7, 65e8] }, { name: "Queen", color: "#9e1f63", class: "⚔️", rarity: "Rare", cash: [24e3, 95e3, 95e4, 97e5, 95e6], time: [3, 3, 3, 3, 3], price: [19e5, 2e7, 23e7, 25e8] }, { name: "King", color: "#ee2640", class: "⚔️", rarity: "Legendary", cash: [75e3, 4e5, 6e6, 9e7, 125e7], time: [5, 5, 5, 5, 5], price: [6e6, 95e6, 16e8, 25e9] }, { name: "Two of Spades", color: "#414042", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [4500, 14e3, 14e4, 14e5, 9e6], time: [1, 1, 1, 1, 1], price: [77e4, 83e5, 98e6, 71e7] }, { name: "Eat Me", color: "#d58c55", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 45e3, 45e4, 45e5, 5e7], time: [2, 2, 2, 2, 2], price: [13e5, 14e6, 16e7, 2e9] }, { name: "Drink Me", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [12e3, 4e4, 4e5, 4e6, 45e6], time: [2, 2, 2, 2, 2], price: [12e5, 12e6, 14e7, 18e8] }, { name: "Alice", color: "#4cc9f5", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13e3, 42e3, 21e4, 21e5, 23e6], time: [2, 2, 1, 1, 1], price: [12e5, 13e6, 15e7, 19e8] }, { name: "Queen of Hearts", color: "#d62027", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [23e3, 87e3, 62e4, 75e5, 9e7], time: [4, 4, 3, 3, 3], price: [13e5, 13e6, 18e7, 24e8] }, { name: "Dormouse", color: "#89d6f8", class: "\uD83C\uDFF0", rarity: "Rare", cash: [17e3, 68e3, 7e5, 35e5, 35e6], time: [2, 2, 1, 1, 1], price: [2e6, 22e6, 25e7, 28e8] }, { name: "White Rabbit", color: "#ffcd05", class: "\uD83C\uDFF0", rarity: "Rare", cash: [26e3, 105e3, 11e6, 77e5, 72e6], time: [3, 3, 3, 2, 2], price: [2e6, 23e6, 28e7, 29e8] }, { name: "Cheshire Cat", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Rare", cash: [32e3, 1e5, 9e5, 9e6, 6e7], time: [4, 3, 3, 3, 2], price: [18e5, 19e6, 22e7, 24e8] }, { name: "Caterpillar", color: "#00c0f3", class: "\uD83C\uDFF0", rarity: "Epic", cash: [1e4, 7e4, 65e4, 75e5, 85e6], time: [1, 1, 1, 1, 1], price: [42e5, 42e6, 54e7, 69e8] }, { name: "Mad Hatter", color: "#914f93", class: "\uD83C\uDFF0", rarity: "Epic", cash: [38e3, 25e4, 15e5, 14e6, 8e7], time: [3, 3, 2, 2, 1], price: [48e5, 48e6, 52e7, 66e8] }, { name: "King of Hearts", color: "#c62127", class: "\uD83C\uDFF0", rarity: "Legendary", cash: [8e4, 42e4, 68e5, 1e8, 15e8], time: [5, 5, 5, 5, 5], price: [7e6, 11e7, 18e8, 3e10] }, { name: "Earth", color: "#416eb5", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [15e3, 45e3, 6e5, 65e5, 65e6], time: [3, 3, 3, 3, 3], price: [1e6, 11e6, 15e7, 17e8] }, { name: "Meteor", color: "#c68c3c", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [23e3, 65e3, 7e5, 45e5, 2e7], time: [5, 4, 3, 2, 1], price: [95e4, 13e6, 16e7, 16e8] }, { name: "Stars", color: "#19184d", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [1e4, 4e4, 2e5, 2e6, 18e6], time: [2, 2, 1, 1, 1], price: [14e5, 14e6, 15e7, 15e8] }, { name: "Alien", color: "#8dc63f", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [3e4, 1e5, 1e6, 11e6, 85e6], time: [4, 4, 4, 4, 4], price: [15e5, 17e6, 19e7, 17e8] }, { name: "Planet", color: "#9dc6ea", class: "\uD83D\uDE80", rarity: "Rare", cash: [25e3, 1e5, 9e5, 9e6, 9e7], time: [3, 3, 3, 3, 3], price: [2e6, 21e6, 21e7, 24e8] }, { name: "UFO", color: "#a15095", class: "\uD83D\uDE80", rarity: "Rare", cash: [17e3, 7e4, 7e5, 7e6, 7e7], time: [2, 2, 2, 2, 2], price: [21e5, 23e6, 25e7, 28e8] }, { name: "Spaceship", color: "#ffcb29", class: "\uD83D\uDE80", rarity: "Epic", cash: [6e4, 32e4, 21e5, 15e6, 85e6], time: [5, 4, 3, 2, 1], price: [48e5, 46e6, 54e7, 68e8] }, { name: "Astronaut", color: "#9bd4ee", class: "\uD83D\uDE80", rarity: "Legendary", cash: [45e3, 26e4, 25e5, 38e6, 55e7], time: [3, 3, 2, 2, 2], price: [65e5, 1e8, 17e8, 27e9] }, { name: "Lil Bot", color: "#3e564a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [4e3, 12e3, 18e4, 19e5, 25e6], time: [1, 1, 1, 1, 1], price: [73e4, 12e6, 13e7, 19e8] }, { name: "Lovely Bot", color: "#f179af", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [16e3, 65e3, 65e4, 48e5, 42e6], time: [3, 3, 3, 2, 2], price: [13e5, 14e6, 17e7, 16e8] }, { name: "Angry Bot", color: "#f1613a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [22e3, 85e3, 8e5, 62e5, 65e6], time: [4, 4, 4, 3, 3], price: [12e5, 13e6, 15e7, 17e8] }, { name: "Happy Bot", color: "#51ba6b", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [11e3, 45e3, 5e5, 25e5, 3e7], time: [2, 2, 2, 1, 1], price: [14e5, 15e6, 18e7, 24e8] }, { name: "Watson", color: "#d69b5a", class: "\uD83E\uDD16", rarity: "Rare", cash: [24e3, 1e5, 1e6, 1e7, 1e8], time: [3, 3, 3, 3, 3], price: [2e6, 22e6, 24e7, 26e8] }, { name: "Buddy Bot", color: "#9dc6ea", class: "\uD83E\uDD16", rarity: "Rare", cash: [22e3, 95e3, 65e4, 65e5, 65e6], time: [3, 3, 2, 2, 2], price: [19e5, 21e6, 23e7, 25e8] }, { name: "Brainy Bot", color: "#9ecf7a", class: "\uD83E\uDD16", rarity: "Epic", cash: [5e4, 25e4, 21e5, 21e6, 17e7], time: [4, 3, 3, 3, 2], price: [5e6, 46e6, 5e8, 67e8] }, { name: "Mega Bot", color: "#d71f27", class: "\uD83E\uDD16", rarity: "Legendary", cash: [8e4, 43e4, 42e5, 62e6, 1e9], time: [5, 5, 3, 3, 3], price: [7e6, 12e7, 19e8, 35e9] }];
        const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
        const blook = blooks.find(function ({ name }) { return name.toLowerCase() == this }, prompt("Enter blook name:").toLowerCase());
        if (blook) {
            if (stateNode.state.blooks.length >= 10) alert("Choose a blook to replace");
            stateNode.chooseBlook(blook);
        }
        else alert("That is not a valid blook!");
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/Minesraft2/Blooket-Cheats/main/autoupdate/timestamps/factory/chooseBlook.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        for (let i = 0; i < data.length; i += 4) {
            let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let iframe = document.querySelector("iframe");
        const [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);
        if (parseInt(time) <= 1692579651556 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => (img.src = null, cheat());
})();