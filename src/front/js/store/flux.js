const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: sessionStorage.getItem("token") || null,
			email: sessionStorage.getItem("email") || null
		},
		actions: {
			// Use getActions to call a function within a fuction
			singUp: async(email, password, is_active) => {
				const store = getStore();
				try{
					const response = await fetch(`${process.env.BACKEND_URL}/api/hello`,
						{
							method: 'POST',
							body: JSON.stringify({email, password, is_active: is_active}),
							headers: {"Content-Type": "application/json"}
						});
						
						if(!response.ok) {
							// Manejo de respuestas no exitosas del servidor
							const errorData = await response.json();
							console.log("Error", errorData);
						}
						const data = await response.json();

						if(data.access_token){
							sessionStorage.getItem("token", data.access_token);
							sessionsStorage.getItem("email", data.email);
							setStore({...store, token: data.access_token, email: data.email});
							console.log("Success", data);
						} else{
							console.log("Token not received", data);
						}

				} catch (error){
					console.log("Error loading message from backend", error);
				}

			},
			logIn: async (email, password) => {
				const store = getStore();
				try{
					// fetching data from the backend
					const response = await fetch(`${process.env.BACKEND_URL}/api/hello`,{
						method: 'POST',
						body: JSON.stringify({email, password}),
						headers: {"Content-Type": "application/json"}
					})
					const data = await response.json();
					
					if (data.token) {
						//guardar info token en sessionStorage
						sessionStorage.setItem("token", data.token)
						sessionStorage.setItem("email", data.email)
						setStore({...store, token:data.token, email:data.email})
						console.log("Succes", data)
					} else {
						console.log("Token not received", data)
					}
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			logOut: () =>{
				const store = getStore();
				sessionStorage.removeItem("token");
				setStore({...store, token: '', email: ''});
			}
			
		}
	};
};

export default getState;
