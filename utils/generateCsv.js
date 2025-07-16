const fs = require('fs');
const path = require('path');

async function generateCsv(startDate, endDate) {
  const filePath = path.join('/tmp', 'shoplooks-report.csv');
  const headers = 'Date,Clicks,Revenue\n';
  const sampleData = [
    `2025-07-01,10,25.50`,
    `2025-07-02,15,33.10`,
    `2025-07-03,20,50.00`
  ];

  const content = headers + sampleData.join('\n');
  fs.writeFileSync(filePath, content, 'utf8');
  return filePath;
}

module.exports = generateCsv;
