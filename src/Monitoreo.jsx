import datos from "./datos.json"


export function Monitoreo() {
    console.log(datos);
    return (
        <ul >
            {datos.map((datos) => (
                <div>{datos.id_1}</div>
                
            ))}
        </ul>
      );
}