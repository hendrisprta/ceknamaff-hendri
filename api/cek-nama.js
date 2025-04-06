export default async function handler(req, res) {
  const { gameId } = req.query;

  if (!gameId) {
    return res.status(400).json({ error: 'Parameter gameId dibutuhkan' });
  }

  const apiUrl = `https://yrizzz.my.id/api/v1/game/checkUsernameFreeFire?gameId=${gameId}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Gagal mengambil data' });
  }
}
