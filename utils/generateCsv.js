import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function generateCsv(startDate, endDate) {
  const filePath = path.join('/tmp', 'shoplooks-report.csv');
  const headers = 'Date,Clicks,Revenue\n';
  const sampleData = [
    `2025-07-01,10,25.50`,
    `2025-07-02,15,33.10`,
    `2025-07-03,20,50.00`
  ];
  const content = headers + sampleData.join('\n');
  await fs.writeFile(filePath, content, 'utf8');
  return filePath;
}
