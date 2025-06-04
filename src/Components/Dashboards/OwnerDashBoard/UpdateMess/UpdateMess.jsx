
import React, { useState } from 'react';

function UploadMessMenu({ onSubmit }) {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [mealType, setMealType] = useState('Breakfast'); // Breakfast/Lunch/Dinner

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName || !description || !price || !mealType) {
      alert('Please fill in all fields!');
      return;
    }

    // Send data to parent or Firestore
    onSubmit({
      name: itemName,
      description,
      price: Number(price),
      type: mealType,
    });

    // Clear form
    setItemName('');
    setDescription('');
    setPrice('');
    setMealType('Breakfast');
  };

  return (
    <div className="container py-4" style={{ maxWidth: '600px' }}>
      <h3 className="text-center mb-4">Upload Mess Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Item Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., Chapati"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            placeholder="e.g., Served with veg curry"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input
            type="number"
            className="form-control"
            placeholder="e.g., 40"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Meal Type</label>
          <select
            className="form-select"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
          >
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Upload Item
        </button>
      </form>
    </div>
  );
}

export default UploadMessMenu;
