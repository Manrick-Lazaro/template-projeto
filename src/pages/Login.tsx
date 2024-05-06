import Form from "../components/Formulario";
import Header from "../components/Header";
import miniblogApi from "../services/miniblogApi";
import { jwtDecode } from "jwt-decode";
import { useUserStore } from "../states/userState";

export default function Login() {
	const user = useUserStore((state) => state);

	function DataUser(data: any): void {
		const token = data;

		const decoded: { nome: string; email: string } = jwtDecode(token);

		if (decoded.nome || decoded.email) {
			user.updateName(decoded.nome);
			user.updateEmail(decoded.email);
		}
	}

	async function HandleSubmite(data: any) {
		try {
			const response = await miniblogApi.Login(data);
			DataUser(response.access);
		} catch (error) {
			console.log("Erro", error);
		}
		0;
	}

	return (
		<>
			<Header />
			<div className="container-content d-flex justify-content-center mt-5">
				<Form onSubmitForm={HandleSubmite} />
			</div>
		</>
	);
}
