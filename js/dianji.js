var kscd=0
var altanx=0
var ctrlanx=0
var kyymndk=0


function dsfgcwc(){
   // alert("Za")
var src=document.getElementById("fffffbqnr").value;
var bt=document.getElementById("fffffbqbt").value;
var btmd=document.getElementById("fffffbqbtmd").value;
var ys=document.getElementById("fffffbqys").value;
var wzx=document.getElementById("fffffbqwzx").value;
var wzy=document.getElementById("fffffbqwzy").value;
var gd=document.getElementById("fffffbqgd").value;
var kd=document.getElementById("fffffbqkd").value;
var bymh=document.getElementById("fffffbqbymh").value;
var nrys=document.getElementById("fffdssbqys").value;


var azck=0
var sjxr=src

var     ddd=sjxr.substring(0,1)
if (src==""){
var   sjxr="bianqian.html?"+nrys+"$$$null"
var azck=1
}else{

if(ddd=="+"){

var sjxr=     src.substring(1,src.length) 

}else{

    var   sjxr="bianqian.html?"+nrys+"$$$"+String(src)
 var    azck=1
}
}




//(src,gd,kd,wzx,wzy,bjys,bjbtmd,ckbmh,ckbt,sfgd,mod,xycks,ydnb)
add(sjxr,gd,kd,wzx,wzy,ys,btmd,bymh,bt,undefined,undefined,undefined,azck)
document.getElementById("xjckym").style.display="none"
kscd=0

}






function xslb(){
    if (kscd==0){
        document.getElementById("xjckym").style.display="block"
        kscd=1
    }else{
        document.getElementById("xjckym").style.display="none"
        kscd=0
    }

}


window.onkeydown=function(event){
    var code = event.keyCode;
    console.log(code)
    if(code==18){
      //  console.log("ui")
        altanx=1
    }
    if(code==17){
        //  console.log("ui")
          ctrlanx=1
      }
}
window.onkeyup=function(event){
  bedyhb()
    var code = event.keyCode;
   // console.log(code)
    if(code ==18){
        altanx=0
       // console.log("wi")
    }
    if(code==17){
        //  console.log("ui")
        ctrlanx=0
      }
}

document.onkeydown=function(event){                      //回车判断
    var code = event.keyCode;
    //console.log(code)
    if(code ==13){
        if(srkyzk==1){
          //  console.log("za")
          if(altanx==1){
            fanyssk(1)
             altanx=0
          }else if(ctrlanx==1){
            fdfsfr()
          }else{
            fanyssk(0)
          }

        }
    }
}

function ndlssk(){                    //搜索按钮
    if(srkyzk==1){
        //  console.log("za")
        if(altanx==1){
          fanyssk(1)
           altanx=0
        }else if(ctrlanx==1){
          fdfsfr()
        }else{
          fanyssk(0)
        }

      }
}



document.oncontextmenu = function(){         //禁止右键
  return false;
}





function fanyssk(ms){          //搜索
    
    var url=document.getElementById("zhusrk").value
    if(ms==1){
        var urlxz=ssfky[morss]
        var ssfy="-翻译 "
    }
    if(ms==0){
        var urlxz=ssk[morss]
        var ssfy="-搜索 "
    }



    document.getElementById("zhusrk").value=""
    lieradd(ssmc[morss]+ssfy+url,urlxz+url,today.getFullYear()+"年"+(today.getMonth()+1)+"月"+today.getDate()+"日   "+timeClock())
    window.open(urlxz+url)
}


function fdfsfr(){         //窗口内搜索
    var url=document.getElementById("zhusrk").value
    if(zcnbkd[morss]=="t"){
      document.getElementById("zhusrk").value=""
      add(ssk[morss]+url,"450px","850px","114px","114px","rgb(255,255,255)","1","0px",ssmc[morss]+"-搜索 "+url,undefined,undefined,undefined,0)
    }else{
      add("not.html?这个搜索引擎不支持在内部显示","150px","800px","114px","114px","rgb(255,255,255)","1","0px","AzNotFound","hf",undefined,undefined,0)
    }
    var ssfy="-内部搜索 "
    lieradd(ssmc[morss]+ssfy+url,urlxz+url,today.getFullYear()+"年"+(today.getMonth()+1)+"月"+today.getDate()+"日   "+timeClock())
    fxsrk()
}





