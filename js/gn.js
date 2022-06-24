var cks=0;
var dbc = [];
var ygd=["az","az","az","az"];
var yyssyq=2
var lsbfh=0
var yclb=[]
var lier=[]
var lierysc=0

function qwq(){
    qwq();
}


function az(){
    alert("AZ!!")
    ////console.log("AZ!!")
    return("AZ!!")
}










function ckxs(idm,w,h){          //调整窗口大小+位置

    var wd=w
    var hd=h
    var idd=idm
    cknr=""

document.getElementById(idd).style.width=wd
document.getElementById(idd).style.height=hd
document.getElementById("nr-"+idd).style.height=hd.toString().split("px")[0]-20+"px"
document.getElementById(idm).style.top=    (document.body.clientHeight-500)/2
document.getElementById(idm).style.left=    (document.body.clientWidth-700)/2


}
function ckxsfz(idm,w,h){                           //调整窗口大小

    var wd=w
    var hd=h
    var idd=idm
    cknr=""
    
    document.getElementById(idd).style.width=wd
    document.getElementById(idd).style.height=hd
    document.getElementById("nr-"+idd).style.height=hd.toString().split("px")[0]-20+"px"
    }
    function ckgd(idm){                                  //调整窗口高度（互相遮盖）
         
         
         var zdgd=document.getElementById(idm).style.zIndex;
     
         if (zdgd == ""){
             
         }else
         {
       
             //alert(cks)
                 for (var i = 1; i < cks+1; i++) {
                   
     var ckmc="ck" + i
     //alert(isInArray(dbc,ckmc))
     if (isInArray(dbc,ckmc)==true) {
     }else{
     var xindex=document.getElementById(ckmc).style.zIndex
     //alert("az")
     if (xindex>=zdgd) {
         if(ckmc==idm){}else{
             document.getElementById(ckmc).style.zIndex=xindex-1;
         }
     }
                 }
      }
     }
     
         document.getElementById(idm).style.zIndex=cks;
     }
     function isInArray(arr,value){                                //数组是否包含
        for(var i = 0; i < arr.length; i++){
            if(value === arr[i]){
                return true;
            }
        }
        return false;
    }

    function arrremove(arr, item) {                       //数组删除
        for(var i=arr.length-1;i>=0;i--)
          {
           if(arr[i]==item)
             {
               arr.splice(i,1);
              }
           }
        return arr;
    }


    window.onmousemove=function(ert){
         mutocX=ert.clientX
         mutocY=ert.clientY
    }
    window.onmousedown=function(ert){
        mutocX=ert.clientX
        mutocY=ert.clientY
   }
    window.ontouchmove=function(ert){
        mutocX=ert.touches[0].clientX
        mutocY=ert.touches[0].clientY
   }
  window.ontouchstart=function(ert){
    mutocX=ert.touches[0].clientX
    mutocY=ert.touches[0].clientY
  }

  document.addEventListener('touchmove', function(ert) {
    mutocX=ert.touches[0].clientX
    mutocY=ert.touches[0].clientY
}, false);







    function ckyd(idm2){                                                  //窗口移动（鼠标拖拽）
    
        if(isInArray(ygd,idm2)==true){////console.log("az")
        return}else{
    

        var idd='tzk-ck'+String(idm2.split("ck")[1]) 
    
        document.getElementById("czzg-"+String(idm2.split("ck")[1])).style.zIndex=10
        var oBox2 = document.getElementById(idd);
        var oBox1919810 = document.getElementById(idm2);
                ckgd(idm2)

             var disX=mutocX-oBox1919810.offsetLeft;
             var disY=mutocY-oBox1919810.offsetTop;   

            document.onmousemove = function(ev114514) {
              
             l = ev114514.clientX-disX;
             t = ev114514.clientY-disY;
            //////console.log(l);
            if(isInArray(ygd,idm2)==true){//////console.log("az")
            return}else{
            oBox1919810.style.left = l + "px";
            oBox1919810.style.top = t + "px";}
            
            };
                            document.onmouseup = function() {
                                document.onmousemove = null;
                                ckdxwzhy(idm2,l + "px",t + "px",undefined,undefined)
                                document.getElementById("czzg-"+String(idm2.split("ck")[1])).style.zIndex=-1
                        };
                        
                            return false;  
                        
        
        }}

        function ckydcp(idm2){                                                  //窗口移动（触屏）
               
            //alert("cp1")
            if(isInArray(ygd,idm2)==true){//////console.log("az")
                return}else{
            
        
                var idd='tzk-ck'+String(idm2.split("ck")[1]) 
            
                var shouci=1
                var oBox2 = document.getElementById(idd);
                var oBox1919810 = document.getElementById(idm2);

                var disX
                var disY

    
                      //  var touch = ert.touches[0];
                        ckgd(idm2)
                  
                   
                    //alert(disX)  
                    document.ontouchmove = function(ev114514) {

                       
if(shouci==1){
    shouci=0;
    var touch = ev114514.touches[0];
     disX=touch.clientX-oBox1919810.offsetLeft;
     disY=touch.clientY-oBox1919810.offsetTop; 
    return
}else{
    //console.log(disY)
    var touch = ev114514.touches[0];
    l = touch.clientX-disX;
    t = touch.clientY-disY;
//console.log(l);
if(isInArray(ygd,idm2)==true){//console.log("az")
return}else{
oBox1919810.style.left = l + "px";
oBox1919810.style.top = t + "px";}

}
                    };
                                    document.ontouchend = function() {
                                        ckdxwzhy(idm2,l + "px",t + "px",undefined,undefined)
                                    document.ontouchmove = null;
                                };
                                
                                    return false;  
                                
                
            }}
        function ckdx(idm){                                             //窗口大小（鼠标拖拽）
            if(isInArray(ygd,idm)==true){

                return}else{


                    document.getElementById("czzg-"+String(idm.split("ck")[1])).style.zIndex=10
            var dxidm='dxk-ck'+String(idm.split("ck")[1]) 
            //////console.log(dxidm)
            var oBox = document.getElementById(dxidm);
            var oBox114514 = document.getElementById(idm);

            ckgd(idm)

          var   disX=oBox114514.style.left.split("px")[0];
         var   disY=oBox114514.style.top.split("px")[0];   

            document.onmousemove = function(ev) {
             l2 = ev.clientX-disX;
             t2 = ev.clientY-disY;
            //////console.log(l);
        //alert(l+"az"+t)


        if(isInArray(ygd,idm)==true){//console.log("az")
        return}else{
        ckxsfz(idm,l2+"px",t2+"px")}
        
            };
                            document.onmouseup = function() {
                                ckdxwzhy(idm,undefined,undefined,l2+"px",t2+"px")
                            document.onmousemove = null;
                            document.getElementById("czzg-"+String(idm.split("ck")[1])).style.zIndex=-1
                        };
                        
                            return false;  
                      
                        //ckgd("ck" + xrcks)
                    }
        }
        
        function ckdxcp(idm){                                             //窗口大小（触屏）
            
            if(isInArray(ygd,idm)==true){
                return}else{


            
            var dxidm='dxk-ck'+String(idm.split("ck")[1]) 
            //////console.log(dxidm)
            var oBox = document.getElementById(dxidm);
            var oBox114514 = document.getElementById(idm);
   

            ckgd(idm)

         var   disX=oBox114514.style.left.split("px")[0];
          var  disY=oBox114514.style.top.split("px")[0];   
          //////console.log("az233")
            document.ontouchmove = function(ev) {
                var touch = ev.touches[0];
             l2 = touch.clientX-disX;
             t2 = touch.clientY-disY;
            //////console.log(l);
        //alert(l+"az"+t)


        if(isInArray(ygd,idm)==true){
        return}else{
        ckxsfz(idm,l2+"px",t2+"px")}
        
            };
                            document.ontouchend = function() {
                                ckdxwzhy(idm,undefined,undefined,l2+"px",t2+"px")
                            document.ontouchmove = null;
                        };
                        
                            return false;  
                        
                        //ckgd("ck" + xrcks)
                    }
        }


        function add(src,gd,kd,wzx,wzy,bjys,bjbtmd,ckbmh,ckbt,sfgd,mod,xycks,ydnb){                              //新建窗口？                  add(调用内容,窗口高度,窗口宽度,窗口位置left,窗口位置top,窗口颜色,窗口透明度,窗口标题,是否固定,恢复模式,指定窗口ID,是否为啊这窗口)
           console.log(src,gd,kd,wzx,wzy,bjys,bjbtmd,ckbmh,ckbt,sfgd,mod,xycks,ydnb)



            if (dbc.length>0){
                var xrcks =dbc[0].split("ck")[1]
                dbc.splice(0, 1)
            }else{
                if(mod=="hf"){
                    ////console.log(cks)
                    if(xycks>cks){
                        var lsxhs=xycks-cks
                        var fejhhef=cks
    for(var heg=0;heg<lsxhs-1;heg++){
    cks++
    ////console.log("ck"+String(heg+fejhhef+1))
    dbc.push("ck"+String(heg+fejhhef+1))
    if(isInArray(ygd,"ck"+String(heg+fejhhef+1))==true){
        arrremove(ygd,"ck"+String(heg+fejhhef+1))
    }
    }

                    }
                }
                cks++
                var xrcks=cks
            }

if(ydnb==1){
    xrsrc=src+"$$$ck"+xrcks
}else{
    xrsrc=src
}



            var sourceNode = document.getElementById("ck0");
            var clonedNode = sourceNode.cloneNode(true);
            clonedNode.setAttribute("id", "ck"+xrcks);
            sourceNode.parentNode.appendChild(clonedNode);

            var ynr=""
            document.getElementById("ck"+xrcks).innerHTML=ynr+"    <div class='tzk'    ontouchstart=ckydcp('ck"+xrcks+"') onmousedown=ckyd('ck"+xrcks+"') id='tzk-ck"+xrcks+"'></div><div class='ckbt' id='bt-"+xrcks+"'>"+ckbt+"</div>"
            var ynr=document.getElementById("ck"+xrcks).innerHTML
            document.getElementById("ck"+xrcks).innerHTML=ynr+"    <div class='ckclose' onclick=azclose('ck"+xrcks+"')></div><div class='ffefece' onclick=bdcgbhg("+xrcks+")></div><div class='ckgd' onclick=azgd('ck"+xrcks+"') style='background-image: url(img/bqck/gd.png);' id='gd-ck"+xrcks+"'></div>"
            var ynr=document.getElementById("ck"+xrcks).innerHTML
            document.getElementById("ck"+xrcks).innerHTML=ynr+"<div class='beijin' style='background: "+bjys+";opacity: "+bjbtmd+";'></div>"
            var ynr=document.getElementById("ck"+xrcks).innerHTML
            document.getElementById("ck"+xrcks).innerHTML=ynr+"<div class='chudbcg' id='czzg-"+xrcks+"'></div>"
            var ynr=document.getElementById("ck"+xrcks).innerHTML
            document.getElementById("ck"+xrcks).innerHTML=ynr+"<div id='nr-ck"+xrcks+"' style='width: 100%;height:0%;' class='xsbq'></div><div class='dxtjd' ontouchstart=ckdxcp('ck"+xrcks+"') onmousedown=ckdx('ck"+xrcks+"')  id='dxk-ck"+xrcks+"'></div>"
            document.getElementById("nr-ck"+xrcks).innerHTML="<iframe name='ck"+xrcks+"' src='"+xrsrc+"' border='0' frameborder='no' framespacing='0' allowfullscreen='true' width='100%' height='100%' class='yjiao'></iframe>"

            ckxs("ck"+xrcks,kd,gd)
            document.getElementById("ck" + xrcks).style.backdropFilter="blur("+ckbmh+")"
            document.getElementById("ck" + xrcks).style.borderRadius=" 10px 10px 10px 10px"
            document.getElementById("ck" + xrcks).style.top=wzy
            document.getElementById("ck" + xrcks).style.left=wzx

            document.getElementById("ck" + xrcks).style.display= "block"
            ckgd("ck" + xrcks)
            if(mod=="hf"){
                
            }else{
                jiluck(src,gd,kd,wzx,wzy,bjys,bjbtmd,ckbmh,ckbt,xrcks,ydnb)
            }
            if(sfgd=="true"){
                azgd("ck" + xrcks,"hf")
            }
  
         //下面开始窗口多功能

         var sourceNode = document.getElementById("zxh-0");
         var clonedNode = sourceNode.cloneNode(true);
         clonedNode.setAttribute("id", "zxh-"+xrcks);
         sourceNode.parentNode.appendChild(clonedNode);

         var ynr=""
        document.getElementById("zxh-"+xrcks).innerHTML=ynr+"<input type='text' onchange='gbckbt("+xrcks+",this.value)' value='"+ckbt+"' class='gdeyfd'>"
        var ynr=document.getElementById("zxh-"+xrcks).innerHTML
        document.getElementById("zxh-"+xrcks).innerHTML=ynr+"<div class='dgeyuh' style='right:5px;background-image: url(img/bqck/del.png);' title='删除' onclick=dcegcy(1,"+xrcks+")></div>"
        var ynr=document.getElementById("zxh-"+xrcks).innerHTML
        console.log("'"+xrsrc+"'")    
        document.getElementById("zxh-"+xrcks).innerHTML=ynr+"<div class='dgeyuh' style='right:35px;background-image: url(img/bqck/more.png);' title='在新标签页中打开' onclick=duhjuiejdi('"+xrsrc+"')></div>" 
        console.log("'"+xrsrc+"'")    
        var ynr=document.getElementById("zxh-"+xrcks).innerHTML
        document.getElementById("zxh-"+xrcks).innerHTML=ynr+"<div class='dgeyuh' style='right:65px;background-image: url(img/bqck/up.png);' title='置顶窗口' onclick='dcegcy(4,"+xrcks+")'></div>"
        var ynr=document.getElementById("zxh-"+xrcks).innerHTML
        document.getElementById("zxh-"+xrcks).innerHTML=ynr+"<div class='dgeyuh' style='right:95px;background-image: url(img/bqck/gd-k.png);' title='固定窗口' onclick='dcegcy(5,"+xrcks+")' id='zxh-gd-"+xrcks+"'></div>"
        var ynr=document.getElementById("zxh-"+xrcks).innerHTML
        document.getElementById("zxh-"+xrcks).innerHTML=ynr+"<div class='dgeyuh' style='right:125px;background-image: url(img/bqck/maximize.png);' title='最小化窗口' onclick='dcegcy(6,"+xrcks+")'></div>"


        document.getElementById("zxh-"+xrcks).style.display="block"
        }


        function azclose(idm){                                                    //窗口关闭
            dbc.push(idm)
            if(isInArray(ygd,idm)==true){
                arrremove(ygd,idm)
            }
            document.getElementById(idm).remove()
            document.getElementById('zxh-'+String(idm.split("ck")[1]) ).remove()
            jilucksc(idm)
        }

        function azgd(idm,mod){                                    //窗口固定切换

        if(isInArray(ygd,idm)==true){                          
            arrremove(ygd,idm)
            document.getElementById('gd-ck'+String(idm.split("ck")[1]) ).style.backgroundImage="url(img/bqck/gd.png)"
            document.getElementById('zxh-gd-'+String(idm.split("ck")[1]) ).style.backgroundImage="url(img/bqck/gd-k.png)"
            if(mod=="hf"){}else{
                ckdxwzhy(idm,undefined,undefined,undefined,undefined,"??????")
            }
            


        }else{
            ygd.push(idm)
            document.getElementById('gd-ck'+String(idm.split("ck")[1]) ).style.backgroundImage="url(img/bqck/gd-r.png)"
            document.getElementById('zxh-gd-'+String(idm.split("ck")[1]) ).style.backgroundImage="url(img/bqck/gd-k-r.png)"
            if(mod=="hf"){}else{
                ckdxwzhy(idm,undefined,undefined,undefined,undefined,true)
            }
           
        }
     

        }

