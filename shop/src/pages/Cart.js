import { Button, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName, increase, 상품증가 } from "../store"

function Cart() {

    let state = useSelector((state)=>{ return state })
    let dispatch = useDispatch()

    return (
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={(state)=>{ dispatch(increase(1))}}>1증가버튼</button>
            <button onClick={(state)=>{ dispatch(increase(10))}}>10증가버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i)=>
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <Button onClick={()=>{ dispatch(상품증가(i)) }}>+</Button>
                                </td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </Table>
        </div>
    )
}

export default Cart