
import styled from './Input.module.css'

const Input = ({...rest}) => {
  return (
    <div>
      <input {...rest} className={styled.input}></input>
    </div>
  )
};

export default Input;
