
function dispBox(num){
    var res=document.querySelector(".clk")
    res.value+=num
}
function equal(){

    var res=document.querySelector(".clk").value;
var out=eval(res)
document.querySelector(".clk").value=out
}
function del(){
    var res=document.querySelector(".clk").value;
    var data=res.slice(0,-1)
    document.querySelector(".clk").value=data
    

}