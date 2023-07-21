import SignInPage from "@/pages/screens/SignIn";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Chat from "./screens/Chat";
export default function App() {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded || !isSignedIn) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <SignInPage />
      </div>
    );
  }
  return (
    <div>
      <Chat />
      <SignOutButton />
    </div>
  );
}
