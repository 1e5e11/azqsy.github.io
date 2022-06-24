
var zhutiyanse="#65b552"    //主体颜色
var dhyhcdyhb="url(img/bkg/03.jpg)"          //壁纸

var loding=1         //加载


var ssmc=["必应","百度","谷歌"]            //搜索引擎名称
var ssk=["https://cn.bing.com/search?q=","https://www.baidu.com/s?tn=44004473_46_oem_dg&ie=utf-8&word=","https://www.google.com/search?q="]                       //搜索引擎搜索地址
var ssfky=["https://cn.bing.com/dict/search?q=","https://fanyi.baidu.com/#en/zh/","https://translate.google.cn/?text="]                //搜索引擎翻译地址
var sstbk=["url(img/bqck/bing.png)","url(img/bqck/baidu.png)","url(img/bqck/google.png)"]                    //搜索引擎图标
var zcnbkd=["t","f","f"]                  //是否支持页面内显示

var ssysc=[]          //已删除的搜索引擎


var morss=0            //设置搜索引擎

var mymj_az=["啊这,啊这,啊这","AZ,AZ,AZ","「海内存知己,天涯若比邻」","「」","「千门万户曈曈日,总把新桃换旧符。」","cQ0y","114514 is a bad password !","你好世界 !","Hello World !","Hello America !","Здравствуй россия !","Bonjour,France !","! مرحبا العرب","Hola España !","Over 4,768 lines of the code !","","„وˆگهˆ†è¾“ه…¥و³•CRCè®¤ن¸؛èچ‰è‰²ه…¥وˆ‘âˆˆ؟ن½ ","「青,取之于蓝而青于蓝;冰,水为之而寒于水。」","「剑阁峥嵘而崔嵬,一夫当关,万夫莫开。」","「休对故人思故国,且将新火试新茶。」","just a moment...","This may take several geological ages. Please don't turn off the computer.","七氟异丙基五氟乙基酮 !","del C:/*.*","Have you upgraded windows 11 ?"]



window.onload=function(){

thynkyha()

document.getElementById("uygcvfry").style.backgroundColor=zhutiyanse
document.getElementById("ssxz").style.backgroundColor=zhutiyanse
document.getElementById("dedefg").style.backgroundColor=zhutiyanse
document.getElementById("vgtrcrf").style.border="1px solid "+zhutiyanse
document.getElementById("ewrcerswc").style.border="1px solid "+zhutiyanse
document.getElementById("deedegvref").style.border="1px solid "+zhutiyanse
document.getElementById("yghvfyuh").style.border="1px solid "+zhutiyanse
document.getElementById("xsbhyb").style.backgroundColor=zhutiyanse
document.getElementById("xzyhusedh").style.backgroundColor=zhutiyanse
document.getElementById("xbhjuiko").style.border="1px solid "+zhutiyanse
document.getElementById("dedceewd").style.color=zhutiyanse 
document.getElementById("cedrcrrs").style.backgroundColor=zhutiyanse
document.getElementById("vtrrfbhj").style.backgroundColor=zhutiyanse
document.getElementById("edchiki").style.border="1px solid "+zhutiyanse
document.getElementById("csrfgv").style.border="1px solid "+zhutiyanse
document.getElementById("dfvfvvf").style.border="1px solid "+zhutiyanse
document.getElementById("vfgtggt").style.border="1px solid "+zhutiyanse
document.getElementById("edefdref").style.backgroundColor=zhutiyanse
document.getElementById("grftdvbtg").style.backgroundColor=zhutiyanse
document.getElementById("bdtvvr").value=zhutiyanse
document.getElementById("rufchuoho").style.border="1px solid "+zhutiyanse
document.getElementById("rfnkhnju").style.backgroundColor=zhutiyanse




document.getElementById("dqbz").style.backgroundImage=dhyhcdyhb







document.getElementById("ssxz").style.WebkitMaskImage=sstbk[morss]
document.getElementById("ssxz").style.maskImage=sstbk[morss]



tiaozdaxiao()
jiazaick()
sxnuj()
swhuhuwsh()
setInterval(timeClock , 1000)
CalConv()
timeClock()
dbhbubnud()
lijlhf()
cuijmniu()



delod()
}

function xsbhyb(){
   /* var browser = navigator.appName;//获取浏览器名字
    var b_version = navigator.appVersion;//获取浏览器版本信息
    var version = parseFloat(b_version);//提取浏览器版本号*/

if(loding==0){
    if(document.body.clientWidth<880){
        document.getElementById("bryl").style.display="block"
        document.getElementById("shuhde").innerHTML="你的窗口尺寸太小了,无法正常显示.<br>Your window size is too small for this interface to display."
    }else if(document.body.clientHeight<800){
        document.getElementById("bryl").style.display="block"
        document.getElementById("shuhde").innerHTML="你的窗口尺寸太小了,无法正常显示.<br>Your window size is too small for this interface to display."
    }else{
        document.getElementById("bryl").style.display="none"
        document.getElementById("shuhde").innerHTML="az"
    }
  }
}

function delod(){
    loding=0
    xsbhyb()
}


window.addEventListener('resize', e => { 
    xsbhyb()
                    }, false);

                    function timeClock(){
                        newDate = new Date();
                        hour = newDate.getHours();
                        if (hour < 10){
                            hour = "0" + hour;
                        }
                        minu = newDate.getMinutes();
                        if (minu < 10){
                            minu = "0" + minu;
                        }
                 /*       seco =newDate.getSeconds();
                        if (seco < 10){
                            seco = "0" + seco;
                        }
                        */
                       
                        document.getElementById("sjian").innerHTML = hour+":"+minu
                        return hour+":"+minu
                    }


function bzqh(jl){
    if(jl==undefined){
        rgfgyubg="url(img/bkg/03.jpg)"
    }else{
        rgfgyubg=jl
    }
    document.getElementById("dqbz").style.backgroundImage =rgfgyubg
    document.getElementById("ymbeijin").style.backgroundImage=rgfgyubg
}