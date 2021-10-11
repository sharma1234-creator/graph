// import  {Bar } from "react-chartjs-2";
// import { useState, useEffect } from "react";
// import "./App.css"

// function Bars() {
//   return (
    
//     <div className="App">
//       <p className="side-bar">Quantity of payment types</p>
      
      
   
//       <div style={{ maxWidth: "550px" }}>
//         <Bar
//           data={{
           
//             labels: ["CASH", "CC CARD", "Mobile1"],
//             datasets: [
//               {
               
//                 data:[26, 60 , 14],
            
//                 backgroundColor: [ "blue","green", "red"],
               
//                 borderColor: [ "blue","green", "red"],
//                 borderWidth: 0.5
//               }
//             ]
//           }}
         
//           height={600}
//           options={{
//             maintainAspectRatio: false,
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
                    
//                     beginAtZero: true
//                   }
//                 }
//               ]
//             },
//             legend: {
//               labels: {
//                 fontSize: 15
//               }
//             }
//           }}
        
//         />
       
//       </div>
     
//     </div>
        
//   );
// }

// export default Bars;




// import React from "react";
// import { MDBContainer } from "mdbreact";
// import { Bar } from "react-chartjs-2";
// import './App.css'

// const Bars = () => {
  

//   const data = {
//     labels: ["Sunday", "Monday", "Tuesday"
//       ],
//     datasets: [
//       {
//         label: "All Bar",
//         name:'Bar graph',
//         data: [26, 60, 14],
//         fill: true,
//         backgroundColor: "rgba(6, 156,51, .3)",
//         borderColor: "#02b844",
//       }
//     ]
//   }
  
//   return (
//     <MDBContainer className="bar-content" name='Bar' style={{ width: 750 }}>
//       <Bar data={data} />
       
//     </MDBContainer>
//   );
// }
  
// export default Bars;





// import React, { Component } from 'react';

// import { Bar, HorizontalBar } from 'react-chartjs-2';
// export default class Bars extends Component {
//   render() {
//     const dataBar = {
//       labels: ['January', 'February', 'March'],
//       datasets: [
//         {
//           label: 'My First dataset',
//           backgroundColor: '#EC932F',
//           borderColor: 'rgba(255,99,132,1)',
//           borderWidth: 1,
//           hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//           hoverBorderColor: 'rgba(255,99,132,1)',
//           data: [65, 59, 80, 81, 56, 55, 40]
//         },
       
//       ]
//     };

//     const dataHorBar = {
//       labels: ['January', 'February', 'March'],
//       datasets: [
//         {
//           label: 'My First dataset',
//           backgroundColor: '#EC932F',
//           borderColor: 'rgba(255,99,132,1)',
//           borderWidth: 1,
//           hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//           hoverBorderColor: 'rgba(255,99,132,1)',
//           data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//           label: 'My First dataset 2',
//           backgroundColor: 'rgba(255,99,132,0.2)',
//           borderColor: 'rgba(255,99,132,1)',
//           borderWidth: 1,
//           hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//           hoverBorderColor: 'rgba(255,99,132,1)',
//           data: [65, 59, 80, 81, 56, 55, 40]
//         }
//       ]
//     };
//     return (
//       <div>
//         <h2>Bar Example (custom size)</h2>
//         <Bar
//           data={dataBar}
//           width={100}
//           height={50}
//         />
//         <h2>Horizontal Bar Example</h2>
//         <HorizontalBar data={dataHorBar} />
//       </div>
//     );

//   }
// }





import React from 'react';
import  {Bar} from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import "./App.css";
function Bars({cash, card, mobile}) {
  const stat = {
    dataHorizontal: {
      labels: ['CARD','CC CARD','MOBILE'],
      datasets: [
        {
          label: 'All payment options',
          data: [26,60,14],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)'
          ],
          borderWidth: 1
        }
      ]
    }
  };

    return (
      <MDBContainer className="bar-content1">
        <h3 className='mt-5'>Bar chart</h3>
        <Bar
          data={stat.dataHorizontal}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }



export default Bars;

