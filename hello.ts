import produce from 'immer'

type State = {
  name: string,
  age: number,
}

const originalState: State[] = [{
  name: 'immer',
  age: 1
}];

console.log('### originalState before change', originalState);

const newState = produce(originalState, draft => {
  draft[0].age = 66;
  draft.push({
    name: 'new-name',
    age: 100
  });
})

console.log('### originalState should not change', originalState);
console.log('### newState', newState);

