

var ssyqtj=0
var srkyzk=0
var bhshbx=0
var hsuhuh=0


function kaisyliii(){              //输入框展开

if(srkyzk==0){
    srkyzk=1

    document.getElementById("cangqilai").style.display="block"
    document.getElementById("zhusrk").placeholder=""
    document.getElementById("srkmsbj").style.display="block"
    document.getElementById("gtrgt").style.backgroundColor="rgba(0, 0, 0, 0.5)"
    document.getElementById("gtrgt").style.zIndex=2
    document.getElementById("kslj").style.display="block"
    document.getElementById("dehnxde").style.display="block"

 var zks=0;
 var yhdkd=Number(document.getElementById("gtrgt").style.width.split("px")[0]) 

 var dhjs = setInterval(zk, 1);
 function zk(){
    if(zks==120){
        yhdkd=Number(document.getElementById("gtrgt").style.width.split("px")[0]) 
        document.getElementById("zhusrk").style.width=yhdkd-86
        clearInterval(dhjs);
    }else{
        var xjs=(60/Math.pow((zks+1),1))
        if(xjs>40){
            xjs=40
        }
        if(xjs<2){
            xjs=0
            zks=119
        }
        document.getElementById("srkmsbj").style. backdropFilter=" blur("+(30/(xjs+1/(xjs-1)))+"px)"
        document.getElementById("srkmsbj").style.WebkitBackdropFilter=" blur("+(30/(xjs+1/(xjs-1)))+"px)"
        document.getElementById("gtrgt").style.width=yhdkd+xjs+"px"
        yhdkd=yhdkd+xjs

                zks++
    }
        }
    }
}




function bjbmh(){                     //背景变模糊

    document.getElementById("srkmsbj").style.display="block"
 var zks=0;

 var dhjs = setInterval(zk, 1);
 function zk(){
    if(zks==120){
        clearInterval(dhjs);
    }else{
        var xjs=(60/Math.pow((zks+1),1))
        if(xjs>40){
            xjs=40
        }
        if(xjs<2){
            xjs=0
            zks=119
        }
        document.getElementById("srkmsbj").style. backdropFilter=" blur("+(30/(xjs+1/(xjs-1)))+"px)"
        document.getElementById("srkmsbj").style.WebkitBackdropFilter=" blur("+(30/(xjs+1/(xjs-1)))+"px)"

                zks++
    }
        }
}

function bjbqx(){                     //背景变清晰

 var zks=0;

 var dhjs = setInterval(zk, 1);
 function zk(){
    if(zks==120){
        document.getElementById("srkmsbj").style.display="none"
        document.getElementById("srkmsbj").style. backdropFilter=" blur(0px)"
        document.getElementById("srkmsbj").style.WebkitBackdropFilter=" blur(0px)"
        clearInterval(dhjs);
    }else{
        var xjs=(60/Math.pow((zks+1),1))
        if(xjs>40){
            xjs=40
        }
        if(xjs<2){
            xjs=0
            zks=119
        }
        document.getElementById("srkmsbj").style. backdropFilter=" blur("+(xjs+1/(xjs-1))+"px)"
        document.getElementById("srkmsbj").style.WebkitBackdropFilter=" blur("+(xjs+1/(xjs-1))+"px)"

                zks++
    }
        }
}


function fxsrk(){                    //输入框收回

if(ssyqtj==1){
    srkfhjj()
    return
}
if(bhshbx==1){
    fcnrjn()
    return
}


if(srkyzk==1){
    srkyzk=0
    document.getElementById("cangqilai").style.display="none"
    document.getElementById("zhusrk").placeholder="Search"
    document.getElementById("zhusrk").value=""
    document.getElementById("zhusrk").style.width=200
    document.getElementById("gtrgt").style.backgroundColor="rgba(0, 0, 0, 0.3)"
    document.getElementById("gtrgt").style.zIndex=0
    document.getElementById("xsbvbv").style.display="none"
    document.getElementById("tihsbd").style.display="none"
    document.getElementById("foirjco").style.display="none"
    document.getElementById("kslj").style.display="none"
    document.getElementById("dehnxde").style.display="none"

 var zks=0;
 var yhdkd=Number(document.getElementById("gtrgt").style.width.split("px")[0]) 

 var dhjs = setInterval(zk, 1);
 function zk(){
    if(zks==120){
        yhdkd=Number(document.getElementById("gtrgt").style.width.split("px")[0]) 

        document.getElementById("srkmsbj").style.display="none"
        clearInterval(dhjs);
    }else{
        var xjs=(60/Math.pow((zks+1),1))
        if(xjs>40){
            xjs=40
        }
        if(xjs<2){
            xjs=0
            zks=119
        }
        document.getElementById("srkmsbj").style. backdropFilter=" blur("+(xjs+1/(xjs-1))+"px)"
        document.getElementById("srkmsbj").style.WebkitBackdropFilter=" blur("+(xjs+1/(xjs-1))+"px)"
        document.getElementById("gtrgt").style.width=yhdkd-xjs+"px"
        yhdkd=yhdkd-xjs

                zks++
    }
        }
    }
}


