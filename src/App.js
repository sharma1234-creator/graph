// import { useState, useEffect } from "react";

// import "./App.css"
// const PAGE_NUMBER = 1;

// function App() {
  
//   const [state, setState] = useState([]);
//   const [page, setPage] = useState(PAGE_NUMBER);
//   const obj = {};

//   useEffect(() => {
//     fetch(`http://localhost:9002/?page=${page}&size=20`)
//       .then((res) => res.json())
//       .then((json) => { console.log(json);
//         setState([...state, ...json])});
      
//   }, [page]);

//   console.log(state);
//   const scrollToEnd = () => {
//     setPage(page + 1);
//   };
//   window.onscroll = function () {
//     if (
//       window.innerHeight + document.documentElement.scrollTop ===
//       document.documentElement.offsetHeight
//     ) {
//       scrollToEnd();
//     }
//   };
//   return (
//     <div className="App">
//                     <table>
//                   <tr className="table-head">
//                   <th>Agent_Id</th>
//                   <th>Agent_Key</th>
//                   <th>Agent_Name</th>
//                   <th>Auth_Amount</th>
//                   <th>Auth_Code</th> 
//                   <th>Base_Fare</th>
//                   <th>Congestion_Surcharge</th>
//                   <th>Created_Dttm</th>
//                   <th>Curb_Ride_Id</th>
//                   <th>Curb_Triplog_Id</th>
//                   <th>Derived_Triplog_Id</th>
//                   <th>Dispatch_Id</th>
//                   <th>Driver_Key</th>
//                   <th>Driver_Medallion_Key</th>
//                   <th>Ehail_Account_Id</th>
//                   <th>Ehail_Fee</th>
//                   <th>End_Date</th>
//                   <th>End_Date_Key</th>
//                   <th>End Dttm</th>
//                   <th>End_Mileage</th>
//                   <th>End_Paid_Mileage</th>
//                   <th>Extras</th>
//                   <th>From Address</th>
//                   <th>From_Latitude</th>
//                   <th>From_Longitude</th>
//                   <th>Health_Fee</th>
//                   <th>Improvement_Surcharge</th>
//                   <th>Internal_Drivers_Only</th>
//                   <th>Internal_Medallions_Only</th>
//                   <th>Medallion</th>
//                   <th>Medallion_Key</th>
//                   <th>Miles_Btw_Stops</th>
//                   <th>Miles_In_Service</th>
//                   <th>Miles_On_Duty</th>
//                   <th>Mta_Tax</th> 
//                   <th>Number_Of_Passengers</th>
//                   <th>Others</th>
//                   <th>Payment Type</th>
//                   <th>Period</th>
//                   <th>Read Dttm</th>
//                   <th>Seconds_Btw_Stops</th>
//                   <th>Seconds_In_Service</th>
//                   <th>Start_Date</th>
//                   <th>Start_Date_Key</th>
//                   <th>Start Dttm</th>
//                   <th>Start_Mileage</th>
//                   <th>Start_Paid_Mileage</th>
//                   <th>Theodo Triplog Id</th>
//                   <th>Tips</th>
//                   <th>Tlc_License</th>
//                   <th>To Address</th>
//                   <th>To_Latitude</th>
//                   <th>To_Longitude</th>
//                   <th>Tolls</th>
//                   <th>Total_Amount</th>
//                   <th>Triplog_Key</th>
//                   <th>Updated Dttm</th>
//                   <th>VIN</th>
//                   <th>Vehicle_Key</th>
//                   <th>Void_Reason</th>
//                   <th>Void_Responsible</th>

//                 </tr>
// { state.length > 0 && state.map((ele,i)=>

