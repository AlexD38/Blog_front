import LoginModal from "../LoginModal/LoginModal";
import "./index.css";
import { useState } from "preact/hooks";

function LoginBtn() {
	const [showLoginModal, setShowLoginModal] = useState(false);

	const showModal = () => {
		showLoginModal ? setShowLoginModal(false) : setShowLoginModal(true);
	};
	const closeModal = () => {
		setShowLoginModal(false);
	};
	return (
		<>
			<button onClick={showModal} className="login-btn">
				Login
			</button>
			{showLoginModal && <LoginModal onClose={closeModal} />}
		</>
	);
}
export default LoginBtn;
