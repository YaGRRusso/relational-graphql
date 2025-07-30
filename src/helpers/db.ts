export const create = <T extends { id: string }>(list: T[], item: T): T[] => {
  return [...list, item];
};

export const update = <T extends { id: string }>(
  list: T[],
  id: string,
  item: Partial<T>
): T[] => {
  return list.map((i) => (i.id === id ? { ...i, ...item } : i));
};

export const remove = <T extends { id: string }>(
  list: T[],
  id: string
): T[] => {
  return list.filter((item) => item.id !== id);
};
