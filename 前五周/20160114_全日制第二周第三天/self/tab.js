var oTab = document.getElementById("tab");
var tHead = oTab.tHead;
var tBody = oTab.tBodies[0];
var oThs = tHead.rows[0].cells;
var oTrs = tBody.rows;


function bindData(){
    var frg=document.createDocumentFragment();
    for(var i=0;i<jsonAry.length;i++){
        var cur = jsonAry[i];
        cur.sex=cur.sex===0?"男":" 女";
        var oTr=document.createElement("tr");
        for(var key in cur){
            var oTd=document.createElement("td");
            oTd.innerHTML=cur[key];
            oTr.appendChild(oTd);
        }
        frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg=null;
}
bindData();

function changeBg(){
    for(var i=0;i<oTrs.length;i++){
        oTrs[i].className="bg"+i%2;
    }
}
changeBg();

function sortList(){

}