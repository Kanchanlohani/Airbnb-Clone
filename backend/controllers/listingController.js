const Listing = require("../models/Listing");

exports.getListings = async (req, res) => {
  const listings = await Listing.find().populate("user", "name");
  res.json(listings);
};

exports.createListing = async (req, res) => {
  const { title, description, location, price } = req.body;

  const listing = await Listing.create({
    title,
    description,
    location,
    price,
    user: req.user
  });

  res.json(listing);
};
