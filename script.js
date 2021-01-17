var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

request.send();

request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    //1.Get all the countries from Asia continent /region using Filter function 
    var asiancountries = data.filter((countries) => countries.region === "Asia")
    console.log(asiancountries)
        //2.Get all the countries with population of less than 2 lacs using Filter function
    var popu = data.filter(pop => pop.population < 200000)
    console.log(popu)
        //3.Print the following details name, capital, flag using forEach function
    data.forEach((a, b) => {
        console.log(a.name, a.capital, a.flag)

    });
    //4.Print the total population of countries using reduce function
    var total = data.reduce((accumulator, currentvalue) => {
        return accumulator + currentvalue.population
    }, 0)
    console.log(total)
        //5.Print the country which use US Dollars as currency.
    var usdcountry = data.filter((item) => {
        let flag = false
        item.currencies.forEach(element => {
            if (element.code === 'USD')
                flag = true;
        })
        if (flag == true)
            return true;
        else
            return false;
    })
    console.log(usdcountry)
}