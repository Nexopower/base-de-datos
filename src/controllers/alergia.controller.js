import { Alergia } from '../app/models/alergia.model.js';

// Create and Save a new Tutorial
export const createAlergia = (req, res) => {
  if(!req.body.nombre){
    res.status(400).send({
        message: "el contenido no puede ser vacio"
    });
    return;
  }

  //crear alergia
  const alergia ={
    nombre:req.body.nombre
  };

  //guardar alergia 
  Alergia.create(alergia)
  .then(data => {
    res.send(data);
  })
.catch(err=> {
    res.status(500).send({
        message:
        err.message|| "ocurrio un error en la creacion de alergia"
    });
});
};

// Retrieve all Tutorials from the database.
export const findAllAlergias = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? {nombre:{[Op.like]:`%${nombre}%`}}:null;

  Alergia.findAll({where:condition})
  .then(data=>{
    res.send(data);
  })
  .catch(err=> {
    res.status(500).send({
        message:
        err.message || "ocurrio un error al consultar las alergias"
    });
  });
};

// Find a single Tutorial with an id
export const findOneAlergia = (req, res) => {
  const id = req.params.id;

  Alergia.findByPk(id)
  .then(data=>{
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
        message: "error al con cunsultar alergia con el id="+id
    });
  });

};


export const updateAlergia = (req, res) => {
    const id = req.params.id;
  
    Alergia.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "alergia actualizada."
          });
        } else {
          res.send({
            message: `no pudimos actualizar la alergia con el id=${id}. talvez la alergia no exista!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "error actualizando la alergia con el id=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
export const deleteAlergia = (req, res) => {
    const id = req.params.id;
  
    Alergia.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "alergia borrada!"
          });
        } else {
          res.send({
            message: `no pudimos borrar la alergia con el id=${id}. talvez la alergia no exista!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "error actualizando la alergia con el id=" + id
        });
      });
  };
// Delete all Tutorials from the database.
export const deleteAllAlergias = (req, res) => {
    Alergia.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} alergias fueron borradas!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "ocurrio un error al borrar las alergias."
        });
      });
  };
