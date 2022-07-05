import Pacientes from "../models/Pacientes";
import Historial from "../models/Historial";

//Renderiza a los pacientes
export const renderPacientes = async (req, res) => {
  const pacientes = await Pacientes.find().lean();

  res.render("index", { pacientes: pacientes });
};

//Creacion de los pacientes
export const createPacientes = async (req, res) => {
  try {
    const pacientes = Pacientes(req.body);

    await pacientes.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// Rendediraza el formulario del edit
export const renderPacientesEdit = async (req, res) => {
  try {
    const pacientes = await Pacientes.findById(req.params.id).lean();

    res.render("edit", { pacientes });
  } catch (error) {
    console.log(error.message);
  }
};

//Actualiza el edit
export const editPacientes = async (req, res) => {
  const { id } = req.params;

  await Pacientes.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

//elimina las tareas
export const deletePacientes = async (req, res) => {
  const { id } = req.params;

  await Pacientes.findByIdAndDelete(id);

  res.redirect("/");
};

// Update al done
export const toggleDone = async (req, res) => {
  const { id } = req.params;

  const pacientes = await Pacientes.findById(id);

  pacientes.done = !pacientes.done;

  await pacientes.save();

  console.log(pacientes);

  res.redirect("/");
};

//Render el formulario del Historial
export const renderPacientesHistorial = async (req, res) => {
  try {
    const pacientes = await Pacientes.findById(req.params.id).lean();

    res.render("historial", { pacientes });
  } catch (error) {
    console.log(error.message);
  }
};

/* 
const pacientes = await Pacientes.find().lean();
  
    res.render("index", { pacientes: pacientes });


try {
      const pacientes = await Pacientes.findById(req.params.id).lean();
  
      res.render("historial", { pacientes });
    } catch (error) {
      console.log(error.message);
    }
*/

//Creacion del historial
/*
export const createPacientesHistorial = async (req, res) => {
  try {
    const { id } = req.params;

    await Pacientes.findByIdAndUpdate(id, req.body);

    res.redirect("historial");
  } catch (error) {
    console.log(error);
  }
};  */

// Nuevo Intento
export const createPacientesHistorial = async (req, res) => {
  try {
    const historial = Historial(req.body);

    await historial
    .save()
    .populate("");

    res.redirect("historial");
  } catch (error) {
    console.log(error);
  }
}

 


/* Version Anterior
export const createPacientesHistorial = async (req, res) => {
    try {
      const pacientes = Pacientes(req.body);
  
      await pacientes.save();
  
      res.redirect("historial");
    } catch (error) {
      console.log(error);
    }
  };
*/
