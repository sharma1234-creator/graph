// import React from "react";
// import ReactDOM from "react-dom";
// import { Pie } from "react-chartjs-2";
// import "chartjs-plugin-datalabels";
// import "./App.css"


// var options = {
//   plugins: {
//     datalabels: {
//       formatter: (value, ctx) => {
//         let datasets = ctx.chart.data.datasets;

        
//       },
//       color: "red"
//     }
//   }
// };

// function Pies() {
//   const data = {
//     labels: ["Red", "Blue", "yellow"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)"
//         ],
//         borderColor: [
//           "rgba(255,99,132,1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)"
//         ],
//         borderWidth: 1
//       }
//     ]
//   };
//   return (
//     <div className="pie-content" style={{ width: 500 }}>
//       <Pie className="Pies" data={data} width={50} height={50} options={{ responsive: true }}  />
//     </div>
//   );
// }

// export default Pies;




import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

function Pies({cash,card,mobile}){
  const stat = {
    dataPie: {
      labels: ["CASH", "CC CARD", "MOBILE"],
      datasets: [
        {
          data: [26,60,14],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C"
            
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870"
          ]
        }
      ]
    }
  };



    return (
      <MDBContainer>
        <h3 className="mt-5">Pie chart</h3>
        <Pie data={stat.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }


export default Pies;