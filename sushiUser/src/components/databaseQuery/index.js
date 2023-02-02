
import * as SQLite from 'expo-sqlite';


export const connectionState = () => {
    const db = SQLite.openDatabase('example.db')
    return db
}

export const createTable = () => {
    const db = connectionState()
    db.transaction(tx => {
        tx.executeSql(
            
            //'CREATE TABLE IF NOT EXISTS ordenCarrito (idOrdenCarrito INTEGER PRIMARY KEY AUTOINCREMENT, cantidadMenutItem INT, idCarrito INTEGER NOT NULL,idMenuItem INTEGER NOT NULL,  FOREIGN KEY (idCarrito) REFERENCES carrito (idCarrito), FOREIGN KEY (idMenuItem) REFERENCES menuItem(idMenuItem))'
            //'CREATE TABLE IF NOT EXISTS menuItem(idMenuItem INTEGER PRIMARY KEY AUTOINCREMENT, menuItemNombre TEXT, menuItemPrecio TEXT, menuItemRating INTEGER, menuItemImagen TEXT, idCategoria INTEGER NOT NULL, FOREIGN KEY(idCategoria) REFERENCES categoria(idCategoria))'
            //'CREATE TABLE IF NOT EXISTS categoria (idCategoria INTEGER PRIMARY KEY AUTOINCREMENT, categoriaNombre TEXT, categoriaImagen TEXT, categoriaMinDelivery TEXT, categoriaMaxDelivery TEXT)'
            //'CREATE TABLE IF NOT EXISTS carrito (idCarrito INTEGER PRIMARY KEY AUTOINCREMENT, cliente_Telefono INTEGER NOT NULL, carrito_status TEXT, FOREIGN KEY (cliente_Telefono) REFERENCES usuario (cliente_Telefono))'
            //'CREATE TABLE IF NOT EXISTS usuario (cliente_Telefono INTEGER PRIMARY KEY , cliente_Nombre TEXT, cliente_correo TEXT, cliente_contrasena INT)'
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

export const alterTable = (Usuario_Telefono,carrito_status) => {
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
        tx.executeSql(`INSERT INTO carrito (carrito_status,cliente_Telefono) VALUES('${'pendiente'}'),SELECT usuario.cliente_Telefono  FROM usuario   WHERE usuario.cliente_Telefono = '${Usuario_Telefono}'`, null,
            (txtObj, resulSet) => {
                console.log("CREADO")
            }
        )
    })

}

export const createOrdenCarrito = (Usuario_Telefono) => {
    const db = connectionState()
    console.log("ola")
    console.log(db.ConnectionState)

    db.transaction(tx => {
        tx.executeSql(`INSERT INTO ordenCarrito (idCarrito,idMenuItem) SELECT carrito.idCarrito FROM carrito JOIN   WHERE usuario.cliente_Telefono = '${Usuario_Telefono}'`, null,
            (txtObj, resulSet) => {
                console.log("CREADO")
            }
        )
    })

}
export const readTable = () => {
    const db = connectionState()
    db.transaction(tx => {
        // sending 4 arguments in executeSql
        tx.executeSql('SELECT * FROM carrito ', null,
            (txObj, result) => console.log(result),
            (txObj, error) => console.log('Error ', error)
        )
    })
}
