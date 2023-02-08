
import * as SQLite from 'expo-sqlite';
import { useState } from 'react';
import {usuario,setUsuario} from '../../screens/loginScreen';

export const connectionState =  () => {
    const db = SQLite.openDatabase('example.db')
    return db
}

export const createTable = async () => {
    const db =  connectionState()
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS direccion (idDireccion INTEGER PRIMARY KEY AUTOINCREMENT, direccionCalle TEXT, direccionCalle2 TEXT, DireccionNum INTEGER, DireccionColonia TEXT, direccionCiudad TEXT, direccionCP INTEGER,cliente_Telefono NOT NULL, FOREIGN KEY (cliente_Telefono) REFERENCES usuario(cliente_Telefono))'
            //'DROP TABLE menuItem'
            //'CREATE TABLE IF NOT EXISTS ordenCarrito (idOrdenCarrito INTEGER PRIMARY KEY AUTOINCREMENT, cantidadMenutItem INT, idCarrito INTEGER NOT NULL,idMenuItem INTEGER NOT NULL,  FOREIGN KEY (idCarrito) REFERENCES carrito (idCarrito), FOREIGN KEY (idMenuItem) REFERENCES menuItem(idMenuItem))'
            //'CREATE TABLE IF NOT EXISTS menuItem(idMenuItem INTEGER PRIMARY KEY AUTOINCREMENT, menuItemNombre TEXT, menuItemPrecio TEXT, menuItemRating INTEGER, menuItemImagen TEXT,menuItemDentro TEXT ,menuItemFuera TEXT, idCategoria INTEGER NOT NULL, FOREIGN KEY(idCategoria) REFERENCES categoria(idCategoria))'
            //'CREATE TABLE IF NOT EXISTS categoria (idCategoria INTEGER PRIMARY KEY AUTOINCREMENT, categoriaNombre TEXT, categoriaImagen TEXT)'
            //'CREATE TABLE IF NOT EXISTS carrito (idCarrito INTEGER PRIMARY KEY AUTOINCREMENT, cliente_Telefono INTEGER NOT NULL, FOREIGN KEY (cliente_Telefono) REFERENCES usuario (cliente_Telefono))'
            //'CREATE TABLE IF NOT EXISTS usuario (cliente_Telefono INTEGER PRIMARY KEY , cliente_Nombre TEXT, cliente_correo TEXT, cliente_contrasena TEXT, cliente_Imagen TEXT)'
        )
    },

    )
}

export const createUser = (Usuario_Nombre, Usuario_Correo, Usuario_Telefono, password) => {
    const db = connectionState()
    console.log("ola")
    console.log(db.ConnectionState)
    db.transaction(tx => {
        tx.executeSql(`INSERT INTO usuario (cliente_Nombre, cliente_correo,cliente_Telefono,cliente_contrasena) values ('${Usuario_Nombre}','${Usuario_Correo}', '${Usuario_Telefono}',${password})`, null,
            (txtObj, resulSet) => {
                console.log("insertado")
            }
        )
    })

}
export const updateUser = (Usuario_Telefono, Usuario_Nombre, Usuario_Correo, password) => {
    const db = connectionState()
    db.transaction(tx => {
        tx.executeSql(`UPDATE usuario 
                        SET cliente_Nombre='${Usuario_Nombre}', 
                        cliente_correo ='${Usuario_Correo}',
                        cliente_contrasena='${password}'
                        WHERE cliente_Telefono='${Usuario_Telefono}'`, null,
            (txtObj, resulSet) => {
                console.log("actualizado")
            }
        )
    })

}

export const deleteUser = (Usuario_Telefono) => {
    const db = connectionState()
    db.transaction(tx => {
        tx.executeSql(`DELETE FROM usuario 
                        WHERE cliente_Telefono='${Usuario_Telefono}'`, null,
            (txtObj, resulSet) => {
                console.log("eliminado")
            }
        )
    })
}

