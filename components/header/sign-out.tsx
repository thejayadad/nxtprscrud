import { signOut } from "@/auth";
import { FiLogOut } from "react-icons/fi";

const SignOut = () => {
  return (
    <>
    <form
        action={async () => {
            "use server";
            await signOut();
        }}
    >
        <button
        className="mt-1"
        type="submit">
          <FiLogOut size={18} />
        </button>
    </form>
    </>
  )
}

export default SignOut