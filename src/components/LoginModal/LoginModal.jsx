import axios from "axios";
import { useRef } from "preact/hooks";
import { route } from "preact-router";

import "./index.css";

export default function LoginModal(props) {
	const mailRef = useRef(null);
	const pwdRef = useRef(null);

	const closeModal = () => {
		props.onClose();
	};

	const sendCredentialsToLogUser = async () => {
		const data = {
			mail: mailRef.current.value,
			pwd: pwdRef.current.value,
		};
		try {
			const response = await axios.post(
				`http://localhost:4000/login`,
				data
			);
			closeModal();
			console.log(response);
			localStorage.setItem("isAdmin", response.data.isAdmin);
			location.reload();
		} catch (error) {
			console.log(error);
			alert(error.response.data.error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			mailRef.current.value.length === 0 ||
			pwdRef.current.value.length === 0
		) {
			alert("Please fill in the form to login");
			mailRef.current.focus();
			return;
		}

		// Call the function to send credentials to the server
		await sendCredentialsToLogUser();
	};

	return (
		<>
			<div className="modal">
				<form className="login-form" action="" onSubmit={handleSubmit}>
					<label className="label-mail" htmlFor="mail">
						Mail:
						<input
							required
							className="input-mail"
							id="mail"
							type="mail"
							ref={mailRef}
						/>
					</label>
					<label className="label-pwd" htmlFor="pwd">
						Password:
						<input
							required
							className="input-pwd"
							id="pwd"
							type="password"
							ref={pwdRef}
						/>
					</label>
					<div className="btn-container">
						<button className="cancel-button" onClick={closeModal}>
							Cancel
						</button>
						<button className="submit-button" type="submit">
							Log Me In!
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
