export default function ServiceCard({ title, description }) {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      padding: 15, 
      borderRadius: 8,
      marginBottom: 15 
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
