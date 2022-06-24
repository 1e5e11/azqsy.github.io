//var jijxr=0;
//var ckjilu=[];
var cssj=""
var zhutijilu="";
function jiluck(src,gd,kd,wzx,wzy,bjys,bjbtmd,ckbmh,ckbt,xrsx,ydnb){                           //添加窗口记录
if(isInArray(ckjilu,"ck"+xrsx)==true){
    if("ck"+xrsx==ckjilu[ckjilu.length]){
        jijxr--
    }
    arrremove(ckjilu,"ck"+xrsx)
    localStorage.setItem("az09",sz_to_zfc(ckjilu))        //
}else{
    jijxr++
    localStorage.setItem("az10",jijxr)             //
}




    var yjild=src+"*||*"+gd+"*||*"+kd+"*||*"+wzx+"*||*"+wzy+"*||*"+bjys+"*||*"+bjbtmd+"*||*"+ckbmh+"*||*"+ckbt+"*||*"+undefined+"*||*"+ydnb
    localStorage.setItem("ckxg-"+xrsx,yjild)
}
function jilucksc(idm){                        //删除窗口记录
    //console.log(idm)
    localStorage.removeItem("ckxg-"+ idm.split("ck")[1] )
    //console.log( ckjilu)
     ckjilu.push(String(idm))
     localStorage.setItem("az09",sz_to_zfc(ckjilu))              //
}






function jiazaick(){                            //恢复窗口
    //console.log("Az")
    if(localStorage.getItem("az10")==null){
        jijxr=0;
        ckjilu=["az","az"];
        localStorage.setItem("az09",sz_to_zfc(ckjilu));                  //
        localStorage.setItem("az10", jijxr);                        //
        localStorage.setItem("az11","")                     //
    }else{
        jijxr=localStorage.getItem("az10");
        ckjilu=localStorage.getItem("az09");
        ckjilu=zfc_to_sz(ckjilu)

        //console.log(ckjilu)
        //console.log(jijxr)
        for(jkl=1;jkl<jijxr+1;jkl++){


            if(isInArray(ckjilu,"ck"+jkl)==true){}else{
            var cssj=localStorage.getItem("ckxg-"+jkl)


            if(cssj){
                console.log(cssj)
                add(cssj.split("*||*")[0],cssj.split("*||*")[1],cssj.split("*||*")[2],cssj.split("*||*")[3],cssj.split("*||*")[4],cssj.split("*||*")[5],cssj.split("*||*")[6],cssj.split("*||*")[7],cssj.split("*||*")[8],cssj.split("*||*")[9],"hf",jkl,0)
                //jijxr--
                    }
            
            
            
            }
            }
          /*  //console.log(localStorage.getItem("az11"))
            if(localStorage.getItem("az11")==""){}else{
                hfgdzt()
            }*/
    }
}



function ckdxwzhy(idm,ckx,cky,ckw,ckh,ckgd,src,tab){                             //更改窗口记录参数
var zksz=[];
var yuanlaide=localStorage.getItem("ckxg-"+idm.split("ck")[1])
//console.log(yuanlaide)
for(var tgh=0;tgh<yuanlaide.split("*||*").length;tgh++) {
    zksz.push(yuanlaide.split("*||*")[tgh])
}







if(ckx==undefined){}else{
    zksz.splice(3, 1, ckx)
}
if(cky==undefined){}else{
    zksz.splice(4, 1, cky)
}
if(ckw==undefined){}else{
    zksz.splice(2, 1, ckw)
}
if(ckh==undefined){}else{
    zksz.splice(1, 1, ckh)
}
if(ckgd==undefined){}else{
    zksz.splice(9, 1, ckgd)
}
if(src==undefined){}else{
    zksz.splice(0, 1, src)
}
if(tab==undefined){}else{
    zksz.splice(8, 1, tab)
}
//console.log(zksz)

var yuanlaide=""
for(var guj=0;guj<zksz.length-1;guj++){
    yuanlaide=yuanlaide+zksz[guj]+"*||*"
}
yuanlaide=yuanlaide+zksz[zksz.length-1]
localStorage.setItem("ckxg-"+idm.split("ck")[1],yuanlaide)

}



/*

function ckgdjl(gdsz){                     //窗口固定记录
    var hef=gdsz.splice(0,4);
    if(hef[0]==undefined){}else{
        //console.log(hef)
        localStorage.setItem("az11",sz_to_zfc(hef))
    }
}
function hfgdzt(){                   //恢复固定状态
var ckcssz=zfc_to_sz(localStorage.getItem("az11"));
if(ckcssz[0]==undefined){}else{
for(var fhu=0;fhu<ckcssz.length;fhu++){
    azgd(ckcssz[fhu]);
}
}
}
*/



function zfc_to_sz(lb){             //字符串转数组
    var lssz=[];
    ////console.log(lb)
    if(lb.indexOf("*||*")>-1){
        for(var tgh=0;tgh<lb.split("*||*").length;tgh++) {
            lssz.push(lb.split("*||*")[tgh])
        }
    }else{
        lssz.push(lb)

}
    return lssz
}


