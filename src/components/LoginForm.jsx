import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process login submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="block text-xs text-gray-600 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-xs text-gray-600 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded text-sm"
          required
        />
      </div>
      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded text-sm">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
