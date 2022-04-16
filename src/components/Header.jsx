function Header(props) {
  return (
    <header className="bg-black h-20 flex justify-center items-center tracking-widest font-bold">
        <div>
            <h2 className="text-4xl text-center text-red-500">{props.text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback UI"
}


export default Header
