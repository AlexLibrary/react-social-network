export const updateObjectInArrays = (items, itemId, objPropName, newObjProps) => {
  return items.map(obj =>
    obj[objPropName] === itemId ? { ...obj, ...newObjProps } : obj
  )
}


/*
users: state.users.map(obj =>
  obj.id === action.id ? { ...obj, followed: true } : obj
)
*/
