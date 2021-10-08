import './App.css';

function countWeeks() {
   return (
      data.map(currentData => (
         <th></th>
      ))
   )
}

function tableData() {
   return (
      data.map(currentData => (
         <tr>
            <td>{currentData.actName}</td>
            <td>{currentData.color}</td>
         </tr>
      ))
   )
}

function App() {
   return (
      <div className="App">
         <table>
            <tr>
               <th>Atividade</th>
               {
                  countWeeks()
               }
               <th>Ações</th>
            </tr>
            {
               tableData()
            }
         </table>
      </div>
   );
}

const data = [
   {
      id: 1,
      actName: 'Activity 1',
      weeksOn: [
         {
            wk: 1,
            percent: 20
         },
         {
            wk: 2,
            percent: 50
         }
      ],
      color: 'blue'
   },
   {
      id: 2,
      actName: 'Activity 2',
      weeksOn: [
         {
            wk: 1,
            percent: 60
         },
         {
            wk: 2,
            percent: 50
         }
      ],
      color: 'red'
   },
]

export default App;
