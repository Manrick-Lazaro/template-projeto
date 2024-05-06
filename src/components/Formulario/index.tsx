import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormProps {
	onSubmitForm: (data: any) => Promise<void>;
}

export default function Form(props: FormProps) {
	const schema = yup.object().shape({
		username: yup.string().required("O username é obrigatório."),
		password: yup.string().required("O password é obrigatório."),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data: any): void {
		props.onSubmitForm(data);
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="">
					<div className="mt-2">
						<label>
							Username:
							<input
								type="text"
								className="ml-2"
								{...register("username")}
							/>
						</label>
						<span>{errors.username?.message}</span>
					</div>
					<div className="mt-2">
						<label>
							Password:
							<input
								type="password"
								className="ml-2"
								{...register("password")}
							/>
						</label>
						<span>{errors.password?.message}</span>
					</div>
				</div>

				<div className="mt-5 d-flex justify-content-end">
					<button type="submit">Enviar</button>
				</div>
			</form>
		</>
	);
}