function qkssyq(bn){               //切换搜索引擎
  if(lsbfh==1){
    bn=0
    lsbfh=0
  }
  morss=bn
 
  dhuedhu()

  document.getElementById("ssxz").style.WebkitMaskImage=sstbk[morss]
document.getElementById("ssxz").style.maskImage=sstbk[morss]
document.getElementById("xsbvbv").style.left="-150"
document.getElementById("xsbvbv").style.display="none"
document.getElementById("tihsbd").style.display="none"
}



function rgttgtg(){
  setTimeout(function(){
    document.getElementById("gtrgt").style.display="none"
    document.getElementById("xhbdkb").style.display="block"
    ssyqtj=1
  },100)
}

function srkfhjj(){
  document.getElementById("gtrgt").style.display="block"
  document.getElementById("xhbdkb").style.display="none"
  ssyqtj=0
}



function xdeuuj(){
  srkfhjj()
  var a=document.getElementById("yghvfyuh").value
  var b=document.getElementById("deedegvref").value
  var c=document.getElementById("ewrcerswc").value
  var d="url("+document.getElementById("vgtrcrf").value+")"
  if(kyymndk==1){
    e="t"
  }else{
    e="f"
  }
  kyymndk=0

  tjssyq(a,b,c,d,e)

  setTimeout("srkfhjj()",100)
}



function ymnxsqh(x){
  kyymndk=x
if(x==1){
  document.getElementById("xzyhusedh").style.left="185px"
}
if(x==0){
  document.getElementById("xzyhusedh").style.left="425px"
}


}


function ssyqtbyl(){
  var d=document.getElementById("vgtrcrf").value
  document.getElementById("xbhjuiko").style.backgroundImage= "url("+d+")"     
}

function swenj(){
  setTimeout("srkfhjj()",100)
  
}
function dccrdfg(url){
  var urlxz=ssk[morss]
  document.getElementById("zhusrk").value=""
  document.getElementById("foirjco").style.display="none"
  window.open(urlxz+url)
}


function jzssjy(xd){                      //从百度返回搜索建议
  var script = document.createElement("script");
  script.src = "https://www.baidu.com/su?&wd=" + encodeURI(xd.trim()) +
    "&p=3&cb=handleSuggestion";
  document.body.appendChild(script);
}
function handleSuggestion(res) {
  var result = res.s;
  // 前8个项
  if (result.length > 7) {
    result = result.slice(0, 8)
  }
  document.getElementById("dnhujxdc").innerHTML=""
  for (let i = 0; i < result.length; i++) {
    var fghu=document.getElementById("dnhujxdc").innerHTML
    document.getElementById("dnhujxdc").innerHTML=fghu+"<div class='djuei8' onclick=dccrdfg('"+result[i]+"')>"+result[i]+"</div>"

    document.getElementById("dnhujxdc").style.height=result.length*30+"px"
    document.getElementById("foirjco").style.height=(result.length+1)*30+"px"
    
  }
  (function () {
    var s = document.querySelectorAll('script');
    for (var i = 1, len = s.length; i < len; i++) {
      document.body.removeChild(s[i]);
    }
  })
}

function bedyhb(){
  console.log(srkyzk)
  if(srkyzk==1){
    var url=document.getElementById("zhusrk").value
    console.log(url)
    if(url==""){
      document.getElementById("kslj").style.display="block"
      document.getElementById("foirjco").style.display="none"
      return
    }else{
      document.getElementById("foirjco").style.display="block"
      document.getElementById("kslj").style.display="none"
      jzssjy(url)
    }
  }else{
   // document.getElementById("foirjco").style.display="none"
  }
}

