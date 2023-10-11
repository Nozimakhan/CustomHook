// import { useNumberId } from './hooks/useNumberId';
import { useArray, useArray1, useArray2, useArray3, useArray4 } from './hooks/useArray';


function App() {
  // const id = useNumberId(13);
  // console.log(id);
  const arr = useArray([1, 2, 3, 4]);
  const arr1 = useArray1([4, 2, 3, 1]);
  const arr2 = useArray2([1, 2, 3, 4]);
  const arr3 = useArray3([4, 2, 3, 1]);
  const arr4 = useArray4([1, 2, 3, 4]);
  return (
    <div className="App">
      <p>{`Reversed array: [${arr}]`}</p>
      <p>{`Index of 1: ${arr1}`}</p>
      <p>{`Cube numbers: [${arr2}]`}</p>
      <p>{`Sorted numbers: [${arr3}]`}</p>
      <p>{`The biggest number: ${arr4}`}</p>
    </div>
  );
}

export default App;
