//var a = 30;
//var b = 15;
//var c = a + b;
//console.log(c);

//var d = 20;
//var e = 2;
//var f = d * e;
//console.log (f);

//var g = 20
//var h = 2
//var i = g / h
//console. log (i)
 //var j  = 15;
//j++
//console.log(j)

//var x = 10;
// x += 6;
//console.log(x);
/*var idade = 30;
var maior30 = idade > 20;
var menor30 = idade < 35;
console.log("Maior que 30 ", maior30);
console.log("Menor que 30 ", menor30 );
var idade = 20;
var maior20 = idade > 10;
var menor20 = idade < 30;
 var gratuidade = maior20 || menor20;
 console.log("Idade" ,  idade);
 console.log("Maior que  20" , maior20);
 console.log("Menor que 20" , menor20);
 console.log("Tem direito a Gratuidade", gratuidade);*/
 /*var idade= 19;
 if (idade >= 18)
 console.log("Pode")
else
 console.log(" Não Pode")*/
/*var idade = 18
 idade >= 18 ? console.log("pode"):console.log("Não pode")*/

/*function totaldelanches(lan1, lan2){
var pessoaA = lan1
var pessoaB = lan2
var total = ( pessoaA + pessoaB)

return total


}
 var totaldelanches = ( 2 + 1 )
 console.log("O total de lanches foi de " + totaldelanches)*/
 /*var total = function (lanche1 ,lanche2){
     

    return (  lanche1 + lanche2)
 }
 var t = total (1 , 2)
 console.log(t)*/

 //objeto
/*function quantascomeu (t1 , t2){
   return (t1 + t2);
}
var pessoa = {
  nome: "Julia",
  numero: [4 , 2],


total: function(){
return ( numero[0] + numero[1])}
}
console.log(pessoa.nome)
console.log(pessoa.total)*/
function criarAluno(nome ,n1, n2){

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
         media: function (){
           return (this.nota1 + this.nota2)/2
         }
       }
 }
var turma =[
criarAluno("Igor", 9, 6),
criarAluno("Joao", 7, 4),
criarAluno("Marcela", 8, 4)


]
var aluno = turma[0]

console.log(aluno)
console.log(aluno.media())












