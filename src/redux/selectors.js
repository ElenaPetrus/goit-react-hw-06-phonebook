export const getVisibleContacts = ({ items, filter }) => {
  return items.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.includes(filter.trim()),
  );
};
