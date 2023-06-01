export const handleAddItem = (inputText, items, setItems, setInputText) => {
  if (inputText.trim()) {
    setItems([...items, {text: inputText, checked: false}]);
    setInputText('');
  }
};

export const handleDeleteItem = (index, items, setItems) => {
  const newItems = [...items];
  newItems.splice(index, 1);
  setItems(newItems);
};

export const handleResetList = setItems => {
  setItems([]);
};

export const handleCheckItem = (index, items, setItems) => {
  const newList = [...items];
  newList[index] = {
    text: newList[index].text,
    checked: !newList[index].checked,
  };
  setItems(newList);
};
