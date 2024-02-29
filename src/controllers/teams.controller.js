import Team from "../models/teams.model.js";

export const getTeams = async (req, res) => {
  const teams = await Team.find();
  res.json(teams);
};

export const createTeam = async (req, res) => {
  const { name, category, players, details, image } = req.body;

  const newTeam = new Team({
    name,
    category,
    players,
    details,
    image,
  });

  const savedTeam = await newTeam.save();
  res.json(savedTeam);
};

/* export const getNoticia = async (req, res) => {
  const noticia = await Noticia.findById(req.params.id);
  if (!noticia) return res.status(404).json({ message: "Noticia not found" });
  res.json(noticia);
};

export const deleteNoticia = async (req, res) => {
  const noticia = await Noticia.findByIdAndDelete(req.params.id);
  if (!noticia) return res.status(404).json({ message: "Noticia not found" });
  res.sendStatus(204);
};

export const updateNoticia = async (req, res) => {
  const noticia = await Noticia.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!noticia) return res.status(404).json({ message: "Noticia not found" });
  res.json(noticia);
};
 */
