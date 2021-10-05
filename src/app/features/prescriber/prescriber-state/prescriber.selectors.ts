import { PrescriberState } from './prescriber.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';


const selectPrescriberState = createFeatureSelector<PrescriberState>('prescribers');

export const selectPrescriberSelector = createSelector(
  selectPrescriberState,
  (state: PrescriberState) => state.prescriberList
)
