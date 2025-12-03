export default function CaseCard({ title, result }) {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      padding: 15, 
      borderRadius: 8,
      marginBottom: 15 
    }}>
      <h3>{title}</h3>
      <p>{result}</p>
    </div>
  );
}
