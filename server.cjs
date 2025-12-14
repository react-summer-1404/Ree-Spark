const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const OPENAI_API_KEY =
  "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";

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
      }),
    });

    const data = await response.json();

    console.log("OpenAI raw response:", data);

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({
        error: "Invalid OpenAI response",
        details: data,
      });
    }

    res.json({
      reply: data.choices[0].message.content,
    });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ error: "Server crashed" });
  }
});

app.listen(PORT, () => {
  console.log(`AI Server running on http://localhost:${PORT}`);
});
