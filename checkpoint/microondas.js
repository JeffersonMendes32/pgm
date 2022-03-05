function microondas (tipoPrato, tempoPreparo) {
    
    let validacaoTipoPrato; 
    

    let tempoPronto;
    let tempoQueimou;
    let tempoKaboom;
    switch (tipoPrato) {
        case "pipoca":
            validacaoTipoPrato = true; 
            tempoPronto = 10;
            tempoQueimou = 20;
            tempoKaboom = 30;
            break;
        case "macarrao":
            validacaoTipoPrato = true;
            tempoPronto = 8;
            tempoQueimou = 16;
            tempoKaboom = 24;
            break;
        case "carne":
            validacaoTipoPrato = true;
            tempoPronto = 15;
            tempoQueimou = 30;
            tempoKaboom = 45;
            break;
        case "feijao":
            validacaoTipoPrato = true;
            tempoPronto = 12;
            tempoQueimou = 24;
            tempoKaboom = 36;
            break;
        case "brigadeiro":
            validacaoTipoPrato = true;
            tempoPronto = 8;
            tempoQueimou = 16;
            tempoKaboom = 24;
            break;
        default:
            validacaoTipoPrato = false
            break;
    }
    let mensagem;
    if (tempoPreparo < tempoPronto){
        mensagem = "...321 Beep,beep, tempo insuficiente"
    }
    if (tempoPreparo == tempoPronto){
        mensagem = "...321 Beep,beep,Bom Apetite"
    }
    if (tempoPreparo > tempoPronto && tempoPreparo < tempoQueimou ) {
        mensagem = "...321 Beep,beep,uhhh,quase queimou hein."
    }
   
    if (tempoPreparo == tempoQueimou){
        mensagem = "...321 Beep,beep,vish,seu prato queimou."
    }
    if (tempoPreparo > tempoQueimou && tempoPreparo < tempoKaboom){
        mensagem = "...321 Beep,beep,cuidado,usando assim só vai adiantar a visita de um tecnico"
    }
    if (tempoPreparo == tempoKaboom){
        mensagem = "...321 Beep,beep,Deu ruim hahaha."
    }
    if (tempoPreparo > tempoKaboom) {
        mensagem = "Ai ja era,so comprando um novo."
    }
    if (!validacaoTipoPrato) {
        mensagem = "Que viagem é essa??? não temos!!!"
    }
    console.log(mensagem);
   
}
microondas ("brigadeiro",7);


