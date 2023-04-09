const Admin = require('../models/admin');
const User = require('../models/user');

// // _id: '64203f221e53cea886b6eccf', email: '24100244@lums.edu.pk'
// const adminadd = new Admin({ id: '64203f221e53cea886b6eccf' });
// adminadd.save();

const getAdminId = async (req, res) => {
  try {
    const adminsId = await Admin.find(); // retrieve all documents and only select the id field
    if (!adminsId) {
      res.status(404).send('Admin not found');
    }
    console.log(adminsId[0].id);
    res.json(adminsId[0].id); // return the array of id values as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

const getAllUsers = async (req, res) => {
  const adminId = req.params.adminId;

  const admin = await Admin.findOne({ id: adminId });
  if (!admin) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Fetch all users from the user table
  // const users = await User.find().sort({ date_created: 'desc' });
  const users = await User.find({ _id: { $ne: adminId } }).sort({
    date_created: 'desc',
  });

  if (!users) {
    return res.status(404).json({ error: 'No User' });
  }
  res.json({ users: users });
};

module.exports = { getAdminId, getAllUsers };
