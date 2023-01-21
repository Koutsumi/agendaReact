import React, { FormEvent } from 'react';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import db from '../services/firebase'
import { useState } from 'react';

export default function Form() {

    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [phone, setPhone] = useState<string>()
    const [message, setMessage] = useState<string>()
    
    
    console.log(name, email, phone, message)

    async function save(event: FormEvent){
        event.preventDefault()
        const docRef = await addDoc(collection(db, 'cliente'),{
            name ,
            email ,
            phone ,
            message,
            createdAt : serverTimestamp(),
            updatedAt:  serverTimestamp()
        });

        //console.log("Id do documento gerado " + docRef.id )

        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    return(
        <section className="rounded w-[90%] md:w-[50%] h-[500px] my-4 flex flex-col items-center justify-center bg-blue-100">
            <div className="w-[90%] max-w-5xl flex flex-col items-center justify-center">
                <h2 className="text-white text-2xl my-4">Cadastre seu contato!</h2>
                <form onSubmit={save} action="" className="w-full my-[1rem] flex flex-col items-center justify-center">
                    <input onChange={event => setName(event.target.value)} value={name} className="md:w-[320px] w-[90%] h-8 px-1 my-2 rounded" type="text" placeholder="Nome" />
                    <input onChange={event => setEmail(event.target.value)} value={email} className="md:w-[320px] w-[90%] h-8 px-1 my-2 rounded" type="email" placeholder="E-mail"/>
                    <input onChange={event => setPhone(event.target.value)} value={phone} className="md:w-[320px] w-[90%] h-8 px-1 my-2 rounded" type="tel" placeholder="Celular"/>
                    <textarea onChange={event => setMessage(event.target.value)} value={message} className="resize-none md:w-[320px] w-[90%] h-8 px-1 my-2 rounded" placeholder="Mensagem" name="" id=""></textarea>
                    <button className="w-[120px] h-7 bg-green-100 rounded text-white mt-4 hover:bg-white hover:text-green-100 transition-colors" type="submit">Salvar</button>
                </form>
            </div>
        </section>
    )
}