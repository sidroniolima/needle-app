import { CONSULTANDO_DB } from "../actions/types";

const INITIAL_STATE = {
  consultandoDb: false
};

export default (state = INITIAL_STATE, action) =>
{
  switch(action.type)
  {
    case CONSULTANDO_DB:
      return { ...state, consultandoDb: action.payload };

    default:
      return state;
  }
}