function bdcgbhg(idm){              //最小化窗口  idm:数字
var xs=document.getElementById("ck"+idm).style.display
if(xs=="none"){
    document.getElementById("ck"+idm).style.display="block"
    arrremove(yclb,idm)
}
if(xs=="block"){
    document.getElementById("ck"+idm).style.display="none"
    yclb.push(idm)
}
nxuhhnxc()
}


function tjssyq(a,b,c,d,e,hfms){            //添加搜索引擎      (搜索引擎名称,搜索引擎搜索地址,搜索引擎翻译地址,搜索引擎图标,是否支持页面内显示,恢复模式)

    if(hfms=="hf"){

    }else{
        ssmc.push(a)
        ssk.push(b)
        ssfky.push(c)
        sstbk.push(d)
        zcnbkd.push(e)
    
        dhuedhu()
    
    }
   
    yyssyq++
    var gh=document.getElementById("xsbvbv")
    var vb=gh.innerHTML
    gh.innerHTML=vb+"<div class='dffchy' id='ss-"+yyssyq+"' onclick='qkssyq("+yyssyq+")'><div class='dcyegyg' style='background-image: "+d+";'></div><div class='deddede'>"+a+"</div><div class='greevfe' onclick='delssyq("+yyssyq+")'></div></div>"
}

