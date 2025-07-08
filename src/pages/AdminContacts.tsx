import { useEffect, useState } from "react";
import AdminLogin from "./AdminLogin";

const AdminContacts = () => {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    fetch("https://plat-web-api.offee.in/api/admin/contacts", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(data => {
        setContacts(data);
        setLoading(false);
      })
      .catch(() => {
        setToken("");
        localStorage.removeItem("adminToken");
        setLoading(false);
      });
  }, [token]);

  if (!token) {
    return <AdminLogin onLogin={tok => { setToken(tok); localStorage.setItem("adminToken", tok); }} />;
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Contact Submissions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Phone</th>
              <th className="border px-2 py-1">Organization</th>
              <th className="border px-2 py-1">Role</th>
              <th className="border px-2 py-1">Enquiry Type</th>
              <th className="border px-2 py-1">Message</th>
              <th className="border px-2 py-1">Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c: any) => (
              <tr key={c.id}>
                <td className="border px-2 py-1">{c.full_name}</td>
                <td className="border px-2 py-1">{c.email}</td>
                <td className="border px-2 py-1">{c.phone}</td>
                <td className="border px-2 py-1">{c.organization}</td>
                <td className="border px-2 py-1">{c.role}</td>
                <td className="border px-2 py-1">{c.enquiry_type}</td>
                <td className="border px-2 py-1">{c.message}</td>
                <td className="border px-2 py-1">{c.submitted_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContacts;