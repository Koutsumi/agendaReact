import { onSnapshot, collection, doc, deleteDoc, serverTimestamp, updateDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import  db  from '../services/firebase'
import React, { FormEvent } from 'react';

export default function MyList(){
    
    const [clientes, setClientes] = useState([] as any)
    const [search, setSearch] = useState([] as any)
    const [searching, setSearching] = useState(false)
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [phone, setPhone] = useState<string>()
    const [message, setMessage] = useState<string>()
    const [id, setId] = useState<string>()

    const collectionRef = collection(db, 'cliente')
    
    useEffect( () => {
        const clientList = onSnapshot(collectionRef, (querySnapshot) =>{
            
            const items: object[] = [];

            querySnapshot.forEach((doc) => {
                
                items.push({id: doc.id, ...doc.data()})
                console.log(items)
            })
            setClientes(items)
            return () => {
                clientList()  
            } 
        })
    }, [])

    async function deleteCliente(cliente:any){
        try{
            const clienteRef = doc(collectionRef, cliente.id)
            await deleteDoc(clienteRef)

        }
        catch(error){
            console.log('Erro ao excluir cliente')
        }
    }

    function editCliente(contact: any){
        setId(contact.id)
        setName(contact.name)
        setEmail(contact.email)
        setPhone(contact.phone)
        setMessage(contact.message)
    }

    async function updateCliente(event: FormEvent){
        event.preventDefault()
        const docRef = doc(collectionRef, id)
        const updateCliente =  await updateDoc(docRef, {
            name ,
            email ,
            phone ,
            message ,
            updatedAt: serverTimestamp()
        })
        setIsNavExpanded(false)
    }

    function searchingFC (event: React.ChangeEvent<HTMLInputElement>){
        const word = event.target.value 
        console.log(word)

        if(word.length > 0){
            setSearching(true)
        }else{
            setSearching(false)
        }
        
        const datas = new Array

        clientes.map((cliente: any) => {
            const rules = new RegExp(event.target.value, `gi`)
            if(rules.test(cliente.name)){
                datas.push(cliente)
            }
        })

        setSearch(datas)
    }

    return(
        
        <section className=" h-[500px]  w-[90%] my-4 md:w-[50%] flex flex-col items-center justify-center ">
            
            <div className="w-[90%] flex flex-row items-center justify-between">
                    <input onChange={ searchingFC } className=" md:w-[100%] w-[100%] h-8 px-1 my-2 rounded" type="text" placeholder="Pesquisar por: "/>
            </div>

            <div className="h-[450px] overflow-auto w-[90%] max-w-5xl flex flex-col items-center justify-start bg-green-100 rounded">

                {
                searching ? 
                search.map((cliente:any) =>(

                <>  
                    <div key={cliente.id} className="bg-blue-100 w-[90%] p-3 text-white rounded my-4">
                    <div className="flex flex-row items-center justify-between">
                        <p className="w-[70%] font-bold text-2xl">{cliente.name}</p>
                        <div className="min-w-[30%] flex flex-row items-center justify-between">
                        <button onClick={() => {setIsNavExpanded(!isNavExpanded); editCliente(cliente)}} className=" rounded px-[5px] hover:bg-green-100 bg-white text-blue-100 hover:text-white" >Editar</button>
                        <button onClick={() => deleteCliente(cliente)} className="rounded px-[5px] hover:bg-red-600 bg-white text-blue-100 hover:text-white" >Excluir</button>
                        </div>
                    </div>

                    
                    <p>Telefone: {cliente.phone}</p>
                    <p>E-mail: {cliente.email}</p>
                    <p>OBS.: {cliente.message}</p>
                    <p className="hidden">ID: {cliente.id}</p>
                    </div>                    
                    
                </>


                    
                )) 
                :
                clientes.map((cliente:any, id: string) =>(

                    <>                  
                    <div key={cliente.id}  className="bg-blue-100 w-[90%] p-3 text-white rounded my-4">
                    <div className="flex flex-row items-center justify-between">
                        <p className="w-[70%] font-bold text-2xl">{cliente.name}</p>
                        <div className="min-w-[30%] flex flex-row items-center justify-between">
                            <button onClick={() => {setIsNavExpanded(!isNavExpanded); editCliente(cliente)}} className=" rounded px-[5px] hover:bg-green-100 bg-white text-blue-100 hover:text-white" >Editar</button>
                            <button onClick={() => deleteCliente(cliente)} className="rounded px-[5px] hover:bg-red-600 bg-white text-blue-100 hover:text-white" >Excluir</button>
                        </div>
                    </div>
                    
                    <p>Telefone: {cliente.phone}</p>
                    <p>E-mail: {cliente.email}</p>
                    <p>OBS.: {cliente.message}</p>
                    {/* <p className="hidden">ID: {cliente.id}</p>  */}
                    </div>

                    <section className={isNavExpanded ? 'block absolute h-[500px] overflow-auto w-[90%] my-4 md:w-[50%] flex flex-col items-center justify-start bg-blue-100 rounded' : 'hidden'}>
                    <div className="w-[90%] max-w-5xl flex flex-col items-center justify-center">
                    <div className="w-[90%] flex flex-row items-center justify-between">
                    <h2 className="text-white text-2xl my-4">Editar contato</h2>
                    <p onClick={() => {setIsNavExpanded(!isNavExpanded)}} className="cursor-pointer	 text-white text-1xl my-4">X</p>
                    </div>
                    <form onSubmit={updateCliente}  className="w-full my-[1rem] flex flex-col items-center justify-center">
                        <input onChange={event => setName(event.target.value)} value={name ||''} className="md:w-[320px] w-[90%] h-8 px-1 my-2 rounded" type="text" placeholder="Nome" />
                        <input onChange={event => setPhone(event.target.value)} value={email||''} className="md:w-[320px] w-[90%] h-8 px-1 my-2 rounded" type="email" placeholder="E-mail"/>
                        <input onChange={event => setEmail(event.target.value)} value={phone||''} className="md:w-[320px] w-[90%] h-8 px-1 my-2 rounded" type="tel" placeholder="Celular"/>
                        <textarea onChange={event => setMessage(event.target.value)} value={message||''} className="resize-none md:w-[320px] w-[90%] h-8 px-1 my-2 rounded" placeholder="Mensagem"></textarea>
                        {/* <p className="hidden">ID: {id||''}</p> */}
                        <button className="w-[120px] h-7 bg-green-100 rounded text-white mt-4 hover:bg-white hover:text-green-100 transition-colors" type="submit">Editar</button>
                    </form>
                    </div>
                    </section>

                    </>
                    
                )) 
                }
                
            </div>

            </section>
    )
}