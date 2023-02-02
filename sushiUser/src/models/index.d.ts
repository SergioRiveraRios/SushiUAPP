import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Usuario_Nombre?: string | null;
  readonly Usuario_Telefono?: string | null;
  readonly Usuario_Correo?: string | null;
  readonly untitledfield?: string | null;
  readonly sub?: string | null;
  readonly createdAt?: AWSDateTime;
  readonly updatedAt?: AWSDateTime;
}

type LazyUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Usuario_Nombre?: string | null;
  readonly Usuario_Telefono?: string | null;
  readonly Usuario_Correo?: string | null;
  readonly untitledfield?: string | null;
  readonly sub?: string | null;
  readonly createdAt?:AWSDateTime | null;
  readonly updatedAt?: AWSDateTime | null;
}

export declare type Usuario = LazyLoading extends LazyLoadingDisabled ? EagerUsuario : LazyUsuario

export declare const Usuario: (new (init: ModelInit<Usuario>) => Usuario) & {
  copyOf(source: Usuario, mutator: (draft: MutableModel<Usuario>) => MutableModel<Usuario> | void): Usuario;
}

type EagerCategoria = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categoria, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Categoria?: string | null;
  readonly Categoria_Imagen?: string | null;
  readonly Categoria_MinDelivery?: number | null;
  readonly Categoria_MaxDelivery?: number | null;
  readonly MenuItems?: (MenuItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategoria = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categoria, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Categoria?: string | null;
  readonly Categoria_Imagen?: string | null;
  readonly Categoria_MinDelivery?: number | null;
  readonly Categoria_MaxDelivery?: number | null;
  readonly MenuItems: AsyncCollection<MenuItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Categoria = LazyLoading extends LazyLoadingDisabled ? EagerCategoria : LazyCategoria

export declare const Categoria: (new (init: ModelInit<Categoria>) => Categoria) & {
  copyOf(source: Categoria, mutator: (draft: MutableModel<Categoria>) => MutableModel<Categoria> | void): Categoria;
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
  readonly Item_Imagen?: string | null;
  readonly categoriaID: string;
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
  readonly Item_Imagen?: string | null;
  readonly categoriaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MenuItem = LazyLoading extends LazyLoadingDisabled ? EagerMenuItem : LazyMenuItem

export declare const MenuItem: (new (init: ModelInit<MenuItem>) => MenuItem) & {
  copyOf(source: MenuItem, mutator: (draft: MutableModel<MenuItem>) => MutableModel<MenuItem> | void): MenuItem;
}