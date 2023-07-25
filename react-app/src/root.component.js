export default function Root(props) {
  const { store } = props.rootProps
  return <section className="bg-navy text-white p-4 m-4">
    {props.name} is mounted!
    <p>
      state: {store.state.test.var}
    </p>
  </section>;
}