function swhuhuwsh(){
  var dhuhuie=Math.floor(Math.random() * mymj_az.length)
  document.getElementById("mymj").innerHTML=mymj_az[dhuhuie]
}

function sxnju(){
  setTimeout("vdfvvfv()",100)
}

function xssxx(){
  ///alert("za")
}

function gbckbt(a,b){
  ckdxwzhy("ck"+a,undefined,undefined,undefined,undefined,undefined,undefined,b)
  document.getElementById("bt-"+a).innerHTML=b
  //console.log("ck"+a,undefined,undefined,undefined,undefined,undefined,undefined,b)
}


function dcegcy(k,l){
if(k==1){
  azclose("ck"+l)
}
if(k==4){
  ckgd("ck"+l)
}
if(k==5){
  azgd("ck"+l)
}
if(k==6){
  bdcgbhg(l)
}
}

function duhjuiejdi(gh){
  window.open(gh)
}

function lieralldel(){
  document.getElementById("lierjlu").innerHTML="<div class='dcgud3' style='display: block;' onclick='lieralldel()'>清空全部历史记录</div>"
  lier=[]
 lierysc=0
 lierjlnjn()
}

function cdhgvj(){

}

function cbrsdju(){
  var hgy=daocall()
  document.getElementById("edchiki").value=hgy
}

function nhdckj(x){
  setTimeout(setthinoff(x),130)
}
function vdrrgnb(x){
  setTimeout(showsetthin(x),130)
}

function setthinoff(x){            //隐藏设置窗口
  document.getElementById("set-"+x).style.display="none"
  document.getElementById("suoyszdiv").style.display="none"
}

function showsetthin(x){             //显示设置窗口
  document.getElementById("set-"+x).style.display="block"
  document.getElementById("suoyszdiv").style.display="block"


if(x==1){
  document.getElementById("edchiki").value=""
}
if(x==2){
  document.getElementById("edbhjkbh").style.display="none"
  document.getElementById("csrfgv").value=""
}
if(x==4){
  document.getElementById("rufchuoho").value=""
}

}


function dscbik(){
  window.location.reload()
}

function dedxede(){
  var fgh= document.getElementById("dfvfvvf").value
  var src=document.getElementById("vfgtggt").value
  var sjxr=src

 var azck=0

var     ddd=sjxr.substring(0,1)
if (src==""){
var   sjxr="bianqian.html?"+"rgb(255,255,255)"+"$$$null"
var azck=1
}else{

if(ddd=="+"){

var sjxr=     src.substring(1,src.length) 

}else{

    var   sjxr="bianqian.html?"+"rgb(255,255,255)"+"$$$"+String(src)
 var    azck=1
}
}
  add(sjxr, "270px", "230px", "114px", "114px", "rgb(100,100,100)" ,"0.3", "5px" ,fgh, undefined, undefined ,undefined, azck)
  nhdckj(3)
}


function ecdvghtyve(){
  localStorage.clear();
  var v= document.getElementById("csrfgv").value
  daorall(v)
  document.getElementById("edbhjkbh").style.display="block"
}

function dcvghsv(){
  setthinoff(3)
  xslb()
}


function ndcinikn(x){
var gfs="url(img/bkg/"+x+".jpg)"
document.getElementById("dqbz").style.backgroundImage =gfs
rgfgyubg=gfs
}
function hbfryics(c){
  var gfs="url("+c+")"
  document.getElementById("dqbz").style.backgroundImage =gfs
rgfgyubg=gfs
}
function ednuiucxn(){
  var gfs="url(http://shenzilong.cn/util/redirect_to_bing_daily_picture_address)"
  document.getElementById("dqbz").style.backgroundImage =gfs
rgfgyubg=gfs
}

function vfrhjbn(){
  bzqh(rgfgyubg)
  nefrijmi(rgfgyubg)
  var gth=document.getElementById("bdtvvr").value
  rggrdgr(gth)
}

function eduijmjiu(hr){
  document.getElementById("bdtvvr").value=hr
}










//页面最小尺寸:880,800