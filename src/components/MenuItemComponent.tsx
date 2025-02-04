import { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

export default function MenuItemComponent({item, addItem} : MenuItemProps) {
  
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p className="text-3xl font-semibold">{item.name}</p>
      <p className="text-3xl font-semibold">${item.price}</p>
    </button>
  )
}

