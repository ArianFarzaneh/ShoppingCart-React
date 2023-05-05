export type ProuctType = {
  id: string;
  name: string;
  price: string;
  image: string;
  instock: number;
  fastDelivery: boolean;
  ratings: number;
};
export type actionsCartType = {
  type: 'Add_to_Cart' | 'Delete_from_Cart' | 'Descending_sort' | 'Ascending_sort' | 'Update_state';
  payload: ProuctType;
};

export type FilterType = {
  name?:string;
  type:string;
}

export type StateType = {
  cart:ProuctType[];
  products:ProuctType[];
}