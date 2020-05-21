let lista: string[] = []
let alfabeto = ""
let qtdeletras = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    lista = []
    alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    qtdeletras = alfabeto.length
    for (let índice = 0; índice <= qtdeletras; índice++) {
        basic.showString(alfabeto.charAt(índice))
        lista.push(alfabeto.charAt(índice))
    }
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    lista.reverse()
    for (let valor of lista) {
        basic.showString("" + (valor))
    }
})
