/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */
function Hello(props) {
  // Melakukan destructing props (object)
  const { nama } = props;
  const {jurusan} = props;

  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {props.nama} - Frontend Engineer</p>
      <p>Jurusan - {props.jurusan}</p>
    </div>
  );
}

export default Hello;
