import app from './app';

app.listen(process.env.SV_PORT || 3333, () => {
  console.log('Server Online na porta:', process.env.SV_PORT);
});
