"use stricts";
let winningTickets = [
    {tixNum: "1001001", expires: "2022-09-05", prize: 100000},
    {tixNum: "1298711", expires: "2022-10-10" , prize: 250000},
    {tixNum: "1309182", expires: "2022-12-30" , prize: 500000},
    {tixNum: "1456171", expires: "2023-01-20", prize: 1000000},
    {tixNum: "3332871", expires: "2022-05-20", prize: 1000000},
    {tixNum: "4651529", expires: "2022-12-15", prize: 100000},
    {tixNum: "5019181", expires: "2023-01-31", prize: 250000},
    {tixNum: "5168261", expires: "2023-03-01", prize: 1000000},
    {tixNum: "6761529", expires: "2022-12-15", prize: 250000},
    {tixNum: "7778172", expires: "2023-01-15", prize: 5000000},
    {tixNum: "8751426", expires: "2020-09-15", prize: 100000}
   ];


   window.onload = loadWinningTicketsTable;



 function loadWinningTicketsTable(){
    const tablebody = document.getElementById("winningTicketsTbl");

    for(let ticket of winningTickets){
        buildTickRow(tablebody, ticket)
    }

    function buildTickRow(tbody, ticket){
        console.log(ticket);

        let row = tbody.insertRow();
        let tdticketNumbr = row.insertCell(0);
        tdticketNumbr.innerHTML = ticket.tixNum;

        let tdprize = row.insertCell(0);
        tdprize.innerHTML = "$" + ticket.tixNum;

        let tdexpires = row.insertCell(2);
        tdexpires.innerHTML = ticket.expires;

    }



}



   