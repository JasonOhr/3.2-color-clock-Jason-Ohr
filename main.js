
/**
 * Created by firewaterjoe on 5/19/15.
 */
(function(){
    var hexValueHover;

    function currentTime() {

        var initialTime = new Date();
        var time = document.querySelector('.time');
        var h = initialTime.getHours();
        var m = initialTime.getMinutes();
        var s = initialTime.getSeconds();
        var hours = ( h <10? '0': '' ) + h;
        var minutes = ( m < 10 ? '0': '') + m;
        var seconds = ( s < 10 ? '0': '') + s

        var htmlTime = hours + ":" + minutes + ":" + seconds;
        time.style.visibility = 'visible';
        time.textContent = htmlTime;

        timerBarWidth(s);
        hexTime(s);
    }
    function timerBarWidth (s) {
        var percentWidth = (s/60)*100 + "%";
        var bar = document.querySelector('.timerBar');
        var newStyle = bar.style;
        newStyle.width = percentWidth;

    }
    function hexTime(timer){
        var initialOuterHex = "1f18e0";
        var initialInnerHex = "aa00ff";
        //change hex to number
        var number = parseInt(initialOuterHex,16 ) + timer  * 15;
        var numberOuter = parseInt(initialInnerHex,16)  - timer * 15;
        var element = document.querySelector('body');
        element.style.backgroundImage = "-webkit-gradient(radial, 50% 50%, 40, 50% 50%,1200, from(#" + number.toString(16) + "), to(#" + numberOuter.toString(16) + "))";



    }

    window.setInterval(currentTime, 1000);


})();
