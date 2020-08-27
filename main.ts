let lista: string[] = []
let alfabeto = ""
let qtdeletras = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    lista = []
    alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    qtdeletras = alfabeto.length
    basic.showNumber(qtdeletras)
    for (let índice = 0; índice <= qtdeletras - 1; índice++) {
        basic.showString(alfabeto.charAt(índice))
        lista.push(alfabeto.charAt(índice))
    }
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    lista.reverse()
    basic.showNumber(lista.length)
    for (let valor of lista) {
        basic.showString("" + (valor))
    }
    basic.showIcon(IconNames.SmallHeart)
})
