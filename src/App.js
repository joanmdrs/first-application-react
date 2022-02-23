import Item from "./components/item"
import Card from "./components/card"

const App = () => {
    return (
        <>
            <h1>Minha primeira aplicação com React</h1>
            <ul>
               <Item>Item 1</Item>
               
            </ul>
            <Card />
        </>
    )
}

export default App