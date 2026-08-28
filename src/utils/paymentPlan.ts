export interface InstallmentPlan {
  deposit: number;
  installmentAmount: number;
  numberOfInstallments: number;
  totalPayable: number;
}

export function calculatePaymentPlan(
  price: number,
  startDateStr: string,
  accreditationType: "CPD" | "VTCT",
  currentDate: Date = new Date()
): InstallmentPlan | null {
  // Under £500 -> Pay in Full only
  if (price < 500) {
    return null;
  }

  // Determine tier deposit and maximum installments
  let deposit = 0;
  let maxInstallments = 0;

  if (price >= 500 && price <= 999) {
    deposit = 250;
    maxInstallments = 2;
  } else if (price >= 1000 && price <= 2499) {
    deposit = 500;
    maxInstallments = 3;
  } else if (price >= 2500 && price <= 3999) {
    deposit = 1000;
    maxInstallments = 3;
  } else if (price >= 4000) {
    deposit = 1500;
    maxInstallments = 3;
  }

  let allowedInstallments = maxInstallments;

  if (accreditationType === "CPD") {
    // Try to parse the startDateStr (e.g. "Oct 10, 2026")
    const parsedDate = Date.parse(startDateStr);
    if (!isNaN(parsedDate)) {
      const courseDate = new Date(parsedDate);
      
      // Calculate difference in milliseconds and days
      const diffMs = courseDate.getTime() - currentDate.getTime();
      const diffDays = diffMs / (1000 * 60 * 60 * 24);
      
      // If course is less than 1 month away (approx 30 days) -> Pay in Full only
      if (diffDays < 30) {
        return null;
      }
      
      // Calculate complete months
      let monthsDiff = (courseDate.getFullYear() - currentDate.getFullYear()) * 12 + (courseDate.getMonth() - currentDate.getMonth());
      if (courseDate.getDate() < currentDate.getDate()) {
        monthsDiff -= 1;
      }
      
      if (monthsDiff < 1) {
        return null;
      }
      
      allowedInstallments = Math.min(maxInstallments, monthsDiff);
    }
  }

  if (allowedInstallments <= 0) {
    return null;
  }

  const balance = price - deposit;
  const rawInstallmentAmount = balance / allowedInstallments;
  // Round to 2 decimal places to match standard currency representation
  const installmentAmount = Math.round(rawInstallmentAmount * 100) / 100;

  return {
    deposit,
    installmentAmount,
    numberOfInstallments: allowedInstallments,
    totalPayable: deposit + (installmentAmount * allowedInstallments)
  };
}