function fhyrbyhbc(){                                          //搜索引擎列表展开收回
    if(document.getElementById("xsbvbv").style.display=="block"){
        document.getElementById("xsbvbv").style.left="-150"
        document.getElementById("xsbvbv").style.display="none"
        document.getElementById("tihsbd").style.display="none"

    }else{
        document.getElementById("xsbvbv").style.display="block"
        document.getElementById("tihsbd").style.display="block"
        document.getElementById("xsbvbv").style.left="-150"
        var zks=0;
        var yhdkd=-150
       
        var dhjs = setInterval(zk, 4);
        function zk(){
           if(zks==120){
               clearInterval(dhjs);
           }else{
               var xjs=(8/Math.pow((zks+1),1))
               if(xjs>40){
                   xjs=40
               }
               if(xjs<2){
                   xjs=0
                   zks=119
               }
   
               document.getElementById("xsbvbv").style.left=yhdkd-xjs+"px"
               yhdkd=yhdkd-xjs
       
                       zks++
           }
               }


    }
    }

    function vdfvvfv(){                    //更多功能框展开
        if(bhshbx==1){
            fcnrjn()
            return
        }
            srkyzk=0
            document.getElementById("cangqilai").style.display="none"
            document.getElementById("zhusrk").placeholder="Search"
            document.getElementById("zhusrk").value=""
            document.getElementById("zhusrk").style.width=200
            document.getElementById("gtrgt").style.backgroundColor="rgba(0, 0, 0, 0.3)"
            document.getElementById("gtrgt").style.zIndex=0
            document.getElementById("xsbvbv").style.display="none"
            document.getElementById("tihsbd").style.display="none"
            document.getElementById("foirjco").style.display="none"
            document.getElementById("kslj").style.display="none"
            document.getElementById("xhbdkb").style.display="none"
            document.getElementById("gtrgt").style.display="none"
            document.getElementById("gtrgt").style.width="300px"
            document.getElementById("eduhdxnji").style.display="block"
            document.getElementById("dehnxde").style.display="block"
            ssyqtj=0
            bhshbx=1
            bjbmh()
        }
        function fcnrjn(){     //更多功能框收回
            document.getElementById("gtrgt").style.display="block"
            document.getElementById("eduhdxnji").style.display="none"
            document.getElementById("dehnxde").style.display="none"
            bjbqx()
            bhshbx=0
        }

function gswygxd(){
    document.getElementById("cdujhhuj").style.color=zhutiyanse
    document.getElementById("dedceewd").style.color="rgba(255,255,255,0.8)"
    if(hsuhuh==1){
        return
    }
    var zks=0
    var dhjs = setInterval(zk, 1);
    function zk(){
       if(zks>600){
       hsuhuh=1
       document.getElementById("dhujhu").style.left="-600px"
           clearInterval(dhjs);
       }else{
           document.getElementById("dhujhu").style.left="-"+zks+"px"
                   zks=zks+9
       }
           }
}
function xcxeffv(){
    document.getElementById("cdujhhuj").style.color="rgba(255,255,255,0.8)"
    document.getElementById("dedceewd").style.color=zhutiyanse 
    if(hsuhuh==0){
        return
    }
    var zks=-600
    var dhjs = setInterval(zk, 1);
    function zk(){
       if(zks>0){
       hsuhuh=0
       document.getElementById("dhujhu").style.left="0px"
           clearInterval(dhjs);
       }else{
           document.getElementById("dhujhu").style.left=zks+"px"
           zks=zks+9
       }
           }
}