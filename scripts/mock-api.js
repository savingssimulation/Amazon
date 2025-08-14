import express from 'express';

const app = express();
const port = 3001;

app.get('/api/scenarios', (req, res) => {
  // ここでcontent/scenariosを読み込み、ダミーデータを返す
  res.json({
    scenarios: [
      // ダミーシナリオデータ
    ]
  });
});

app.listen(port, () => {
  console.log(`Mock API server listening on port ${port}`);
});