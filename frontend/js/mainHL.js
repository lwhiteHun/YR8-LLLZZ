var tomb = [
    { id: 1, name: "Audi", category: "luxus", price: 3490000, count: 11, sold: 4, createdAt: "2017-10-01", updatedAt: "2018-04-11" },
    { id: 2, name: "VW", category: "family", price: 2390000, count: 16, sold: 11, createdAt: "2016-03-11", updatedAt: "2018-06-21" },
    { id: 3, name: "Ferrari", category: "luxus", price: 16900000, count: 6, sold: 2, createdAt: "2014-04-30", updatedAt: "2018-02-16" },
    { id: 4, name: "Toyota", category: "city", price: 2890000, count: 27, sold: 14, createdAt: "2016-09-29", updatedAt: "2018-02-22" },
    { id: 5, name: "Opel", category: "SUV", price: 1890000, count: 14, sold: 9, createdAt: "2014-08-21", updatedAt: "2018-01-21" },
    { id: 6, name: "Renault", category: "city", price: 1390000, count: 33, sold: 10, createdAt: "2015-02-20", updatedAt: "2018-08-12" },
    { id: 7, name: "Peugeot", category: "family", price: 1790000, count: 14, sold: 7, createdAt: "2014-09-16", updatedAt: "2018-05-19" },
    { id: 8, name: "Dacia", category: "old", price: 850000, count: 3, sold: 4, createdAt: "2015-04-27", updatedAt: "2017-12-11" },
    { id: 9, name: "Nissan", category: "electric", price: 5490000, count: 31, sold: 22, createdAt: "2017-12-01", updatedAt: "2018-03-31" },
    { id: 10, name: "Honda", category: "coupe", price: 3490000, count: 16, sold: 5, createdAt: "2015-04-19", updatedAt: "2018-07-28" },
    { id: 11, name: "Citroen", category: "city", price: 1290000, count: 11, sold: 9, createdAt: "2016-09-01", updatedAt: "2018-05-21" },
    { id: 12, name: "BMW", category: "luxus", price: 7490000, count: 13, sold: 6, createdAt: "2017-10-30", updatedAt: "2018-02-24" },
    { id: 13, name: "Hyundai", category: "family", price: 2190000, count: 20, sold: 11, createdAt: "2015-09-23", updatedAt: "2018-03-16" },
    { id: 14, name: "Kia", category: "city", price: 1190000, count: 16, sold: 10, createdAt: "2016-07-30", updatedAt: "2018-06-20" },
    { id: 15, name: "Porsche", category: "luxus", price: 13490000, count: 4, sold: 3, createdAt: "2014-10-01", updatedAt: "2018-12-11" },
    { id: 16, name: "Ford", category: "SUV", price: 3890000, count: 23, sold: 15, createdAt: "2015-10-20", updatedAt: "2018-04-13" },
    { id: 17, name: "Mercedes", category: "luxus", price: 11990000, count: 18, sold: 10, createdAt: "2016-05-23", updatedAt: "2018-06-29" },
    { id: 18, name: "Fiat", category: "coupe", price: 2890000, count: 26, sold: 18, createdAt: "2015-01-26", updatedAt: "2018-12-11" },
    { id: 19, name: "Maserati", category: "luxus", price: 23490000, count: 5, sold: 3, createdAt: "2017-09-15", updatedAt: "2018-05-26" },
    { id: 20, name: "Volvo", category: "electric", price: 6790000, count: 26, sold: 15, createdAt: "2016-11-01", updatedAt: "2018-10-05" },
    { id: 21, name: "Saab", category: "luxus", price: 7190000, count: 18, sold: 7, createdAt: "2018-10-01", updatedAt: "2018-11-22" },
    { id: 22, name: "Lada", category: "old", price: 349000, count: 2, sold: 3, createdAt: "2014-04-16", updatedAt: "2018-08-18" },
    { id: 23, name: "Tesla", category: "electric", price: 33190000, count: 3, sold: 2, createdAt: "2017-01-23", updatedAt: "2018-06-27" },
    { id: 24, name: "Mitsubishi", category: "family", price: 1890000, count: 15, sold: 13, createdAt: "2016-12-19", updatedAt: "2018-09-05" },
    { id: 25, name: "Smart", category: "city", price: 1190000, count: 16, sold: 9, createdAt: "2016-02-21", updatedAt: "2018-12-18" },
];



function popular() {
    var selling = 0;
    var car = "";
    var pieces = 0;
    for (var i = 0 in tomb) {
        if (tomb[i].sold > selling) {
            selling = tomb[i].sold;
            car = tomb[i].name;
            pieces = tomb[i].sold;
            i++;
        };
    };
    alert(`A legnépszerűbb autónk: ${car}, összesen ${pieces} darabot adtunk el belőle.`);
    console.log(`A legnépszerűbb autónk: ${car}, összesen ${pieces} darabot adtunk el belőle.`);
};


function latest() {
    var created = 0;
    var latestcar = "";
    for (var i = 0 in tomb) {
        if (Date.parse(tomb[i].createdAt) > created) {
            latestcar = tomb[i].name;
            createdate = tomb[i].createdAt;
            created = Date.parse(tomb[i].createdAt);
            i++;
        };
    };
    alert("A legújabb autónk: " + latestcar + ", dátum: " + createdate);
    console.log("A legújabb autónk: " + latestcar + ", dátum: " + createdate);
};


function fullprice() {
    var full = 0;
    for (var i = 0 in tomb) {
        full = full + (tomb[i].count * tomb[i].price);
        i++;
    };
    alert(`Az összes eladó autó teljes ára: ${full}`);
    console.log(`Az összes eladó autó teljes ára: ${full}`);
};


function averageprice() {
    var fullprice = 0;
    var counter = 0;
    var avprice = 0;
    for (var i = 0 in tomb) {
        fullprice = fullprice + (tomb[i].count * tomb[i].price)
        counter = counter + tomb[i].count;
        i++;
    };
    avprice = (fullprice / counter).toFixed(2);
    alert(`Az összes autó alapján az átlag: ${avprice} Ft`);
    console.log(`Az összes autó alapján az átlag: ${avprice} Ft`);
};