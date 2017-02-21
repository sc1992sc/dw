/**
 * Created by Administrator on 2016/6/29.
 */
jQuery(function(){
    var m=$(".siteList");
    var main= m.find(".bd");
    var ul=main.find("ul");
    var li=ul.find("li");
    var prev= m.find(".prev");
    var next= m.find(".next");
    var Idx=main.find("li").length;
    var col=Math.floor(Idx/4);
    var row=Math.floor(Idx/2);
    var t=0;
    var end=Idx%2;

    if(Idx>8){
        ul.css({"width":row*286+"px","height":"448px","position":"relative"});

        for(var i=0;i<row;i++) {
            for (var j = 0; j < col; j++) {
                li.eq(j + 2 * i).css({
                    "position":"absolute",
                    "top": 0 + j * 224 + "px",
                    "left": 0 + i * 286 + "px"
                });
            }
        }

        if(end==1){
            li.last().css({
                "left":row*286+"px",
                "top":"0"
            });
            row+=1;

        }else if(end==2){
            li.last().css({
                "left":row*286+"px",
                "top":"224px"
            }).prev().css({
                "left":row*286+"px",
                "top":"0"
            });
            row+=1;
        }
    }else{
        prev.css("display","none");
        next.css("display","none");
    }


    next.click(function(){
        t++;
        if(t>row/4-1){t=row/4-1}
        ul.animate({"marginLeft":-286*4*t+"px"})
    });

    prev.click(function(){
        t--;
        if(t<0){t=0}
        ul.animate({"marginLeft":-286*4*t+"px"})
    })
})