function delssyq(a){           //删除搜索引擎
   console.log(a)
    document.getElementById("ss-"+a).remove()
    ssysc.push(a)
    lsbfh=1
    dhuedhu()
}


function liersc(y){         //删除历史记录
    lierysc++
    lier[y-1]="del"
    document.getElementById("lr-"+y).remove()
    lierjlnjn()
}

function lieradd(cf,kl,t){          //添加历史记录
var xrcks=lier.length+1
lier.push(cf+"``|```"+String(kl)+"``|```"+t)

console.log(cf+"``|```"+String(kl)+"``|```"+t)

    var sourceNode = document.getElementById("lr-0");
    var clonedNode = sourceNode.cloneNode(true);
    clonedNode.setAttribute("id", "lr-"+xrcks);
    sourceNode.parentNode.appendChild(clonedNode);

        var ynr=""
        document.getElementById("lr-"+xrcks).innerHTML=ynr+"<div class='bghedb' onclick=duhjuiejdi('"+kl+"')>"+cf+"</div>"
        var ynr=document.getElementById("lr-"+xrcks).innerHTML
        document.getElementById("lr-"+xrcks).innerHTML=ynr+"<div class='cececv'>"+t+"</div>"
        var ynr=document.getElementById("lr-"+xrcks).innerHTML
        document.getElementById("lr-"+xrcks).innerHTML=ynr+"<div class='dgeyuh' style='right:5px;background-image: url(img/bqck/del.png);' title='删除' onclick='liersc("+xrcks+")'></div>"
        document.getElementById("lr-"+xrcks).style.display="block"
        lierjlnjn()
}

function toCode (str) {  //加密字符串
    //定义密钥，36个字母和数字
    var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var len = key.length;  
    var a = key.split("");  
    var s = "",b, b1, b2, b3;  
    for (var i = 0; i <str.length; i ++) {  
        b = str.charCodeAt(i);  
        b1 = b % len;  
        b = (b - b1) / len;  
        b2 = b % len;  
        b = (b - b2) / len;  
        b3 = b % len;  
        s += a[b3] + a[b2] + a[b1];  
    }
    return s;  
}
function fromCode (str) {                 //解密字符串
    //定义密钥，36个字母和数字
    var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var len = key.length;  
    var b, b1, b2, b3, d = 0, s;  
    s = new Array(Math.floor(str.length / 3));  
    b = s.length;  
    for (var i = 0; i < b; i ++) {  
        b1 = key.indexOf(str.charAt(d));  
        d ++;
        b2 = key.indexOf(str.charAt(d));  
        d ++;
        b3 = key.indexOf(str.charAt(d));  
        d ++;
        s[i] = b1 * len * len + b2 * len + b3  
    }
    b = eval("String.fromCharCode(" + s.join(',') + ")");  
    return b ;  
}





