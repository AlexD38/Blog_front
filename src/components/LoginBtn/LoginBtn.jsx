import store from "../../store";
import LoginModal from "../LoginModal/LoginModal";
import "./index.css";
import { useState } from "preact/hooks";
import { connect, useDispatch } from "react-redux";
import { delUserName } from "../../actions";

function LoginBtn(props) {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const userConnected = store.getState();
    const dispatch = useDispatch();
    // console.log(props);

    const changeLogBtnContent = () => {
        if (!userConnected.userName) {
            return;
        }
        setIsAdmin(true);
    };
    changeLogBtnContent();

    const logout = () => {
        props.onLogout();
        dispatch(delUserName());
        console.log("User logged out", store.getState());
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
                    logout
                </button>
            ) : (
                <button onClick={showModal} className="login-btn">
                    login
                </button>
            )}
            {showLoginModal && <LoginModal onClose={closeModal} />}
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        userName: state.userName,
    };
};
const mapDispatchToProps = {
    delUserName,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginBtn);
