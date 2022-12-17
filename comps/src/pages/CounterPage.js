import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_VALUE = 'increment_value'
const VALUE_TO_ADD = 'change_value_to_add'
const DECREMENT_VALUE = 'decrement_value'
const ADD_VALUE_TO_COUNTER = 'add_value_to_counter'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_VALUE:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case DECREMENT_VALUE:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload, 
      }
    case ADD_VALUE_TO_COUNTER:
      return {
        ...state,
        counter: state.counter + state.valueToAdd,
        valueToAdd: 0,
      }
    default:
      return state
  }
}

const CounterPage = ({ initialValue }) => {

	// const [counter, setCounter] = useState(initialValue);
	// const [valueToAdd, setValueToAdd] = useState();
	const [state, dispatch] = useReducer(reducer, {
		counter: initialValue,
		valueToAdd: 0,
	})
	
	const increment = () => {
		//setCounter(counter + 1);
    dispatch({
      type: INCREMENT_VALUE,
    });
	}

	const decrement = () => {
		//setCounter(counter - 1);
    dispatch({
      type: DECREMENT_VALUE,
    })
	}

	const handleChange = (event) => {
		let value = parseInt(event.target.value) || 0;
		//setValueToAdd(value);

    dispatch({
      type: VALUE_TO_ADD,
      payload: value,
    })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
    dispatch({
      type: ADD_VALUE_TO_COUNTER,
    })
	}

	return (
		<Panel className="m-3">
			<h1 className="text-lg">Counter is {state.counter}</h1>
			<div className="flex flex-row">
				<Button onClick={increment}>Increment</Button>
				<Button onClick={decrement}>Decrement</Button>
			</div>
			<form onSubmit={handleSubmit}>
				<label>Add a lot!</label>
				<input
					onChange={handleChange}
					value={state.valueToAdd || ""}
 					type="number"
					className="p-1 m-3 bg-gray-200 border border-gray-300"
				/>
				<Button>Add it!</Button>				
			</form>
		</Panel>
	);

}

export default CounterPage;
