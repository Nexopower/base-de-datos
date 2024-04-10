import { Alergia } from '../app/models/antecedentes.model.js';

// Create and Save a new Tutorial
export const createAntecedente = (req, res) => {
  if(!req.body.nombre){
    res.status(400).send({
        message: "el contenido no puede ser vacio"
    });
    return;
  }
req.body.pac
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
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
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
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
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
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };
