import LoginModal from "../LoginModal/LoginModal";
import "./index.css";
import { useState } from "preact/hooks";

function LoginBtn(props) {
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [isAdmin, setIsAdmin] = useState(props.isAdmin);

	const logout = () => {
		alert("You have been logged out");
		props.onLogout();
		setIsAdmin(false);
	};

	const showModal = () => {
		showLoginModal ? setShowLoginModal(false) : setShowLoginModal(true);
	};
	const closeModal = () => {
		setShowLoginModal(false);
	};
	return (
		<>
			{isAdmin ? (
				<button onClick={logout} className="login-btn">
					{props.content}
				</button>
			) : (
				<button onClick={showModal} className="login-btn">
					{props.content}
				</button>
			)}
			{showLoginModal && <LoginModal onClose={closeModal} />}
		</>
	);
}
export default LoginBtn;
