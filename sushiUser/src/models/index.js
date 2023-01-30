// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { OrdenCarrito, Carrito, Usuario, ItemCategoria, MenuItem, OrdenTotal, OrdenStatus } = initSchema(schema);

export {
  OrdenCarrito,
  Carrito,
  Usuario,
  ItemCategoria,
  MenuItem,
  OrdenTotal,
  OrdenStatus
};