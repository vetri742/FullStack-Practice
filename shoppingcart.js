function shopping(budget,purchases)
{
    let balance=budget;
    let ItemsBought=0;
    for(let i=0;i<purchases.length;i++)
    {
        let currentItem=purchases[i];
        if(balance>=currentItem)
        {
            ItemsBought+=1;
            balance-=currentItem;
            console.log(`\Success you bought this Item for $${currentItem}, Balance amount is $${balance}`)

        }
        else
        {
            console.log("oops! Not enough Money")
        }
        

    }
    console.log (`Total Items Bought ${ItemsBought}`)
}
console.log("Shopping list of User 1 ")
shopping(1000,[100,45,89,800])

console.log("Shopping list of User 2")
shopping(3000,[299,467,992,14])