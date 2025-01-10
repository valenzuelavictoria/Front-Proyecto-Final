import React, { useState } from 'react';

function EditarCategoria({ category, onClose, onEditCategory }) {
  const [updatedCategory, setUpdatedCategory] = useState(category);

  const handleSave = () => {
    if (updatedCategory.nombre.trim() === '') {
      alert('El nombre de la categoría es obligatorio.');
      return;
    }
    onEditCategory(updatedCategory);
    onClose();
  };

  return (
    <div className="modalAC">
      <div className="modal-contentAC">
        <h3>Editar Categoría</h3>
        <div className="blockAC">
          <label>
            Nombre de la Categoría:
            <input
              type="text"
              value={updatedCategory.nombre}
              onChange={(e) =>
                setUpdatedCategory({ ...updatedCategory, nombre: e.target.value })
              }
            />
          </label>
        </div>
        <div className="blockAC">
          <label>
            Cantidad:
            <input
              type="number"
              min="0"
              value={updatedCategory.cantidad}
              onChange={(e) =>
                setUpdatedCategory({
                  ...updatedCategory,
                  cantidad: parseInt(e.target.value, 10) || 0,
                })
              }
            />
          </label>
        </div>
        <div className="modal-actionsAC">
          <button className="btn-cancelAC" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-saveAC" onClick={handleSave}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditarCategoria;
