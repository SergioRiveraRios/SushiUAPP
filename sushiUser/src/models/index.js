// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Usuario, Categoria, MenuItem } = initSchema(schema);

export {
  Usuario,
  Categoria,
  MenuItem
};