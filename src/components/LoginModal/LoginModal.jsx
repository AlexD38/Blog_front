import axios from "axios";
import "./index.css";

export default function LoginModal(props) {
	const closeModal = () => {
		props.onClose();
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("You've clicked on Log Me In button !");
	};
	return (
		<>
			<div className="modal">
				<form className="login-form" action="">
					<label className="label-mail" htmlFor="mail">
						{" "}
						Mail :
						<input className="input-mail" id="mail" type="mail" />
					</label>
					<label className="label-pwd" htmlFor="pwd">
						{" "}
						Password :
						<input className="input-pwd" id="pwd" type="password" />
					</label>
					<div className="btn-container">
						<button className="cancel-button" onClick={closeModal}>
							Cancel
						</button>
						<button
							className="submit-button"
							onClick={handleSubmit}>
							Log Me In !{" "}
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
