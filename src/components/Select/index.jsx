export function Select({ value, onChange }) {
  return (
    <select name="category" value={value} onChange={onChange}>
      <option valeu="Categoria">Categoria</option>
      <option valeu="Refeições">Refeições</option>
      <option valeu="Sobremesas">Sobremesas</option>
      <option valeu="Bebidas">Bebidas</option>
    </select>
  )
}
