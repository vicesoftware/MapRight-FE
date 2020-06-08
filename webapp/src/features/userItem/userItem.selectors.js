import slice from './userItem.slice'

export const selectSlice = (state) => state[slice.name]

export const selectedUserItemModal = (state) =>
	selectSlice(state).selectedUserItemModal
