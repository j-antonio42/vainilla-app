function calculateScholarship(average) {
    let scholarshipPercentage = 0;
  
    if (average >= 8 && average < 9) {
      scholarshipPercentage = 20 + (average - 8) * 20;
    } else if (average >= 9 && average < 10) {
      scholarshipPercentage = 30 + (average - 9) * 70;
    } else if (average === 10) {
      scholarshipPercentage = 100;
    } else {
      scholarshipPercentage = 0;
    }
  
    return scholarshipPercentage;
  }
  
  const form = document.getElementById("form");
  const tableBody = document.getElementById("table-body");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const enrollment = document.getElementById("enrollment").value;
    const average = document.getElementById("average").value;
    const monthlyFee = document.getElementById("monthly-fee").value;
    const scholarshipAmount = calculateScholarship(Number(average));
    const payment = Number(monthlyFee) * (1 - scholarshipAmount/100);
  
    const tableData = document.createElement("tr");
    tableData.innerHTML = `
        <td class="tableData">${firstName}</td>
        <td class="tableData">${lastName}</td>
        <td class="tableData">${enrollment}</td>
        <td class="tableData">${average}</td>
        <td class="tableData">${'$' + payment.toFixed(0)}</td>
        <td class="tableData">${'%' + scholarshipAmount.toFixed(0)}</td>
    `;
  
    tableBody.appendChild(tableData);
  });
  