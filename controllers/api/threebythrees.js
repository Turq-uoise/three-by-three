const ThreeByThree = require('../../models/threebythree');

module.exports = {
  index,
  create,
  rate,
  show
};

async function index(req, res) {
  const items = await ThreeByThree.find({}).populate('user');
  res.json(items);
}

async function create(req, res) {
  const threebythree = {items: req.body, user: req.user}
  try {
    const newThreeByThree = await ThreeByThree.create(threebythree);
    res.status(201).json(newThreeByThree)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function rate(req, res) {
  const threebythree = await ThreeByThree.findById(req.body.id)
  const rate = {
    rating: req.body.rating,
    user: req.user._id
  }

  let alreadyRated = false;

  threebythree.rating.forEach((threebythreerating) => {
    if (threebythreerating.user === rate.user) {
      alreadyRated = true
      threebythreerating.rating = rate.rating
    }
  })

  if (!alreadyRated) {
    threebythree.rating.push(rate)
  }

  return threebythree.save()
}

async function show(req, res) {
  const item = await ThreeByThree.findById(req.params.id);
  res.json(item);
}
