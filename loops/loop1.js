var amount = 100;

var days = 60;

var interest = 2

for (let i = 1; i <= days; i++) {

    if (i % 4 === 0) {
        amount += interest
    }

    console.log("your amount for" + i + "th day" + amount + "<br>")
}
