"use client"

import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await gitHubSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <header>
        <h1 className="text-3x1 text-center">Firebase Authentication</h1>
      </header>
      {user ? (
        <div>
          <p>Welcome {user.displayname}!</p>
          <p>{user.email}</p>
          <img src={user.photoURL} className="w-10 h-10" />
          <button
            type="button"
            onClick={handleSignOut}
            className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <button
            type="button"
            onClick={handleSignIn}
            className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
          >
            Sign In
          </button>
        </div>
      )}
    </main>
  );
}
