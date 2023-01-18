
type HeaderProps={
    headerText:String;
}
const Header =({headerText}:HeaderProps)=>{

    return(
        <div>
            <h1>{headerText}</h1>
        </div>
    )
}
export default Header;