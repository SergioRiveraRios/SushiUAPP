import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerOrdenCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrdenCarrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Item_id?: string | null;
  readonly Item_Cantidad?: number | null;
  readonly carritoID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrdenCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrdenCarrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Item_id?: string | null;
  readonly Item_Cantidad?: number | null;
  readonly carritoID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrdenCarrito = LazyLoading extends LazyLoadingDisabled ? EagerOrdenCarrito : LazyOrdenCarrito

export declare const OrdenCarrito: (new (init: ModelInit<OrdenCarrito>) => OrdenCarrito) & {
  copyOf(source: OrdenCarrito, mutator: (draft: MutableModel<OrdenCarrito>) => MutableModel<OrdenCarrito> | void): OrdenCarrito;
}

type EagerCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Carrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuarioID: string;
  readonly OrdenCarritos?: (OrdenCarrito | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCarrito = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Carrito, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuarioID: string;
  readonly OrdenCarritos: AsyncCollection<OrdenCarrito>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Carrito = LazyLoading extends LazyLoadingDisabled ? EagerCarrito : LazyCarrito

export declare const Carrito: (new (init: ModelInit<Carrito>) => Carrito) & {
  copyOf(source: Carrito, mutator: (draft: MutableModel<Carrito>) => MutableModel<Carrito> | void): Carrito;
}

type EagerUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Usuario_Nombre?: string | null;
  readonly Usuario_Telefono?: number | null;
  readonly Usuario_Correo?: string | null;
  readonly sub?: string | null;
  readonly Carritos?: (Carrito | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Usuario_Nombre?: string | null;
  readonly Usuario_Telefono?: number | null;
  readonly Usuario_Correo?: string | null;
  readonly sub?: string | null;
  readonly Carritos: AsyncCollection<Carrito>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Usuario = LazyLoading extends LazyLoadingDisabled ? EagerUsuario : LazyUsuario

export declare const Usuario: (new (init: ModelInit<Usuario>) => Usuario) & {
  copyOf(source: Usuario, mutator: (draft: MutableModel<Usuario>) => MutableModel<Usuario> | void): Usuario;
}

type EagerItemCategoria = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemCategoria, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Categoria?: string | null;
  readonly Categoria_Image?: string | null;
  readonly menuitems?: (MenuItem | null)[] | null;
  readonly Categoria_MinDelivery?: string | null;
  readonly Categoria_MaxDelivery?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItemCategoria = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ItemCategoria, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Categoria?: string | null;
  readonly Categoria_Image?: string | null;
  readonly menuitems: AsyncCollection<MenuItem>;
  readonly Categoria_MinDelivery?: string | null;
  readonly Categoria_MaxDelivery?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ItemCategoria = LazyLoading extends LazyLoadingDisabled ? EagerItemCategoria : LazyItemCategoria

export declare const ItemCategoria: (new (init: ModelInit<ItemCategoria>) => ItemCategoria) & {
  copyOf(source: ItemCategoria, mutator: (draft: MutableModel<ItemCategoria>) => MutableModel<ItemCategoria> | void): ItemCategoria;
}

type EagerMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MenuItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Item_Nombre?: string | null;
  readonly Item_Precio?: number | null;
  readonly Item_Rating?: number | null;
  readonly Item_Dentro?: string | null;
  readonly Item_Fuera?: string | null;
  readonly itemcategoriaID: string;
  readonly Item_Imagen?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MenuItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Item_Nombre?: string | null;
  readonly Item_Precio?: number | null;
  readonly Item_Rating?: number | null;
  readonly Item_Dentro?: string | null;
  readonly Item_Fuera?: string | null;
  readonly itemcategoriaID: string;
  readonly Item_Imagen?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MenuItem = LazyLoading extends LazyLoadingDisabled ? EagerMenuItem : LazyMenuItem

export declare const MenuItem: (new (init: ModelInit<MenuItem>) => MenuItem) & {
  copyOf(source: MenuItem, mutator: (draft: MutableModel<MenuItem>) => MutableModel<MenuItem> | void): MenuItem;
}

type EagerOrdenTotal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrdenTotal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Ordem_Fecha?: string | null;
  readonly Orden_Hora_Programada?: string | null;
  readonly Orden_Precio_Total?: number | null;
  readonly Orden_Rating?: number | null;
  readonly OrdenStatus?: OrdenStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ordenTotalOrdenStatusId?: string | null;
}

type LazyOrdenTotal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrdenTotal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Ordem_Fecha?: string | null;
  readonly Orden_Hora_Programada?: string | null;
  readonly Orden_Precio_Total?: number | null;
  readonly Orden_Rating?: number | null;
  readonly OrdenStatus: AsyncItem<OrdenStatus | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ordenTotalOrdenStatusId?: string | null;
}

export declare type OrdenTotal = LazyLoading extends LazyLoadingDisabled ? EagerOrdenTotal : LazyOrdenTotal

export declare const OrdenTotal: (new (init: ModelInit<OrdenTotal>) => OrdenTotal) & {
  copyOf(source: OrdenTotal, mutator: (draft: MutableModel<OrdenTotal>) => MutableModel<OrdenTotal> | void): OrdenTotal;
}

type EagerOrdenStatus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrdenStatus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Orden_Valor?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrdenStatus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrdenStatus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Orden_Valor?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrdenStatus = LazyLoading extends LazyLoadingDisabled ? EagerOrdenStatus : LazyOrdenStatus

export declare const OrdenStatus: (new (init: ModelInit<OrdenStatus>) => OrdenStatus) & {
  copyOf(source: OrdenStatus, mutator: (draft: MutableModel<OrdenStatus>) => MutableModel<OrdenStatus> | void): OrdenStatus;
}