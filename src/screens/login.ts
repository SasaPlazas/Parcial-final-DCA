import { addUser } from '../services/firebaseConfig';


export class LoginPage extends HTMLElement {

    constructor(){
        super(); 
        this.attachShadow({mode: 'open'}); 
    }

    connectedCallback (){
        this.render (); 
    }

    changeEmail(e: any) {
		credentials.email = e.target.value;
	}

	changePassword(e: any) {
		credentials.password = e.target.value;
	}


    render(){
        if(this.shadowRoot){
           const pName = this.ownerDocument.createElement('input');
			pName.placeholder = 'Correo electronico';
			pName.addEventListener('change', this.changeEmail);
			this.shadowRoot.appendChild(pName);

			const pPrice = this.ownerDocument.createElement('input');
			pPrice.placeholder = 'Contraseña';
			pPrice.addEventListener('change', this.changePassword);
			this.shadowRoot.appendChild(pPrice);
        }

        }
   
   
 }
