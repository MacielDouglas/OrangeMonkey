import mongoose from 'mongoose';

const connectToDB = async () => {
  const conUrl = process.env.MONGO_URI;

  mongoose
    .connect(conUrl)
    .then(() => console.log('Orangemonkey conectado ao mongo, com sucesso!!!'))
    .catch((err) =>
      console.log(`Deu erro ao conectar ao mongo, ${err.message}`),
    );
};

export default connectToDB;
