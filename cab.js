// call , apply and bind.
// call

const player1={
    fname:"virat",
    lname:"kohli",
    printPlayer:function(team,place){
        console.log(this.fname+""+this.lname + team +""+ place)
    }
};
player1.printPlayer();
 
const player2={
    fname:"sachin",
    lname:"tendulkar ",
   
};
//player1.printPlayer.call(player2,"Mi","wankhade");
//player1.printPlayer.call(player1,"rcb","chinaswamy");
player1.printPlayer.apply(player2,["mi","mumbai"])// in apply we give arguments inside an array
// in bind we create an variable and bind it,


const p=player1.printPlayer.bind(player1,"rcb","chinaswamy");
p();
