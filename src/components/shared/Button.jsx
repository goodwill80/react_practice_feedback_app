function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-outline btn-${version} text-white cursor-pointer`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'info',
    type: 'button',
    disabled: 'false'
}

export default Button;