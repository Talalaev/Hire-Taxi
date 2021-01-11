import { HEATHROW, GATWICK } from "./airports.constants"

export const airportsMixin = {
  data() {
    return {
      airports: [
        {id: 1, name: HEATHROW, terminals: ['1', '2', '3', '4', 'not sure']},
        {id: 2, name: GATWICK, terminals: null},
      ],
    };
  },
}
