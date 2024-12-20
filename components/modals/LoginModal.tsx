import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoadind] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoadind(true);

      // todo add login
      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadind(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className="flex flex-col ">
      //Email
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      //Password
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign In"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default LoginModal;
