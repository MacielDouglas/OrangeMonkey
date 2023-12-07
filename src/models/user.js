import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  role: String,
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
