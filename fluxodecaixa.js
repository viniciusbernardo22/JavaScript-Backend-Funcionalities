let family = {
  incomes: [2500.05, 3200.1, 250.2, 360.3],
  expenses: [320.34, 128.45, 176.87, 1450.4]
}

function sum(array) {
  let total = 0
  for (let value of array) {
    total += value
  }

  return total
}
function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses

  const itsOk = total >= 0

  let balanceText = 'Negativo'
  if (itsOk) {
    balanceText = 'positivo'
  }

  console.log(`Seu saldo é ${balanceText}:${total.toFixed(2)}R$`)
}

calculateBalance()