//   <tr className="table-content" key={i}>
//   <td className="agent-id">{ele['Agent Id']}</td>
//   <td>{ele['Agent Key']}</td>
//   <td className="agent-name">{ele['Agent Name']}</td>
//   <td>{ele['Auth Amount']}</td>
//   <td>{ele['Auth Code']}</td>
//   <td>{ele['Base Fare']}</td>
//   <td>{ele['Congestion Surcharge']}</td>
//   <td>{ele['Created Dttm']}</td>
//   <td>{ele['Curb Ride Id']}</td>
//   <td>{ele['Curb Triplog Id']}</td>
//   <td>{ele['Derived Triplog Id']}</td>
//   <td>{ele['Dispatch Id']}</td>
//   <td>{ele['Driver Key']}</td>
//   <td>{ele['Driver Medallion Key']}</td>
//   <td>{ele['Ehail Account Id']}</td>
//   <td>{ele['Ehail Fee']}</td>
//   <td>{ele['End Date']}</td>
//   <td>{ele['End Date Key']}</td>
//   <td>{ele['End Dttm']}</td>
//   <td>{ele['End Mileage']}</td>
//   <td>{ele['End Paid Mileage']}</td>
//   <td>{ele['Extras']}</td>
//   <td>{ele['From Address']}</td>
//   <td>{ele['From Latitude']}</td>
//   <td>{ele['From Longitude']}</td>
//   <td>{ele['Health Fee']}</td>
//   <td>{ele['Improvement Surcharge']}</td>
//   <td>{ele['Internal Drivers Only']}</td>
//   <td>{ele['Internal Medallions Only']}</td>
//   <td>{ele['Medallion']}</td>
//   <td>{ele['Medallion Key']}</td>
//   <td>{ele['Miles Btw Stops']}</td>
//   <td>{ele['Miles In Service']}</td>
//   <td>{ele['Miles On Duty']}</td>
//   <td>{ele['Mta Tax']}</td>
//   <td>{ele['Number Of Passengers']}</td>
//   <td>{ele['Others']}</td>
//   <td>{ele['Payment Type']}</td>
//   <td>{ele['Period']}</td>
//   <td>{ele['Read Dttm']}</td>
//   <td>{ele['Seconds Btw Stops']}</td>
//   <td>{ele['Seconds In Service']}</td>
//   <td>{ele['Start Date']}</td>
//   <td>{ele['Start Date Key']}</td>
//   <td>{ele['Start Dttm']}</td>
//   <td>{ele['Start Mileage']}</td>
//   <td>{ele['Start Paid Mileage']}</td>
//   <td>{ele['Theodo Triplog Id']}</td>
//   <td>{ele['Tips']}</td>
//   <td>{ele['Tlc License']}</td>
//   <td>{ele['To Address']}</td>
//   <td>{ele['To Latitude']}</td>
//   <td>{ele['To Longitude']}</td>
//   <td>{ele['Tolls']}</td>
//   <td>{ele['Total Amount']}</td>
//   <td>{ele['Triplog Key']}</td>
//   <td>{ele['Updated Dttm']}</td>
//   <td>{ele['VIN']}</td>
//   <td>{ele['Void Reason']}</td>
//   <td>{ele['Void Responsible']}</td>
// </tr> 
// )
// }
//     </table>

//     </div>
//   );
// }

// export default App;





// import { useState, useEffect } from "react";

// import "./App.css"


// function App() {
  
//   const [state, setState] = useState([]);
 
//   useEffect(() => {
//     fetch(`http://localhost:9002`)
//       .then((res) => res.json())
//       .then((json) => { console.log(json);
//         setState([...state, ...json])});
        
//   },[]);

  
//  const map1 = state.map((ele)=>{
//    return ele['Payment Type']
//  })
//  console.log(map1);


// const cash = map1.filter((ele)=>{
//   return ele === 'CASH'
// })
// console.log(cash.length);


// const card = map1.filter((ele)=>{
//   return ele === 'CC CARD'
// })
// console.log(card.length)


// const mobile = map1.filter((ele)=>{
//   return ele === 'Mobile'
// })
// console.log(mobile.length);


//   return (
//     <div className="App">
//         <h4>Total Payment : {map1.length}</h4>
//         <h4>CASH :{cash.length}</h4>
//         <h4>CC CARD :{card.length}</h4>
//         <h4>Mobile :{mobile.length}</h4>
//     </div>
//   );
// }

// export default App;


import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import "./App.css"
import Pies from "./Pies";
import Bars from "./Bars";
function App() {

    const [state, setState] = useState([]);
 
  useEffect(() => {
    fetch(`http://localhost:9002`)
      .then((res) => res.json())
      .then((json) => { console.log(json);
        setState([...state, ...json])});
        
  },[]);

  
 var map1 = state.map((ele)=>{
   return ele['Payment Type']
 })
 console.log(map1);


var cash = map1.filter((ele)=>{
  return ele === 'CASH'
})
console.log(cash.length);


var card = map1.filter((ele)=>{
  return ele === 'CC CARD'
})
console.log(card.length)


var mobile = map1.filter((ele)=>{
  return ele === 'Mobile'
})
console.log(mobile.length);

  return (
    
    <div>
      {/* <p className="side-bar">Quantity of payment types</p>
      
    
   
      <div style={{ maxWidth: "550px" }}>
        <Bar
          data={{
           
            labels: ["CASH", "CC CARD", "Mobile"],
            datasets: [
              {
               
                data:[cash.length, card.length, mobile.length],
            
                backgroundColor: [ "blue","green", "red"],
               
                borderColor: [ "blue","green", "red"],
                borderWidth: 0.5
              }
            ]
          }}
         
          height={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    
                    beginAtZero: true
                  }
                }
              ]
            },
            legend: {
              labels: {
                fontSize: 15
              }
            }
          }}
        
        />
       
      </div>
      */}
     
      <Bars cash={cash} card={card} mobile={mobile}/>
      <Pies cash={cash} card={card} mobile={mobile}/>
    </div>
        
  );
}

export default App;
