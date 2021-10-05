import { PrescriberState } from './prescriber.state';
import { Prescriber } from '../../../core/classes/prescriber';



export abstract class PrescriberStateMutators {

  static load(state: PrescriberState, prescriberList: Prescriber[]): PrescriberState {
      return {
          ...state,
          prescriberList: prescriberList,
      };
  }

  static update(state: PrescriberState, prescriber: Prescriber): PrescriberState {
    let prescriberList = state.prescriberList
    let index = prescriberList.findIndex(x => x.id = prescriber.id)
    console.log('Index of the element is: ' + index)
    prescriberList[index] = prescriber
    console.log('New presciber list is: ')
    console.log(prescriberList)
    return {
      ...state,
      prescriberList: prescriberList
    }
  }

  static empty(state: PrescriberState): PrescriberState {
      return {
          ...state,
          prescriberList: null,
      };
  }
}
