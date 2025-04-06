export default async function handler(req, res) {
  const { gameId } = req.query;

  if (!gameId) {
    return res.status(400).json({ error: "gameId is required" });
  }

  try {
    const response = await fetch("https://yrizzz.my.id/api/v1/game/checkUsernameFreeFire", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({ gameId })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data", detail: err.message });
  }
}
