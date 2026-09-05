export interface InstallmentPlan {
  deposit: number;
  installmentAmount: number;
  numberOfInstallments: number;
  totalPayable: number;
}

export function calculatePaymentPlan(
  price: number,
  startDateStr: string = "",
  accreditationType: "CPD" | "VTCT" = "CPD",
  currentDate: Date = new Date()
): InstallmentPlan | null {
  // Under £500 -> Pay in Full only
  if (price < 500) {
    return null;
  }

  // Determine tier deposit and installments
  let deposit = 250;
  let installments = 2;

  if (price >= 500 && price <= 999) {
    deposit = 250;
    installments = 2;
  } else if (price >= 1000 && price <= 2499) {
    deposit = 500;
    installments = 3;
  } else if (price >= 2500 && price <= 3999) {
    deposit = 1000;
    installments = 3;
  } else if (price >= 4000) {
    deposit = 1500;
    installments = 4;
  }

  const balance = price - deposit;
  const rawInstallmentAmount = balance / installments;
  const installmentAmount = Math.round(rawInstallmentAmount * 100) / 100;

  return {
    deposit,
    installmentAmount,
    numberOfInstallments: installments,
    totalPayable: deposit + (installmentAmount * installments)
  };
}
