const StepChanger = ({onAdd, onSub, amount}) => (
    <div>
        <p>Update step by{amount}</p>
        <button onClick={onAdd}>+</button>
        <button onClick={onSub}>-</button>
    </div>
)
export default StepChanger;