export const alterTable = (Usuario_Telefono, carrito_status) => {
    const db = connectionState()
    console.log("ola")
    console.log(db.ConnectionState)

    db.transaction(tx => {
        tx.executeSql(`UPDATE carrito 
        SET carrito_status='${carrito_status}',
        WHERE cliente_Telefono='${Usuario_Telefono}'`, null,
            (txtObj, resulSet) => {
                console.log("Modificado")
            }
        )
    })
}
export const createCarrito = (Usuario_Telefono) => {
    const db = connectionState()
    console.log("ola")
    console.log(db.ConnectionState)

    db.transaction(tx => {
        tx.executeSql(`INSERT INTO carrito (cliente_Telefono) SELECT usuario.cliente_Telefono  FROM usuario   WHERE usuario.cliente_Telefono = '${Usuario_Telefono}'`, null,
            (txtObj, resulSet) => {
                console.log("CREADO")
            }
        )
    })

}

export const createOrdenCarrito = (carritoID, menuItemId, cantidadMenuItem) => {
    const db = connectionState()
    console.log("ola")

    db.transaction(tx => {
        tx.executeSql(`INSERT INTO ordenCarrito (idCarrito,idMenuItem,cantidadMenutItem) SELECT (select idCarrito FROM carrito where idCarrito='${carritoID}') as idCarrito , (select idMenuItem FROM menuitem where idMenuItem='${menuItemId}'), '${cantidadMenuItem}' `, null,
            (txtObj, resulSet) => {
                console.log("CREADO")
            }
        )
    })

}

export const createCategoria = (CategoriaNombre, CategoriaURL) => {
    const db =  connectionState()
    console.log(db.ConnectionState)

    db.transaction(tx => {
        tx.executeSql(`INSERT INTO categoria (categoriaNombre, CategoriaImagen) values('${CategoriaNombre}','${CategoriaURL}')  `, null,
            (txtObj, resulSet) => {
                console.log("CREADO")
            }
        )
    })

}

export const createMenuItem = (menuItemNombre, menuItemPrecio, menuItemRating, menuItemImagen,menuItemDentro,menuItemFuera,categoriaID) => {
    const db =  connectionState()
    console.log(db.ConnectionState)

    db.transaction(tx => {
        tx.executeSql(`INSERT INTO menuitem (menuItemNombre, menuItemPrecio,menuItemRating,menuItemImagen,menuItemDentro,menuItemFuera,idCategoria) values('${menuItemNombre}','${menuItemPrecio}','${menuItemRating}','${menuItemImagen}','${menuItemDentro}','${menuItemFuera}','${categoriaID}')  `, null,
            (txtObj, resulSet) => {
                console.log("CREADO")
            }
        )
    })

}

export const getOrdenCarrito= (cliente_Telefono)=>{
    const db =  connectionState()
    db.transaction(tx => {
        // sending 4 arguments in executeSql
        tx.executeSql(`SELECT * FROM ordenCarrito INNER JOIN carrito ON carrito.idCarrito INNER JOIN usuario ON usuario.cliente_Telefono WHERE carrito.cliente_Telefono='${cliente_Telefono}'`, [],
            (txObj, result) => {console.log(result.rows)
            },
            (txObj, error) => console.log('Error ', error)
        )
    })
}

export const Login = (Usuario_Correo, Usuario_Contrasena) => {
    const db = connectionState()
    db.transaction(tx => {
        // sending 4 arguments in executeSql
        tx.executeSql(`SELECT * FROM categoria WHERE cliente_Corro ='${Usuario_Correo}' AND cliente_contrasena='${Usuario_Contrasena}' `, null,
            (txObj, result) => x.push([result.rows._array]),
            (txObj, error) => console.log('Error ', error)
        )
    })
}

export const readTable =  () => {
    const db =  connectionState()
    let x = []
    db.transaction(tx => {
        // sending 4 arguments in executeSql
        tx.executeSql('SELECT * FROM usuario ', [],
            (txObj, result) => {
                console.log('listo')
                console.log(result.rows._array)
            },
            (txObj, error) => console.log('Error ', error)
        )
    })
}

