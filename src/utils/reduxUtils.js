// logs action about to be dispatched and state after the dispatched action
export const logger = store => next => action => {
  console.group(action.type);
  console.info('before:', store.getState());
  console.info('action:', action);
  let result = next(action);
  console.info('after: ', store.getState());
  console.groupEnd();
  return result;
};
