import { PrescriberActions, PrescriberActionTypes } from './prescriber.actions';
import { PrescriberState } from './prescriber.state';
import { PrescriberStateMutators } from './prescriber.state.mutator';


const initialState: PrescriberState = {
  prescriberList : []
};

export function prescriberReducer(state: PrescriberState = initialState, action: PrescriberActions): PrescriberState {
  switch (action.type) {

    case PrescriberActionTypes.successfulPrescribersLoadingAction:
      return PrescriberStateMutators.load(state, action.prescriberList)

    case PrescriberActionTypes.updatePrescriberSuccessAction:
      return PrescriberStateMutators.update(state, action.prescriber)

    case PrescriberActionTypes.failurePrescriberLoading:
        return PrescriberStateMutators.empty(state)

    default:
        return state;
  }
}

