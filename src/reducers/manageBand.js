export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      let bands = [...state.bands];
      bands.push({ name: action.payload.name });
      return { bands: bands };
    default:
      return state;
  }
}
