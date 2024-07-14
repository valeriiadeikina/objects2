export const getAttacs = (obj) => {
  const attacs = [];
  obj.special.map((item) => {
    if (!("description" in item)) {
      Object.defineProperty(item, "description", {
        value: "Описание недоступно",
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }

    attacs.push(item);
  });
  return attacs;
};
