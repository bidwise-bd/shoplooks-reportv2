const generateCsv = require('../utils/generateCsv');

module.exports = async (req, res) => {
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate) {
    return res.status(400).json({ error: 'Missing startDate or endDate' });
  }

  try {
    const filePath = await generateCsv(startDate, endDate);
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="shoplooks-report.csv"');
    return res.sendFile(filePath);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to generate report' });
  }
};
