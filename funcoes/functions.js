let mediaFinal = function (a,b,c,d) {
    return (a+b+c+d)/4
}

let feedbackProfessor = function (avaliacaoProfessor) {//mensura qualidade do professor
    
    if(avaliacaoProfessor <= 4){
        console.log(`Professor com avaliação baixa, necessário ação.Nota: ` + avaliacaoProfessor);
    }else if(avaliacaoProfessor <=7){
        console.log(`Professor com avaliação moderada, necessário ação.Nota: ` + avaliacaoProfessor);
    }else{
        console.log(`Professor com ótima avaliação.Nota: ` + avaliacaoProfessor);
    }return;
  
}










module.exports = mediaFinal;
module.exports = feedbackProfessor;