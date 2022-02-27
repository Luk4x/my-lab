/*
[ ] Escreva um programa onde, você cria uma função geradora de desconto. 

- A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um boolean que diz se é a primeira compra do cliente ou não, um boolean que diz se o cliente vai pagar a vista ou não)

- Os descontos funcionam da seguinte forma: 

    - Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto 

    - Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto     

    - Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20% 


    - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
    
    - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

    - Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10% 



    - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto     

    - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

    - Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10% 



    - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto
    
    - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto 

    - Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO


    - A função deve imprimir na tela: 

    - Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.       

   - Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.
*/

const prompt = require('prompt-sync')();
console.log();

const discount = function (name, totalPurchaseAmount, firstPurchase, payInSight) {
    if (!firstPurchase && !payInSight && totalPurchaseAmount < 500) {
        let discountCoupon = Math.round(Math.random() * (20 - 10) + 10);
        console.log(`Thanks for shopping with us ${name}.\nIn total, your purchase was R$${totalPurchaseAmount}.\nKeep this discount coupon which is equivalent to ${discountCoupon}% off for your next purchase!\n`);
    } else {
        let discount = 0;
        let totalPurchaseAmountDiscount = 0;
        let newTotalPurchaseAmount = 0;

        if (firstPurchase) {
            if (payInSight) {
                if (totalPurchaseAmount > 1000) {
                    discount = 30;
                } else if (totalPurchaseAmount > 500 && totalPurchaseAmount < 1000) {
                    discount = 25;
                } else {
                    discount = 20;
                }
            } else {
                if (totalPurchaseAmount > 1000) {
                    discount = 20;
                } else if (totalPurchaseAmount > 500 && totalPurchaseAmount < 1000) {
                    discount = 15;
                } else {
                    discount = 10;
                }
            }
        } else {
            if (payInSight) {
                if (totalPurchaseAmount > 1000) {
                    discount = 20;
                } else if (totalPurchaseAmount > 500 && totalPurchaseAmount < 1000) {
                    discount = 15;
                } else {
                    discount = 10;
                }
            } else {
                if (totalPurchaseAmount > 1000) {
                    discount = 10;
                } else if (totalPurchaseAmount > 500 && totalPurchaseAmount < 1000) {
                    discount = 5;
                }
            }
        }

        totalPurchaseAmountDiscount += (totalPurchaseAmount * discount) / 100;
        newTotalPurchaseAmount = totalPurchaseAmount - totalPurchaseAmountDiscount;

        console.log(`Thanks for shopping with us ${name}.\nIn total, your purchase was R$${totalPurchaseAmount.toFixed(2)}.\nBut you received a discount of R$${totalPurchaseAmountDiscount.toFixed(2)} (${discount}%), so you will only pay R$${newTotalPurchaseAmount.toFixed(2)}.\n`);
    }
};

let name = prompt('Enter the client name: ');
let totalPurchaseAmount = parseInt(prompt('Enter the total purchase amount: R$'));
let firstPurchase = prompt('Is this your first purchase here [y/n]? ');
firstPurchase = firstPurchase === 'y' ? true : false;
let payInSight = prompt('Will payment be in sight [y/n]? ');
payInSight = payInSight === 'y' ? true : false;
console.log();

discount(name, totalPurchaseAmount, firstPurchase, payInSight);
