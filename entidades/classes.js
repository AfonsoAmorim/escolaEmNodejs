let mediaAlunos = require("../funcoes/functions.js");
let feedbackProfessorA = require("../funcoes/functions.js");

class Professor{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        
    }
}

class Aluno extends Professor{
    constructor(nome,idade,registroAluno,classe,serieAno){
        super(nome);
        this.idade=idade;
        this.registroAluno=registroAluno;
        this.classe=classe;
        this.serieAno=serieAno;
    }
}

let professorTitular = new Professor("Leandro",44);
let alunoAds = new Aluno("João Alves",23,5544,"ADS","3° Ano");

console.log(professorTitular);
console.log(alunoAds);
console.log(`A média do aluno ${alunoAds.nome} é: `+ mediaAlunos(4,4,5,8));
console.log(feedbackProfessorA(8));