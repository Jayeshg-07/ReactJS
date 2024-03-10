import React, { useState } from 'react';

const ItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [itemList, setItemList] = useState([]);

  const handleAddItem = () => {
    if (itemName && price && description) {
      const newItem = {
        itemName,
        price,
        description,
      };

      setItemList([...itemList, newItem]);
      // Clear the input fields after adding an item
      setItemName('');
      setPrice('');
      setDescription('');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItemList = [...itemList];
    updatedItemList.splice(index, 1);
    setItemList(updatedItemList);
  };

  return (
      <div>
        <h2>Item Form</h2>
        <form>
          <label>
            Item Name:
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Price:
            <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleAddItem}>
            Add
          </button>
        </form>

        <h2>Item List</h2>
        {itemList.length === 0 ? (
            <p>No items added</p>
        ) : (
            <ul>
              {itemList.map((item, index) => (
                  <li key={index}>
                    <div>
                      <strong>{item.itemName}</strong> - {item.price} -{' '}
                      {item.description}
                      <button type="button" onClick={() => handleRemoveItem(index)}>
                        Remove
                      </button>
                    </div>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
};

export default ItemForm;
