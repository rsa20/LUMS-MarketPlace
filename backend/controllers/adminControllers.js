const Admin = require('../models/admin');

const getAdminId = async (req, res) => {
  try {
    const admins = await Admin.find({}, 'id'); // retrieve all documents and only select the id field
    const ids = admins.map((admin) => admin.id); // extract the id values from each document
    console.log(ids);
    res.json(ids); // return the array of id values as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

module.exports = { getAdminId };
