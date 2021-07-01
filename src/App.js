import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
