import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  const [name, setName] = useLocalStorage("name", "");
  const [service, setService] = useLocalStorage("service", "");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: Name = ${name}, Service Number = ${service}`);
  };

  const handleClear = () => {
    setName("");
    setService("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "25px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          maxWidth: "400px",
          width: "90%",
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          data-testid="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="service" style={{ marginTop: "10px" }}>
          Service Number:
        </label>
        <input
          type="text"
          data-testid="service"
          placeholder="Enter service number"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />

        <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>
            Clear Form
          </button>
        </div>
      </form>

      {/* Output Section */}
      <div style={{ marginTop: "20px", textAlign: "center", color: "#333" }}>
        <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
        {service && <h4>Service Number: {service}</h4>}
      </div>
    </>
  );
}

export default Form;