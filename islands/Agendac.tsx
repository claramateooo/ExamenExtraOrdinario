import { FunctionComponent } from "preact";
import {useState} from "preact/hooks" ;
import { Contact } from "../types.ts";
import Agenda from "../components/Agenda.tsx";
const Agendac:FunctionComponent=()=>{
    const [name,setName]=useState<string>("");
    const [email ,setEmail]=useState<string>("");
    const [contacts,setContacts]=useState<Contact[]>([]);
    const [error,setError]=useState<string>("");
    const nuevoContact=(contact :Contact,contacts:Contact[]): boolean =>{
        return contact.name.length>0 && contact.email.length>0 && !contacts.find((c)=> c.email==contact.email)&& contact.email.includes("@") && contact.email.includes(".");
      };
    const addContact=(contact :Contact,contacts:Contact[] )=>{
        if(!nuevoContact(contact,contacts)){
            setError(
                "nvalid contact. A field is empty, email is invalid, or the email is already in use."
            )
      
        return;
    };
    setContacts([...contacts,contact]);
    };


     

    return(
     <>
     <body>
        <Agenda contacts={contacts}/>
      <div  class="agendaForm"> 
       <form>
       <h2>Add new contact</h2>
        <input type="text"name="Name" placeholder="Name" value={name}
        onInput={(e)=>{setError("") ;setName(e.currentTarget.value)}}/>
          <input type="text" name="Email" placeholder="Email" value={email}
        onInput={(e)=>{setError(""); setEmail(e.currentTarget.value)}}/>
        <button  onClick={()=> {addContact({ name, email }, contacts)}  }>
            Add contact</button>
            {error && <p class="error">{error}</p>}
       </form>
      </div>
      </body>
      </>
    )
};
export default Agendac;