function sz_to_zfc(sz){            //数组转字符串
    var lssz="";
    for(var tgh=0;tgh<sz.length-1;tgh++) {
       var lssz=lssz+sz[tgh]+"*||*"
    }
    var lssz=lssz+sz[sz.length-1]
return lssz
}




 
function dhuedhu(){                //存储搜索引擎
    localStorage.setItem("az01",sz_to_zfc(ssmc))
    localStorage.setItem("az02",sz_to_zfc(ssk))
    localStorage.setItem("az03",sz_to_zfc(ssfky))
    localStorage.setItem("az04",sz_to_zfc(sstbk))
    localStorage.setItem("az05",sz_to_zfc(zcnbkd))
    localStorage.setItem("az06",sz_to_zfc(ssysc))

    localStorage.setItem("az07",morss)
}


function sxnuj(){    //导入搜索引擎数据
    if(localStorage.getItem("az01")==undefined){}else{
        ssmc= zfc_to_sz( localStorage.getItem("az01"))
        ssk=zfc_to_sz(localStorage.getItem("az02"))
        ssfky=zfc_to_sz(localStorage.getItem("az03"))
        sstbk=zfc_to_sz(localStorage.getItem("az04"))
        zcnbkd=zfc_to_sz(localStorage.getItem("az05"))
        ssysc=zfc_to_sz(localStorage.getItem("az06"))
    
        localStorage.getItem("az07")
        
        qkssyq(Number(localStorage.getItem("az07")))

    for(var jkr=3;jkr<ssmc.length;jkr++){
        console.log(ssysc,String(jkr))
    if(isInArray(ssysc,String(jkr))==true){}else{
    var a=ssmc[jkr]
    var b=ssk[jkr]
    var c=ssfky[jkr]
    var d=sstbk[jkr]
    var e=zcnbkd[jkr]
    
        tjssyq(a,b,c,d,e,"hf")
        } 
      }
    }
}


function nxuhhnxc(){        //窗口最小化记录
    if(yclb.length==0){
        localStorage.setItem("azzxh","no")
    }else{
        localStorage.setItem("azzxh",sz_to_zfc(yclb))
    }
}
function dbhbubnud(){//窗口最小化导入
var fff=localStorage.getItem("azzxh")    
if(fff=="no"||fff==undefined){
    return
}else{
    var dgy=zfc_to_sz(fff)
    for(var jkr=0;jkr<dgy.length;jkr++){
        console.log(dgy[jkr])
        bdcgbhg(dgy[jkr])
        } 
}

}


function lierjlnjn(){              //存储历史记录
    if(lier.length==0){
        localStorage.setItem("az08","no")
    }else{

        
        localStorage.setItem("az08",sz_to_zfc(lier))
    }
   
}
function lijlhf(){    //导入历史记录
    var fff=localStorage.getItem("az08")    
    if(fff=="no"||fff==undefined){
        return
    }else{
        var dgy=zfc_to_sz(fff)
        var hkl=arrremove(dgy,"del")
        for(var jkr=0;jkr<hkl.length;jkr++){
            console.log(hkl[jkr])
            var fgh=hkl[jkr]
            console.log(fgh)
            lieradd(fgh.split("``|```")[0],fgh.split("``|```")[1],fgh.split("``|```")[2])
            } 
    }
}


function nefrijmi(jh){                //保存壁纸
    localStorage.setItem("az12",jh)
}
function cuijmniu(){                //读取壁纸

    var bzurl=localStorage.getItem("az12")
    bzqh(bzurl)
}
function rggrdgr(jh){                //保存颜色
    localStorage.setItem("az13",jh)
}
function thynkyha(){                //读取颜色

    var bzurl=localStorage.getItem("az13")
    if(bzurl==undefined){
        zhutiyanse="#65b552"
    }else{
        zhutiyanse=bzurl
    }
}




function daocall(){           //导出全部数据
    var cdf=""
    for (var i = 0; i < localStorage.length; i++) {
        cdf=cdf+localStorage.key(i) + "ن" + localStorage.getItem(localStorage.key(i))+"ˆ†è¾“ه…¥و³•è®"
 }

 console.log(toCode (cdf));
 return toCode (cdf)
}           


function daorall(v){      //导入全部数据
    
    var tgh=fromCode (v)
    for (var i = 0; i < tgh.split("ˆ†è¾“ه…¥و³•è®").length-1; i++) {
        var ju=tgh.split("ˆ†è¾“ه…¥و³•è®")[i]
        localStorage.setItem(ju.split("ن")[0],ju.split("ن")[1])
    }
}












/*
保存数据：localStorage.setItem(key,value);
读取数据：localStorage.getItem(key);
删除单个数据：localStorage.removeItem(key);
删除所有数据：localStorage.clear();
得到某个索引的key：localStorage.key(index); 
*/