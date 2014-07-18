function scoreRotate(){
    var wrapper = $("#intergral-wrapper")[0];
    var score_total= 300;
    var score_got = 100;
    var score_get = 80;
    var angle = (score_got/score_total) * 360;
    var new_angle = ((score_got+score_get)/score_total) * 360;
    initCircle();
    if(angle>=180){
        $(".round-circle")[0].style.zIndex=4;
        addClass($(".color-circle")[0],"color-change");
        removeClass($(".color-change")[0],"color-circle");
    }
    setTransform($(".round-circle")[0],"rotate(" + angle +"deg)");
    if(angle<180 && new_angle>180){
        var half_time = 1000 * (180-angle)/(new_angle-angle);
        setTimeout(function(){
            addClass($(".color-circle")[0],"color-change");
            removeClass($(".color-change")[0],"color-circle");
            $(".round-circle")[0].style.zIndex=4;
        },half_time+200);
    }
    if(new_angle >= 360){
        setTimeout(function(){
            addClass($(".round-circle")[0],"rotate");
            setTransform($(".round-circle")[0],"rotate(" + 360 +"deg)");
            setTimeout(function(){
                setTransform($(".score-add")[0],"rotateY(" + 180 +"deg)");
                setTransform($(".lv-role")[0],"rotateY(" + 0 +"deg)");
                setTimeout(function(){
                    addClass($(".score-desc")[0],"hide");
                    removeClass($(".role-desc")[0],"hide");
                },300);
            },1000);
        },500);
    }else{
        setTimeout(function(){
            addClass($(".round-circle")[0],"rotate");
            setTransform($(".round-circle")[0],"rotate(" + new_angle +"deg)");
        },500);
    }

    function initCircle(){
        var pattern = /\/\w+\./;
        var matches = $(".score-pic")[0].src.match(pattern);
        if(matches){
            var score_item = matches[0].slice(1,this.length-1);
            addClass(wrapper,score_item);
        }
        var level = $(".lv-num span").text();
        if(level){
            switch(level){
                case "LV2":
                case "LV3":
                case "LV4":
                case "LV5":
                    addClass(wrapper,"role_lv2");
                    break;
                case "LV6":
                case "LV7":
                    addClass(wrapper,"role_lv6");
                    break;
                case "LV8":
                case "LV9":
                case "LV10":
                    addClass(wrapper,"role_lv8");
                    break;
                case "LV11":
                case "LV12":
                case "LV13":
                    addClass(wrapper,"role_lv11");
                    break;
                case "LV14":
                    addClass(wrapper,"roll_boss");
                    break;
            }
        }
    }

    function setTransform(element,func_str){
        element.style.webkitTransform = func_str;
        element.style.msTransform = func_str;
        element.style.transform = func_str;
    }

    function addClass(item,className){
        var classes = item.className;
        if(classes.indexOf(className) > -1) {
            return true;
        }
        if(!classes){
            classes=className;
        }else{
            classes = classes + " " + className;
        }
        item.className = classes;
    }

    function removeClass(item,className){
        var classNames = item.className.split(/\s+/);
        var pos = -1, i, len;
        for (i=0, len=classNames.length; i < len; i++){
            if (classNames[i] == className){
                pos = i;
                break;
            }
        }
        if(i<len){
            classNames.splice(i,1);
            item.className = classNames.join(" ");
        }
    }
}

scoreRotate();