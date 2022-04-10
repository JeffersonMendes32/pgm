
class cadastro {
  constructor(nome, quantidadeFaltas, notas) {
      this.nome = nome;
      this.quantidadeFaltas = quantidadeFaltas;
      this.notas = notas;
  }
  calcularMedia() {
      let media = this.notas.reduce((nota, i) => {
          return nota + i;
      });
      return media / this.notas.length;
  }
  faltas() {
      return (this.quantidadeFaltas += 1);
  }
}
let curso = {
  nomeCurso: 'engenharia',
  notaAprovacao: 7,
  faltaMaxima: 3,
  listaEstudantes: [],
  listaResultado: [],
  adicionaAluno(nome, falta, notas) {
      let aluno = new cadastro(nome, falta, notas);
      this.listaEstudantes.push(aluno);
  },
  verificarSituacaoAluno(nome) {
      this.listaEstudantes.forEach((aluno) => {
          if (aluno.nome == nome) {
              let mediaParcial = aluno.notas.reduce((n, i) => {
                  return n + i;
              });
              let mediaFinal = mediaParcial / aluno.notas.length;
              if (aluno.quantidadeFaltas == this.faltaMaxima) {
                  let notaFinalComAcrescimo =
                      this.notaAprovacao + (this.notaAprovacao / 100) * 10;
                  if (mediaFinal >= notaFinalComAcrescimo) {
                      console.log(`TRUE`);
                  } else {
                      console.log(`FALSE`);
                  }
              } else {
                  if (mediaFinal >= this.notaAprovacao) {
                      console.log(`TRUE`);
                  } else {
                      console.log(`FALSE`);
                  }
              }
          }
      });
  },
  gerarLista() {
      this.listaEstudantes.forEach((aluno) => {
          let mediaParcial = aluno.notas.reduce((n, i) => {
              return n + i;
          });
          let mediaFinal = mediaParcial / aluno.notas.length;
          if (aluno.quantidadeFaltas == this.faltaMaxima) {
              let notaFinalComAcrescimo =
                  this.notaAprovacao + (this.notaAprovacao / 100) * 10;
              if (mediaFinal >= notaFinalComAcrescimo) {
                  this.listaResultado.push(`TRUE`);
              } else {
                  this.listaResultado.push(`FALSE`);
              }
          } else {
              if (mediaFinal >= this.notaAprovacao) {
                  this.listaResultado.push(`TRUE`);
              } else {
                  this.listaResultado.push(`FALSE`);
              }
          }
      });
  },
};
curso.adicionaAluno("Albert",1,[10,9.1,9,9.7]);
curso.adicionaAluno("Abe",3,[6,5,6.3,4.5]);
curso.adicionaAluno("Thomas",2,[9,9.5,9.4,9]);
curso.verificarSituacaoAluno('Albert');
curso.verificarSituacaoAluno('Abe');
curso.verificarSituacaoAluno('Thomas');
curso.gerarLista();
console.log(curso.listaResultado);
