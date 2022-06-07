export function calculateTotals(quantity, term){
    let totalQuantity, totalTerm;

    if(quantity <= 1000){

        totalQuantity = quantity * .25;

    } else if(quantity > 1001 && quantity <= 5000){

        totalQuantity = quantity * .2;

    } else if(quantity > 5001 && quantity <= 10000){

        totalQuantity = quantity * .15;

    } else{

        totalQuantity = quantity * .1

    }

    switch(term){
        case 3:
            totalTerm = quantity * .05;
        break;
        
        case 6:
            totalTerm = quantity * .1;
        break;

        case 12:
            totalTerm = quantity * .15;
        break;

        case 24:
            totalTerm = quantity * .2;
        break;

        default:
        break;
    }

    return totalQuantity + totalTerm + quantity;
}