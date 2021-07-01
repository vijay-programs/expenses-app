import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "bike insurance", date: new Date(2021, 3, 25), amount: 100 },
    { title: "car insurance", date: new Date(2021, 2, 2), amount: 167 },
    { title: "refrigerator", date: new Date(2021, 5, 15), amount: 290 },
    { title: "vegetables", date: new Date(2021, 7, 10), amount: 30 },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
