import app from './app';

app.listen(process.env.PORT || 3333, () => {
  console.log('Server Online na porta:', process.env.PORT || 3333);
});
