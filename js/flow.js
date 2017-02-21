$(document).ready(function(){
    var Arr =[];
    var HeightArr=[];
    var li=$(".stream li");
    var imgs=$(".stream-img");
    var Index = li.length;
    var sum=0;

    for (var i = 0; i < Index; i++) {
        Arr[i] = li.eq(i).outerHeight();
    }
    li.each(function(){
        var img=$(this).find("img");

        var tdx=$(this).index();
        img.attr("id","li"+tdx);
        if(document.getElementById("li"+tdx).complete){
            Arr[tdx] = li.eq(tdx).outerHeight();
        }else{
            img.load(function(){
                Arr[tdx] = li.eq(tdx).outerHeight();

            })
        }
        sum++;
    });

    if(sum==Index){
        for(var j=0;j<Index;j++){
            if(j<3){
                HeightArr[j]=Arr[j];
            }else{
                var minHeight=Math.min.apply(null,HeightArr);
                var minlocate=minlocat(HeightArr,minHeight);
                var leftlocate=li.eq(minlocate).position().left;
                var toplocate=li.eq(minlocate).position().top;
                li.eq(j).css({
                    position:"absolute",
                    top:minHeight+36+toplocate+"px",
                    left:leftlocate+"px"
                });
                HeightArr[minlocate]=HeightArr[minlocate]+10+ li.eq(j).outerHeight();
                var maxHeight=Math.max.apply(null,HeightArr);
                $(".stream").css("height",maxHeight+"px")
            }
        }
    }



});
function minlocat(HeightArr,minHeight){
    for(var i in HeightArr){
        if(HeightArr[i]==minHeight){
            return i;//返回列数
        }
    }
}


//    imgs.load(function(){
//        var zz=$(this).parent().index();
//        Arr[zz]=li.eq(zz).outerHeight();
//        sum++;
//        console.log(sum)
//        if(sum==Index){
//            for(var j=0;j<Index;j++){
//                if(j<3){
//                    HeightArr[j]=Arr[j];
//                }else{
//                    var minHeight=Math.min.apply(null,HeightArr);
//                    var minlocate=minlocat(HeightArr,minHeight);
//                    var leftlocate=li.eq(minlocate).position().left;
//                    var toplocate=li.eq(minlocate).position().top;
//                    li.eq(j).css({
//                        position:"absolute",
//                        top:minHeight+36+toplocate+"px",
//                        left:leftlocate+"px"
//                    });
//                    HeightArr[minlocate]=HeightArr[minlocate]+10+ li.eq(j).outerHeight();
//                    var maxHeight=Math.max.apply(null,HeightArr);
//                    $(".stream").css("height",maxHeight+"px")
//                }
//            }
//        }
//
//    })
