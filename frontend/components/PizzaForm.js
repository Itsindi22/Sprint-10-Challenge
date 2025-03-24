import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFullName, updateSize, updateTopping } from '../state/formState';
import { useCreateOrderMutation } from '../state/orderApi';

const initialFormState = { // suggested
  fullName: '',
  size: '',
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': false,
}

export default function PizzaForm() {
  const formState = useSelector(state => state.form);
  const dispatch = useDispatch();
  const [createOrder,{isError,isLoading}] = useCreateOrderMutation()
  
  const handleSumbit = (e) => {
    e.preventDefault();
    createOrder(formState);
  }

  return (
    <form onSubmit={handleSumbit}>
      <h2>Pizza Form</h2>
      {isLoading && <div className='pending'>Order in progress...</div>}
      {isError && <div className='failure'>Order failed: fullName is required</div>}

      <div className="input-group">
        <div>
          <label htmlFor="fullName">Full Name</label><br />
          <input
            onChange={e => dispatch(updateFullName(e.target.value))}
            value={formState.fullName}
            data-testid="fullNameInput"
            id="fullName"
            name="fullName"
            placeholder="Type full name"
            type="text"
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label><br />
          <select onChange={e => dispatch(updateSize(e.target.value))} value={formState.size} data-testid="sizeSelect" id="size" name="size">
            <option value="">----Choose size----</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>
          <input onChange={() => dispatch(updateTopping('1'))} checked={formState.toppings?.includes('1')} data-testid="checkPepperoni" name="1" type="checkbox" />
          Pepperoni<br /></label>
        <label>
          <input onChange={() => dispatch(updateTopping('2'))} checked={formState.toppings?.includes('2')} data-testid="checkGreenpeppers" name="2" type="checkbox" />
          Green Peppers<br /></label>
        <label>
          <input onChange={() => dispatch(updateTopping('3'))} checked={formState.toppings?.includes('3')} data-testid="checkPineapple" name="3" type="checkbox" />
          Pineapple<br /></label>
        <label>
          <input onChange={() => dispatch(updateTopping('4'))} checked={formState.toppings?.includes('4')} data-testid="checkMushrooms" name="4" type="checkbox" />
          Mushrooms<br /></label>
        <label>
          <input onChange={() => dispatch(updateTopping('5'))} checked={formState.toppings?.includes('5')} data-testid="checkHam" name="5" type="checkbox" />
          Ham<br /></label>
      </div>
      <input data-testid="submit" type="submit" />
    </form>
  )
}